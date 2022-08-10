import React, { useEffect, useState } from "react";
import About from "./pages/AboutUs";
import Notes from "./pages/Notes";
import Masters from "./pages/Masters";
import Book from "./pages/Book";
import Sign from "./pages/Sign";
import Photos from "./pages/allPhotos";
import Photo from "./pages/Photo";
import Center from "./pages/Center";
import ErrorPage from "./pages/ErrorPage";
import FunctionBook from "./pages/FunctionBook";
import Admin from "./pages/Admin";
import AdminPassword from "./pages/AdminPassword";
import { Routes, Route } from "react-router-dom";
import Loading from "./object/Loading";
import Client from "./pages/Client";
import AdminBooking from "./pages/AdminBooking";
import firebase from "./firebase/config";
import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);

  const getPhoto = async () => {
    setLoad(true);
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"
    );
    const data = await response.json();
    const { drinks } = data;
    if (drinks) {
      const newCocktails = drinks.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;

        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setData(newCocktails);
    } else {
      console.log("aa");
    }
    setLoad(false);
  };
  useEffect(() => {
    getPhoto();
  }, []);

  if (load) {
    return <Loading />;
  }

  //JSX
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <About user={user} /> : <Sign />} />
        <Route
          path="/masters"
          element={user ? <Masters user={user} /> : <Sign />}
        />
        <Route
          path="/notes"
          element={user ? <Notes user={user} /> : <Sign />}
        />
        <Route path="/book" element={user ? <Book user={user} /> : <Sign />} />
        {/* <Route path="/most" element={<Sign/>}/> */}
        <Route
          path="/admincoolbarberprivate"
          element={user ? <Admin user={user} /> : <Sign />}
        />
        <Route
          path="/admin"
          element={user ? <AdminPassword user={user} /> : <Sign />}
        />
        <Route
          path="/photos"
          element={user ? <Photos user={user} /> : <Sign />}
        />
        <Route
          path="/photo"
          element={user ? <Photo user={user} /> : <Sign />}
        />
        <Route path="/center" element={user ? <Center /> : <Sign />} />
        <Route
          path="/clientadminforadmin"
          element={user ? <Client /> : <Sign />}
        />
        <Route
          path="/adminBookingforadmin"
          element={user ? <AdminBooking /> : <Sign />}
        />
        <Route
          path="/book/:id"
          element={user ? <FunctionBook user={user} /> : <Sign />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div></div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
