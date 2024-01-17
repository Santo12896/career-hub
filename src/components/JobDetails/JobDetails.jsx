import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { MdOutlineSubtitles } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localstorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

    const handleApplyJob =() => {
        saveJobApplication(idInt);
        toast('you have applyed successfully')
    }
    // const {phone}=contact_information;
    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border p-4 md:col-span-3">
                    <p><span className="font-bold">Job Description: </span>{job_description}</p>
                    <p className="my-5"><span className="font-bold">Job Responsibility: </span>{job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements:</span> <br />{educational_requirements}</p>
                    <p className="mt-5"><span className="font-bold">Experiences:</span> <br />{experiences}</p>
                </div>
                <div className="border  p-4 md:col-span-1">
                    <p className="font-bold mb-6">Job Details</p>
                    <p className="flex items-center"><CiDollar className="text-xl mr-1"></CiDollar>{salary}</p>
                    <p className="flex items-center"><MdOutlineSubtitles className="text-xl mr-1"></MdOutlineSubtitles>{job_title}</p>
                    <div>
                        <p className="font-bold my-4">Contact Information</p>
                        <p><span className="text-base font-medium">phone: </span> {contact_information.phone}</p>
                        <p><span className="text-base font-medium">email: </span> {contact_information.email}</p>
                        <p><span className="text-base font-medium">address: </span> {contact_information.address}</p>
                    </div>
                    <div className="mt-7">
                        <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;