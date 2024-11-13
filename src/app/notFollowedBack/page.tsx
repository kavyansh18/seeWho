'use client'
import { useState, useEffect } from 'react';
import arrow from "../assests/arrow.png";

interface User {
  name: string;
  href: string;
  timestamp: number;
}

const Home = () => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [notFollowedBack, setNotFollowedBack] = useState<User[]>(() => {
    const savedData = localStorage.getItem("notFollowedBack");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("notFollowedBack", JSON.stringify(notFollowedBack));
    localStorage.setItem("count", count.toString());
  }, [notFollowedBack, count]);

  const handleFile1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) setFile1(file);
  };

  const handleFile2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) setFile2(file);
  };

  const handleCheck = async () => {
    if (!file1 || !file2) {
      alert("Please upload both files.");
      return;
    }

    try {
      const file1Data = await parseJsonFile(file1);
      const file2Data = await parseJsonFile(file2);

      const followingList = new Set(
        file1Data['relationships_following'].map((item: any) => item['string_list_data'][0])
      );

      const followersList = new Set(
        file2Data.map((item: any) => item['string_list_data'][0]['value'])
      );

      const notFollowedBackList: User[] = [...followingList]
        .filter((user: any) => !followersList.has(user.value))
        .map((user: any) => ({
          name: user.value,
          href: user.href,
          timestamp: user.timestamp,
        }));

      setNotFollowedBack(notFollowedBackList);
      setCount(notFollowedBackList.length);
    } catch (error) {
      alert("Please upload the correct JSON file");
    }
  };

  const parseJsonFile = (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsedData = JSON.parse(reader.result as string);
          resolve(parsedData);
        } catch (error) {
          reject("Error reading JSON file");
        }
      };
      reader.onerror = () => reject("Error reading file");
      reader.readAsText(file);
    });
  };

  return (
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 w-full h-screen'>
      <div className='flex justify-start items-start px-40 gap-32'>
        <div className="max-w-2xl py-6 px-10 shadow-md rounded-lg scale-125 mt-44">
          <h1 className="text-2xl font-bold mb-4">Check Unfollowed Users</h1>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="followingFile">Upload your following .JSON file</label>
            <input className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 bg-gray-700 border-gray-600" id="followingFile" onChange={handleFile1Change} accept=".json" type="file" />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="followersFile">Upload your followers .JSON file</label>
            <input className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 bg-gray-700 border-gray-600" id="followersFile" onChange={handleFile2Change} accept=".json" type="file" />
          </div>
          
          <button
            onClick={handleCheck}
            className="w-full bg-blue-500 text-white py-2 rounded mt-4"
          >
            Check
          </button>
        </div>

        <div className=" px-4 h-[80vh] mt-20 overflow-y-auto">
          {notFollowedBack.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 sticky top-0 bg-white/30 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-2">You follow these people but they don't follow you!</h2>
              <p className="mt-4 text-lg font-semibold">Total count: {count}</p>
              <ul className="list-disc pl-6">
                {notFollowedBack.map((user, index) => (
                  <div className='flex flex-row' key={index}>
                    <li className="text-lg text-gray-700 font-semibold mb-2 hover:underline cursor-pointer" onClick={() => window.open(user.href, '_blank')}>
                      {user.name}
                    </li>
                    <img className='w-4 h-4' src={arrow.src} alt="" />
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
