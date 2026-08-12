const App = () => {
  const getResponse = async () => {
    const res = await fetch("http://localhost:8000/");
    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <button onClick={getResponse}>Send</button>
    </div>
  );
};

export default App;
