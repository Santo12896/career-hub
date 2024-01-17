

const Banner = () => {
    return (
        <div className="flex justify-between">
            <div className="my-auto">
                <h2 className="text-4xl font-extrabold	">One Step <br /> Closer To Your <br /> <span className="text-teal-300">Dream Job</span></h2>
                <p className="text-[#757575] max-w-xl my-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
            </div>
            <div>
                <img className="max-w-4xl max-h-96" src="../../../public/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;