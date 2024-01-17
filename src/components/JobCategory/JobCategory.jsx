import PropTypes from 'prop-types';

const JobCategory = ({category}) => {
    const {logo,category_name,availability} = category;
    return (
        <div className="bg-gray-100 rounded-md">
           <img src={logo} alt="" />
            <h2>{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};

JobCategory.propTypes = {
    category: PropTypes.string
  };

export default JobCategory;