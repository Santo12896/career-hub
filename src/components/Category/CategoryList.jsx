import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";


const CategoryList = () => {
    const [categorys , setCategorys] = useState([]);

    useEffect (() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
    },[])
    return (
        <div>
            <div>
                <h2 className="text-5xl text-center">Job Category List:{categorys.length}</h2>
                <p className="text-center ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid gap-5 grid-cols-4 my-7">
                {
                    categorys.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryList;