import ApplyButton from '@/app/components/Helper/ApplyButton';
import JobCard from '@/app/components/Helper/JobCard';
import { authOptions } from '@/auth';
import JobData from '@/data';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react'
import { Job } from '@/data';

const JobDetails = async ({ params }: { params: {id:string} }) => {
    const singleJob = JobData.find((job) => job.id.toString() === params.id) as Job;
    const session = await getServerSession(authOptions);
    const firstFourJob = JobData.slice(0, 4);
    
  return (
    <div className="mt-20 mb-12">
        <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
            <div className="flex-[0.7]">
                <JobCard job={singleJob} />
            </div>
            {session && <ApplyButton />}
            {!session && (
                <Link href="/singup">
                    <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">Sign Up To Apply</button>
                </Link>
            )}
        </div>
        <div  className="mt-16 w-[80%] mx-auto">
            <h1 className="text-[20px] font-semibold">Job Description</h1>
            <p className="mt-4 text-black text-opacity-70">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, vel sapiente est similique iusto nostrum quidem eaque dolores repellat vero eum deleniti voluptatibus dolore autem debitis quae aliquam deserunt inventore?
            </p>
            <h1 className="text-[20px] mt-8 font-semibold">Key Responsibilities</h1>
            <p className="mt-4 text-black text-opacity-70">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, vel sapiente est similique iusto nostrum quidem eaque dolores repellat vero eum deleniti voluptatibus dolore autem debitis quae aliquam deserunt inventore?
            </p>
            <h1 className="text-[20px] mt-8 font-semibold">Skills</h1>
            <ul className="mt-4">
                <li className="mt-4 text-black text-opacity-70">React JS</li>
                <li className="mt-4 text-black text-opacity-70">Next JS</li>
                <li className="mt-4 text-black text-opacity-70">Tailwind CSS</li>
                <li className="mt-4 text-black text-opacity-70">TypeScript</li>
                <li className="mt-4 text-black text-opacity-70">Next Auth</li>
            </ul>
            <h1 className="text-[20px] mt-8 font-semibold">Related Job</h1>
            <div className="mt-8">
            {
                firstFourJob.map((job) => {
                    return (
                        <Link href={`/job/jobdetails/${job.id}`} key={job.id} className="spce-y-6">
                            <JobCard job={job}/>
                        </Link>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default JobDetails;