import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../utility/localstorage";
import GetJob from "../GetJob/GetJob";




const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            // console.log(jobsApplied);
            setAppliedJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <h2 className="text-2xl">jobs i applied: {appliedJobs.length}</h2>
            {
                appliedJobs.map(job => <GetJob key={job.id} job={job}></GetJob>
                // <li key={job.id}>
                //     <span>{job.job_title}</span>
                // </li>
                )
            }
        </div>
    );
};

export default AppliedJobs;