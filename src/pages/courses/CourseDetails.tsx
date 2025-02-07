import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Course Details</h1>
      <p>Course ID: {id}</p>
    </div>
  );
};

export default CourseDetails;