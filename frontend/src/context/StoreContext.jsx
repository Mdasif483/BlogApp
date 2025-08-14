import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const StoreContext = createContext(null);
const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const allBolgs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_LOCALHOST}/blog/all`);

        setBlogData(res.data.blogs);
      } catch (error) {
        console.log("error in all blogs api", error);
      }
    };
    allBolgs();
  }, []);

  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return toast.success("logout successfully")
  };
  const contextValue = { blogData, user, loginUser, logoutUser };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
