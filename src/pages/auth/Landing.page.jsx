import Navbar from "../../components/UI/Navbar";
import { useNavigate } from "react-router-dom";

function Landing() {
  const Navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div className="profileInfo">
        <h1>Welcome to the landing page</h1>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => Navigate("/app/profile")}>Profile</button>
      </div>
    </>
  );
}

export default Landing;
