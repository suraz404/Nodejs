import axios from "axios";

const App = () => {
  const getResponse = async () => {
    const res = await axios.get("http://localhost:8000/");

    console.log(res);
  };

  return (
    <div>
      <button onClick={getResponse}>Send</button>
    </div>
  );
};

export default App;
