import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataContext from "../context/DataContext";

export const Home = () => {
  const { serverUrl, user, setUser, setIsLoggedIn } = useContext(DataContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${serverUrl}/api/logout`,
        {},
        { withCredentials: true },
      );
    } catch (error) {
      console.log(error.response?.data?.message || "Logout failed");
    } finally {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("user");
      setUser(null);
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090b] px-4 py-10 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
              Home
            </p>
            <h1 className="mt-2 text-4xl font-bold">
              Welcome, {user?.firstName || "there"}!
            </h1>
          </div>

          <button
            onClick={handleLogout}
            type="button"
            className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-zinc-800"
          >
            Log out
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
            <p className="text-sm text-zinc-400">Name</p>
            <h2 className="mt-2 text-xl font-semibold">
              {user?.firstName || ""} {user?.lastName || ""}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
            <p className="text-sm text-zinc-400">Username</p>
            <h2 className="mt-2 text-xl font-semibold">
              {user?.userName || "-"}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
            <p className="text-sm text-zinc-400">Email</p>
            <h2 className="mt-2 text-xl font-semibold">{user?.email || "-"}</h2>
          </div>
        </div>
      </div>
    </main>
  );
};
