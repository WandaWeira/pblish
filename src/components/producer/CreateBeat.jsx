import { useLocation } from "react-router-dom";

const CreateBeat = () => {
  const location = useLocation();
  const file = location.state?.file;
  console.log(file);
  return <div>CreateBeat</div>;
};

export default CreateBeat;
