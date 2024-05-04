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
import SideBar from './components/SideBar';
import BreadCrumb from './components/BreadCrumb';


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
  const [shortListedCandidates, setShortListedCandidates] = useState<number[]>([]);
  const [toReviewCandidates, setToReviewCandidates] = useState<number[]>([]);
  const [isReviewActive, setIsReviewActive] = useState(true);
  const [isShortlistedActive, setIsShortlistedActive] = useState(false);
  const [isLoadingCandidates, setIsLoadingCandidate] = useState(true);
  const [isLoadingSelectedCandidate, setIsLoadingSelectedCandidate] = useState(true);

  useEffect(() => {
    handleSelectedCandidate(Math.floor(Math.random() * 19) + 1);
    const newCandidates: number[] = [];
    for (let i = 0; i < candidates.length; i++) {
      newCandidates.push(parseInt(candidates[i].id));
    }
    setToReviewCandidates(newCandidates);
  }, [candidates]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingCandidate(true);
    }, 200);
  }, [toReviewCandidates]);

  useEffect(() => {
    console.log(toReviewCandidates);
  }, [shortListedCandidates]);

  const handleSelectedCandidate = (index: number) => {
    setSelectedCandidate(candidates[index]);
  };

  const handleShortListCandidate = (index: number) => {
    if (index < 20) handleSelectedCandidate(index);
    const oldShortListed = shortListedCandidates;
    oldShortListed.push(index);
    setShortListedCandidates(oldShortListed);
    console.log("ShortListedCandidate Change: ", shortListedCandidates);
    const newReviewCandidates = toReviewCandidates.filter((id) => id !== index);
    console.log("NEW", newReviewCandidates);
    setToReviewCandidates(() => newReviewCandidates);
    console.log("TO", toReviewCandidates);
  };

  const handleReviewClick = () => {
    setIsReviewActive(true);
    setIsShortlistedActive(false);
  };

  const handleShortlistedClick = () => {
    setIsReviewActive(false);
    setIsShortlistedActive(true);
  };




  return (
    <main className="flex min-h-screen items-start justify-between px-6 py-4 bg-gray-100 gap-6">
      <SideBar />
      {/*  */}
      <div className="flex flex-col justify-start items-start w-[84%]">
        <BreadCrumb />
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
                <button className={`flex justify-between items-center gap-2 ${isReviewActive ? 'shadow-lg' : ''}  px-6 py-2 rounded-lg text-gray-800`}
                  onClick={handleReviewClick}
                >
                  <IoIosCube className="text-[14px]" />
                  <span className="text-[12px] font-semibold">TO REVIEW</span>
                </button>

                <button className={`flex justify-between ${isShortlistedActive ? 'shadow-lg' : ''} px-6 py-2 rounded-lg items-center gap-2 text-gray-800`}
                  onClick={handleShortlistedClick}
                >
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
                      {isReviewActive && toReviewCandidates.length && isLoadingCandidates ? (
                        toReviewCandidates.map((candidate: number) => {
                          const foundCandidate = candidates.find((c) => parseInt(c.id) === candidate);
                          if (foundCandidate) {
                            return (
                              <tr key={foundCandidate.id} className="hover:bg-gray-200 cursor-pointer transition-all duration-75 w-full flex  justify-between items-center px-3" onClick={() => handleSelectedCandidate(parseInt(foundCandidate.id) - 1)}>
                                <th scope="row" className="py-3 font-medium whitespace-nowrap flex justify-start items-center gap-2">
                                  <Image className="w-10 h-10 rounded-xl" src={foundCandidate.avatar} alt="Profile photo" width={50} height={50} />
                                  <p className="flex flex-col justify-between items-start">
                                    <span className="text-xs font-semibold">{foundCandidate.name}</span>
                                    <span className="text-[14px] text-gray-500">{foundCandidate.email}</span>
                                  </p>
                                </th>
                                <td className={`py-4 text-${progressColor(foundCandidate.score % 100)}-500 font-semibold`}>
                                  {foundCandidate.score % 100}%
                                </td>
                              </tr>
                            )
                          }
                        })
                      ) : isReviewActive &&
                      <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-2 dark:border-gray-700 gap-1 flex flex-col">
                        <div className="flex items-center mt-1">
                          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                          </div>
                        </div>
                        <div className="flex items-center mt-1">
                          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                          </div>
                        </div>
                        <div className="flex items-center mt-1">
                          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                          </div>
                        </div>
                        <div className="flex items-center mt-1">
                          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                          </div>
                        </div>
                        <div className="flex items-center mt-1">
                          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                          </div>
                        </div>
                        <div className="flex items-center mt-1">
                          <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                          <div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                          </div>
                        </div>
                        <span className="sr-only">Loading...</span>
                      </div>
                      }
                      {isShortlistedActive && shortListedCandidates.length ? (
                        shortListedCandidates.map((candidate: number) => {
                          const foundCandidate = candidates.find((c) => parseInt(c.id) === candidate);
                          if (foundCandidate) {
                            return (
                              <tr key={foundCandidate.id} className="hover:bg-gray-200 cursor-pointer transition-all duration-75 w-full flex  justify-between items-center px-3" onClick={() => handleSelectedCandidate(parseInt(foundCandidate.id))}>
                                <th scope="row" className="py-3 font-medium whitespace-nowrap flex justify-start items-center gap-2">
                                  <Image className="w-10 h-10 rounded-xl" src={foundCandidate.avatar} alt="Profile photo" width={50} height={50} />
                                  <p className="flex flex-col justify-between items-start">
                                    <span className="text-xs font-semibold">{foundCandidate.name}</span>
                                    <span className="text-[14px] text-gray-500">{foundCandidate.email}</span>
                                  </p>
                                </th>
                                <td className={`py-4 text-${progressColor(foundCandidate.score % 100)}-500 font-semibold`}>
                                  {foundCandidate.score % 100}%
                                </td>
                              </tr>
                            )
                          }
                        })
                      ) : isShortlistedActive && <h1>No Shortlisted Candidates</h1>}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
          <div className="min-w-[66%] flex justify-between items-start shadow-lg bg-white p-2 rounded-xl gap-6">
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
                    <p className="text-xs font-semibold text-gray-500">Behavioral</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
                      <div className={`${progressColor(selectedCandidate.behavioral)} h-2 rounded-full`} style={{ width: `${(selectedCandidate.behavioral / 10) * 100}%` }} ></div>
                    </div>
                    <p className={`text-xs ${scaleColor(selectedCandidate.behavioral)} font-semibold`}>{selectedCandidate.behavioral}/10</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold text-gray-500">Communication</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
                      <div className={`${progressColor(selectedCandidate.communication)} h-2 rounded-full`} style={{ width: `${(selectedCandidate.communication / 10) * 100}%` }} ></div>
                    </div>
                    <p className={`text-xs ${scaleColor(selectedCandidate.communication)} font-semibold`}>{selectedCandidate.communication}/10</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold text-gray-500">Situation handling</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-200">
                      <div className={`${progressColor(selectedCandidate.situation_handling)} h-2 rounded-full`} style={{ width: `${(selectedCandidate.situation_handling / 10) * 100}%` }} ></div>
                    </div>
                    <p className={`text-xs ${scaleColor(selectedCandidate.situation_handling)} font-semibold`}>{selectedCandidate.situation_handling}/10</p>
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
                <button className="text-white bg-[#1ec3b3] text-sm font-semibold px-28 py-2 rounded-xl my-6 text-center m-auto" onClick={() => handleShortListCandidate(parseInt(selectedCandidate.id))}>SHORTLIST</button>
              </div>
              <div>
              </div>
            </div>}
            <div className="">
              <Image src={GirlProfile} alt="Image" className="rounded-lg min-h-[80vh] object-fill w-full] text-right block" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const progressColor = (scale: number) => {
  if (scale <= 4) {
    return "bg-red-500";
  } else if (scale <= 7) {
    return "bg-yellow-400";
  } else {
    return "bg-green-400";
  }
};


const scaleColor = (scale: number) => {
  if (scale <= 4) {
    return "text-red-500";
  } else if (scale <= 7) {
    return "text-yellow-400";
  } else {
    return "text-green-400";
  }
};