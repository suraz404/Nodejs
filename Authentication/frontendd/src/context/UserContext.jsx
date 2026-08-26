import DataContext from "./DataContext";

const UserContext = ({ children }) => {
  const serverUrl = "http://localhost:8000";
  const value = {
    serverUrl,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default UserContext;
