"use client";
import { useState, useEffect } from "react";
import arrow from "../assests/arrow.png";
import "../index.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

interface User {
  name: string;
  href: string;
  timestamp: number;
}

const Home = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Not following you back",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/notFollowedBack",
    },
    {
      title: "Pending requests",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/pendingReq",
    },
    {
      title: "You don't follow back",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/notFollowing",
    },
  ];

  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [notFollowedBack, setNotFollowedBack] = useState<User[]>([]);
  const [count, setCount] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        file1Data["relationships_following"].map(
          (item: any) => item["string_list_data"][0]
        )
      );

      const followersList = new Set(
        file2Data.map((item: any) => item["string_list_data"][0]["value"])
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
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 w-full min-h-screen">
      <div className="flex items-center justify-center w-full pt-16">
        <FloatingDock items={links} />
      </div>
      <div className="flex flex-col lg:flex-row justify-start items-start lg:gap-28 gap-12 px-6 lg:px-36">
        <div className="max-w-2xl py-6 mx-8 px-5 scale-125 mt-16 glass ">
          <h1 className="lg:text-[18px] text-m font-bold ">
            Check users who are not following you back
          </h1>
          <div
            className="lg:mb-6 mb-4 lg:text-xs text-[10px] mt-1 text-red-600 cursor-pointer"
            onClick={openModal}
          >
            How to get these JSON files from instagram?
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="followingFile"
            >
              Upload your following .JSON file
            </label>
            <input
              className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 bg-gray-700 border-gray-600"
              id="followingFile"
              onChange={handleFile1Change}
              accept=".json"
              type="file"
            />
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="followersFile"
            >
              Upload your followers .JSON file
            </label>
            <input
              className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 bg-gray-700 border-gray-600"
              id="followersFile"
              onChange={handleFile2Change}
              accept=".json"
              type="file"
            />
          </div>

          <button className="button2" onClick={handleCheck}>
            <span className="text2">Check</span>
            <span className="svg2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="20"
                viewBox="0 0 38 15"
                fill="none"
              >
                <path
                  fill="white"
                  d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        <div className=" px-4 h-[75vh] w-fit mt-3 overflow-y-auto  mb-12 lg:mb-0">
          {notFollowedBack.length > 0 && (
            <div className="mt-6">
              <h2 className="lg:text-xl text-sm font-semibold mb-2 sticky top-0 glass py-2 px-3">
                You follow these people but they don't follow you!
              </h2>
              <p className="mt-4 text-lg font-semibold">Total count: {count}</p>
              <ul className="list-disc pl-6">
                {notFollowedBack.map((user, index) => (
                  <div className="flex flex-row" key={index}>
                    <li
                      className="text-lg text-gray-700 font-semibold mb-2 hover:underline cursor-pointer"
                      onClick={() => window.open(user.href, "_blank")}
                    >
                      {user.name}
                    </li>
                    <img className="w-5 h-4 pl-1" src={arrow.src} alt="" />
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="bg-gradient-to-r from-rose-100 to-teal-100 rounded-[36px] shadow-lg lg:w-[55vw] w-[90vw] lg:px-20 px-9 py-8 leading-relaxed "
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-center lg:text-xl text-lg font-bold pb-4">
                Follow the steps to download the JSON files from instagram
              </h2>
              <ol className="list-decimal">
                <li>Open Instagram, go to setting then <span className="font-semibold text-red-600">Account Center</span>.</li>
                <li>Click on <span className="font-semibold">"your informations and permissions"</span></li>
                <li>
                  Click on <span className="font-semibold">"Download your informations"</span> then <span className="font-semibold">"Download or transfer
                  information"</span>
                </li>
                <li>Select <span className="font-semibold">"Some of your information"</span></li>
                <li>
                  Select <span className="font-semibold">Followers and following</span> in the <span className="font-semibold text-red-600">Connections</span> option
                </li>
                <li>Choose <span className="font-semibold">"Download to device"</span></li>
                <li>
                  Choose date range according to you and <span className="font-semibold text-red-600">select the format to
                  JSON</span> and high quality, then click create.
                </li>
                <li>
                  Download option will be available in the <span className="font-semibold">Download your
                  information</span> section after few minutes.
                </li>
                <li><span className="font-semibold text-red-600">Unzip</span> the folder and upload the asked JSON file here.</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
