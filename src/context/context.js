import React, { createContext, useState } from "react";
import axios from "axios";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [mura, setMura] = useState("");
 
  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/barber/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const searchText = (event) => {
    setMura(event.target.value);
  };



  const dataSearch = data.filter((item) => {
    return item.username.toLowerCase().includes(mura.toLowerCase());  
  });

  return (
    <div>
      <Context.Provider
        value={{
          data,
          searchText,
          dataSearch,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export { ContextProvider, Context };
