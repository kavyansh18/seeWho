"use client"
import { useState } from 'react';

const Home = () => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [notFollowingBack, setNotFollowingBack] = useState<string[]>([]);
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
        file1Data['relationships_following'].map((item) => item['string_list_data'][0]['value'])
      );
      const followersList = new Set(
        file2Data.map((item) => item['string_list_data'][0]['value'])
      );

      const notFollowingBackList = [...followersList].filter(user => !followingList.has(user));

      setNotFollowingBack(notFollowingBackList);
      setCount(notFollowingBackList.length);
    } catch (error) {
      alert("Error processing the files.");
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
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Check People Who Follow You, But You Don't Follow Back</h1>
      
      <div className="mb-4">
        <label className="block text-lg font-medium">Upload Following List (JSON)</label>
        <input
          type="file"
          onChange={handleFile1Change}
          accept=".json"
          className="w-full mt-2 border border-gray-300 rounded p-2"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-lg font-medium">Upload Followers List (JSON)</label>
        <input
          type="file"
          onChange={handleFile2Change}
          accept=".json"
          className="w-full mt-2 border border-gray-300 rounded p-2"
        />
      </div>

      <button
        onClick={handleCheck}
        className="w-full bg-blue-500 text-white py-2 rounded mt-4"
      >
        Check
      </button>

      {notFollowingBack.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">These people follow you, but you don't follow them back!</h2>
          <ul className="list-disc pl-6">
            {notFollowingBack.map((user, index) => (
              <li key={index} className="text-lg text-gray-700">{user}</li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-semibold">Total count: {count}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
