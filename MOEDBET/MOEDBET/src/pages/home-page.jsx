import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <span onClick={() => navigate("/add")}>add</span>
      <span onClick={() => navigate("/find")}>find</span>
    </div>
  );
}

export default HomePage;
