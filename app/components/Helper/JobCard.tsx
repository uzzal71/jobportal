import { Job } from '@/data';
import Image from 'next/image';
import React from 'react'
import { BiMoney } from 'react-icons/bi';
import { FaMapLocation } from 'react-icons/fa6';

interface Props {
    job: Job;
}

const JobCard = ({ job }: Props) => {
  return (
    <div className="p-4 mb-6 relative border-4 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
    <div className="flex items-center space-x-6">
        <Image src={job?.image} alt={job?.title} width={60} height={60}/>
        <div>
            <h1 className="text-[17px] font-semibold mb-[0.4rem]">{job?.title}</h1>
            <div className="flex items-center md:space-x-10 space-x-4">
                {/* Location */}
                <div className="flex items-center space-x-2">
                    <FaMapLocation className="w-[0.8rem] h-[0.8rem] text-pink-700"/>
                    <p className="text-[14px] text-black font-semibold text-orange-60">{job?.location}</p>
                </div>
                {/* Salery */}
                <div className="flex items-center space-x-2">
                    <BiMoney className="w-[0.8rem] h-[0.8rem] text-pink-700"/>
                    <p className="text-[14px] text-black font-semibold text-orange-60">{job?.salary}</p>
                </div>
            </div>
            {/* Job Type */}
            <div className="flex items-center space-x-2 sm:space-x-4 mt-[1rem]">
                <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-400">{job?.jobtype}</div>
                <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-gray-400">Private</div>
                <div className="text-[10px] sm:text-[14px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-blue-400">Urgent</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default JobCard