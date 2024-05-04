import React from 'react';
import { FaCubes, FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const SideBar = () => {
    return (
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
    )
}

export default SideBar