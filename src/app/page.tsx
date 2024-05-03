import { FaCubes, FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import { IoIosCube } from "react-icons/io";
import { AiFillCopy } from "react-icons/ai";
import Image from "next/image";
import GirlProfile from '../../public/girl.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-between px-6 py-4 bg-gray-100">
      <div className="flex flex-col justify-start items-start w-[15%]">
        <div className="flex items-center justify-start gap-4 shadow-sm rounded-md pb-6 pr-2 border-b border-gray-100 w-full">
          <FaCubes className="text-2xl text-gray-500" />
          <h3 className="font-semibold">Hi, AltWorld</h3>
        </div>
        <button className="flex justify-start items-center gap-4 my-10 ml-4">
          <FaHome className="text-[#5ad4c9] text-lg" />
          <span>Dashboard</span>
        </button>
        <div className="max-w-xs p-3 bg-white border border-gray-200 rounded-2xl shadow dark:bg-[#5ad4c9] dark:border-[#5ad4c9]">
          <button type="button" className="text-gray-500 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-xl text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
            <FaPlus className="text-2xl" />
          </button>
          <a href="#">
            <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">New Assignment?</h5>
          </a>
          <p className="mb-3 font-normal text-white text-xs">Select from pre-defined questions to have a quick turnaround.</p>
          <a href="#" className="inline-block items-center px-1 py-3 text-xs text-center bg-white text-gray-700 font-semibold rounded-2xl w-full">
            Create New Assignment
          </a>
        </div>

      </div>
      <div className="w-[33%]">
        <div className="shadow-xl bg-white rounded-xl py-2">
          <div className="px-2">
            <ul className="flex justify-between items-center mb-4">
              <li className="font-semibold text-gray-700">Sales BDE</li>
              <li className="flex justify-between items-center gap-2"><span className="text-[#2ea041] text-sm font-bold">Active</span> <FaPencilAlt className="text-[12px] shadow-lg shadow-gray-200 rounded-lg" /></li>
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


            <div className="w-full">
              <table className="w-full text-sm mt-2">
                <tbody className="w-full">
                  <tr className="bg-gray-200 w-full flex  justify-between items-center px-3">
                    <th scope="row" className="py-3 font-medium whitespace-nowrap flex justify-start items-center gap-2">
                      <Image className="w-10 h-10 rounded-xl" src={GirlProfile} alt="Profile photo" width={50} height={50} />
                      <p className="flex flex-col justify-between items-start">
                        <span className="text-xs font-semibold">Saurav Singh</span>
                        <span className="text-[14px] text-gray-500">saurav@gmail.com</span>
                      </p>
                    </th>
                    <td className="py-4 text-green-500 font-semibold">
                      78%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
      <div></div>
    </main>
  );
}
