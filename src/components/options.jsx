import { Link } from "react-router-dom";


const Options = () => {
  return (
    <div>
      
      <h2>Predict Peak energy consumption for a district</h2>
      
      <Link to="/test">
        <button>predict for your district</button>
      </Link>
      <h2>Compare Peak Energy consumption for two districts</h2>
      <Link to="/compare">
        <button>Compare districts</button>
      </Link>
      
    </div>
  );
};

export default Options;

