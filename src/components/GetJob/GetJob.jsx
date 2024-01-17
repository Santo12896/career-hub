import PropTypes from 'prop-types';
import { MdOutlineLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";

const GetJob = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, salary, location} = job;
    return (
        <div className="card mb-4 card-side bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='my-4'>
                    <button className="btn border-teal-200 px-7 py-1 font-extrabold mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="btn border-teal-200 px-7 py-1 font-extrabold text-[#7E90FE]">{job_type}</button>
                </div>
                <div className='flex gap-6'>
                    <h2 className='flex'><MdOutlineLocationOn className='text-2xl mr-2' />
                        {location}</h2>
                    <h2 className='flex'><CiDollar className='text-2xl mr-2' />Salary : {salary}</h2>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button>
                </div>
            </div>
        </div>
    );
};

GetJob.propTypes = {
    job: PropTypes.string
};

export default GetJob;