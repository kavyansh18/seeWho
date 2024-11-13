"use client"
import { useState } from 'react';

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [sentRequests, setSentRequests] = useState<string[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) setFile(file);
  };

  const handleCheck = async () => {
    if (!file) {
      alert("Please upload the file.");
      return;
    }

    try {
      const fileData: { relationships_follow_requests_sent: { string_list_data: { value: string }[] }[] } = await parseJsonFile(file);

      const followRequests = fileData['relationships_follow_requests_sent'].map(
        (item) => item['string_list_data'][0]['value']
      );

      setSentRequests(followRequests);
      setCount(followRequests.length);
    } catch (error) {
      alert("Error processing the file.");
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
      <h1 className="text-2xl font-bold mb-4">Check Sent Follow Requests</h1>

      <div className="mb-4">
        <label className="block text-lg font-medium">Upload Sent Follow Requests (JSON)</label>
        <input
          type="file"
          onChange={handleFileChange}
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

      {sentRequests.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Follow Requests Sent:</h2>
          <ul className="list-disc pl-6">
            {sentRequests.map((user, index) => (
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
