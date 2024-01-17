import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mx-auto">
            <h2 className="my-10">opps!!</h2>
            <div className="flex justify-center ">
                <Link to="/" >go home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;