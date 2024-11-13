"use client"
import { useState } from 'react';

const Home = () => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [notFollowedBack, setNotFollowedBack] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

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
      const file1Data: { relationships_following: { string_list_data: { value: string }[] }[] } = await parseJsonFile(file1);
      const file2Data: { string_list_data: { value: string }[] }[] = await parseJsonFile(file2);

      const followingList = new Set(
        file1Data['relationships_following'].map(
          (item: any) => item['string_list_data'][0]['value']
        )
      );
      const followersList = new Set(
        file2Data.map((item: any) => item['string_list_data'][0]['value'])
      );

      const notFollowedBackList = [...followingList].filter(user => !followersList.has(user));

      setNotFollowedBack(notFollowedBackList);
      setCount(notFollowedBackList.length);
    } catch (error) {
      alert("Error processing the files.");
    }
  };

  // Function to parse JSON file
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
      <div className='flex justify-start items-start px-40  gap-20'>
    <div className="max-w-2xl p-6  shadow-md rounded-lg scale-125 mt-28">
      <h1 className="text-2xl font-bold mb-4">Check Unfollowed Users</h1>
      
      <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size">Upload your following .JSON file</label>
      <input className="block w-full text-sm  border rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" id="default_size" onChange={handleFile1Change} accept=".json" type="file" />
      </div>
      
      <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="default_size">Upload your followers .JSON file</label>
      <input className="block w-full text-sm  border rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400" id="default_size" onChange={handleFile2Change} accept=".json" type="file" />
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
      <h2 className="text-xl font-semibold mb-2 sticky top-0 bg-white py-2">You follow these people but they don't follow you!</h2>
      <ul className="list-disc pl-6">
        {notFollowedBack.map((user, index) => (
          <li key={index} className="text-lg text-gray-700">{user}</li>
        ))}
      </ul>
      <p className="mt-4 text-lg font-semibold">Total count: {count}</p>
    </div>
  )}
</div>

      </div>

    </div>
  );
};

export default Home;
