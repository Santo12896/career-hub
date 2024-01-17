import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setdataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="mb-7">
                <h2 className="text-5xl text-center">Featured Jobs:{jobs.length}</h2>
                <p className=" text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? "hidden" : ""}>

                <button onClick={()=>{setdataLength(jobs.length)}} className="btn bg-gradient-to-r from-cyan-500 to-blue-500">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;