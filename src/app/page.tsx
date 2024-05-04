'use client'

import { FaCubes, FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import { IoIosCube } from "react-icons/io";
import { AiFillCopy } from "react-icons/ai";
import Image from "next/image";
import GirlProfile from '../../public/girl.jpg';
import { useEffect, useState } from "react";
import { users } from '../app/data/user';


interface CandidateData {
  id: string;
  name: string;
  avatar: string;
  email: string;
  score: number;
  behavioral: number;
  communication: number;
  situation_handling: number;
  about: string;
  experience: string;
  hobbies: string;
  introduction: string;
};

const dummyUserData: CandidateData = {
  id: "1",
  name: "Sophia Garcia",
  avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  email: "sophia.garcia@example.com",
  score: 88,
  behavioral: 9,
  communication: 8,
  situation_handling: 9,
  about: "I'm a passionate software engineer with a focus on building scalable and efficient solutions. I enjoy working on challenging projects that push the boundaries of technology.",
  experience: "Full-stack developer with expertise in JavaScript, React, Node.js, and MongoDB.",
  hobbies: "Coding, hiking, playing guitar, and exploring new technologies.",
  introduction: "Hello, I'm Sophia, a dedicated software engineer committed to delivering high-quality software solutions."
};


export default function Home() {
  const [candidates, setCandidates] = useState(users);
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateData>(dummyUserData);


  useEffect(() => {
    handleSelectedCandidate(1);
  }, [candidates]);

  const handleSelectedCandidate = (index: number) => {
    console.log("candidate:", index);
    setSelectedCandidate(candidates[index]);
    console.log(selectedCandidate);
  };



  return (
    <main className="flex min-h-screen items-start justify-between px-6 py-4 bg-gray-100 gap-6">
      {/* sideBar */}
      <div className="flex flex-col justify-start items-start w-[16%]">
        <div className="flex items-center justify-start gap-4 shadow-sm rounded-md pb-6 pr-2 border-b border-gray-100 w-full">
          <FaCubes className="text-2xl text-gray-500" />
          <h3 className="font-semibold">Hi, AltWorld</h3>
        </div>
        <button className="flex justify-start items-center gap-4 my-10 ml-4">
          <FaHome className="text-[#5ad4c9] text-lg" />
          <span>Dashboard</span>
        </button>
        <div className="max-w-xs p-3 rounded-2xl shadow bg-[#5ad4c9] border-[#5ad4c9]">
          <button type="button" className="text-gray-500 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-xl text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
            <FaPlus className="text-2xl" />
          </button>
          <a href="#">
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-white dark:text-white">New Assignment?</h5>
          </a>
          <p className="mb-3 font-normal text-white text-xs">Select from pre-defined questions to have a quick turnaround.</p>
          <a href="#" className="inline-block items-center px-1 py-3 text-xs text-center bg-white text-gray-700 font-semibold rounded-2xl w-full">
            Create New Assignment
          </a>
        </div>

      </div>
      {/*  */}
      <div className="flex flex-col justify-start items-start w-[84%]">
        <nav className="flex flex-col mb-4" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-xs">
                <li className="inline-flex items-center">
                  <a href="#" className="text-xs inline-flex items-center font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-600">
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    /
                    <a href="#" className="ms-1 text-xs font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-gray-600">Projects</a>
                  </div>
                </li>
              </ol>
              <p className="mt-2 text-xs font-semibold text-gray-700">Sales BDE</p>
        </nav>
        <div className="flex items-start justify-start gap-4">
          <div className="min-w-[30%]">
            <div className="shadow-xl bg-white rounded-xl py-2">
              <div className="px-2">
                <ul className="flex justify-between items-center mb-4">
                  <li className="font-semibold text-gray-700">Sales BDE</li>
                  <li className="flex justify-between items-center gap-4"><span className="text-[#2ea041] text-sm font-bold">Active</span> <FaPencilAlt className="text-[12px] drop-shadow-lg rounded-lg" /></li>
                </ul>
                <ul className="flex justify-between items-center text-xs mb-2">
                  <li className="text-gray-500 font-semibold">Assignment Link</li>
                  <li><Link href="https://tiny.url/asknakdna/" className="text-blue-500 font-semibold">https://tiny.url/asknakdna/</Link></li>
                </ul>
                <ul className="flex justify-between items-center text-xs mb-2">
                  <li className="text-gray-500 font-semibold">Assignment Hour</li>
                  <li><Link href="https://tiny.url/asknakdna/" className="text-gray-500 font-semibold">3 hours</Link></li>
                </ul>
                <ul className="flex justify-between items-center text-xs mb-2">
                  <li className="text-gray-500 font-semibold">Assignment Ends at</li>
                  <li><Link href="https://tiny.url/asknakdna/" className="text-gray-500 font-semibold">11 March 2024</Link></li>
                </ul>
              </div>


              <div className="flex justify-start items-center gap-6 px-2">
                <button className="flex justify-between items-center gap-2 shadow-lg px-6 py-2 rounded-lg text-gray-800">
                  <IoIosCube className="text-[14px]" />
                  <span className="text-[12px] font-semibold">TO REVIEW</span>
                </button>

                <button className="flex justify-between items-center gap-2 text-gray-800">
                  <AiFillCopy className="text-[14px]" />
                  <span className="text-[12px] font-semibold">SHORTLISTED</span>
                </button>
              </div>

              <div className="mt-4 w-full">
                <ul className="flex justify-between items-center text-[12px] text-gray-400 font-semibold px-3">
                  <li>
                    CANDIDATE
                  </li>
                  <li>
                    SCORE
                  </li>
                </ul>


                <div className="w-full h-80 overflow-scroll">
                  <table className="w-full text-sm mt-2 overflow-scroll">
                    <tbody className="w-full">
                      {candidates.map((candidate: { name: string, email: string, score: number, id: string, avatar: string }, index: number) => {
                        const id = candidate.id; // Add this line to declare the 'id' variable
                        return (
                          <tr key={index} className="hover:bg-gray-200 cursor-pointer transition-all duration-75 w-full flex  justify-between items-center px-3" onClick={() => handleSelectedCandidate(parseInt(id))}>
                            <th scope="row" className="py-3 font-medium whitespace-nowrap flex justify-start items-center gap-2">
                              <Image className="w-10 h-10 rounded-xl" src={candidate.avatar} alt="Profile photo" width={50} height={50} />
                              <p className="flex flex-col justify-between items-start">
                                <span className="text-xs font-semibold">{candidate.name}</span>
                                <span className="text-[14px] text-gray-500">{candidate.email}</span>
                              </p>
                            </th>
                            <td className="py-4 text-green-500 font-semibold">
                              {candidate.score % 100}%
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
          <div className="min-w-[66%] flex justify-between items-start shadow-lg p-2 rounded-xl gap-6">
            {selectedCandidate && <div className="w-1/2">
              <div className="">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center justify-start gap-2">
                    <Image className="w-10 h-10 rounded-xl" src={selectedCandidate.avatar} alt="Profile photo" width={50} height={50} />
                    <p className="flex flex-col justify-between items-start">
                      <span className="text-xs font-semibold">{selectedCandidate.name}</span>
                      <span className="text-[14px] text-gray-500">{selectedCandidate.email}</span>
                    </p>
                  </div>
                  <p className="py-4 text-green-500 font-semibold">
                    {selectedCandidate.score}%
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold text-gray-500">Behavioural</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }} ></div>
                    </div>
                    <p className="text-xs text-green-500 font-semibold">{selectedCandidate.behavioral}/10</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold text-gray-500">Communication</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }} ></div>
                    </div>
                    <p className="text-xs text-green-500 font-semibold">{selectedCandidate.communication}/10</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold text-gray-500">Situation handling</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }} ></div>
                    </div>
                    <p className="text-xs text-[#ecb22e] font-semibold">{selectedCandidate.situation_handling}/10</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-4 mt-6">
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-sm font-semibold text-gray-800">About</h3>
                  <p className="text-xs text-gray-500">{selectedCandidate.about}</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-sm font-semibold text-gray-800">Experience</h3>
                  <p className="text-xs text-gray-500">{selectedCandidate.experience}</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-sm font-semibold text-gray-800">Hobbies</h3>
                  <p className="text-xs text-gray-500">{selectedCandidate.hobbies}</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-sm font-semibold text-gray-800">Introduction</h3>
                  <p className="text-xs text-gray-500">{selectedCandidate.introduction}</p>
                </div>
                <button className="text-white bg-[#1ec3b3] text-sm font-semibold px-28 py-2 rounded-xl my-6 text-center m-auto">SHORTLIST</button>
              </div>
              <div>
              </div>
            </div>}
            <div className="flex justify-end items-end w-1/2">
              <Image src={GirlProfile} alt="Image" className="rounded-lg min-h-[80vh] object-fill w-full] text-right block" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
