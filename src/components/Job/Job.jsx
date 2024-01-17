import PropTypes from 'prop-types';
import { MdOutlineLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        // <div>
        //     <img src={logo} alt="" />
        //     <h2>{job_title}</h2>
        //     <p>{company_name}</p>
        // </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div >
                    <button className="btn border-teal-200 px-7 py-1 font-extrabold mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="btn border-teal-200 px-7 py-1 font-extrabold text-[#7E90FE]">{job_type}</button>
                </div>
                <div className='flex gap-6'>
                    <h2 className='flex'><MdOutlineLocationOn className='text-2xl mr-2' />
                        {location}</h2>
                    <h2 className='flex'><CiDollar className='text-2xl mr-2' />Salary : {salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.string
};

export default Job;