import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StarProvider } from "./contexts/starContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Details from "./pages/Details";
import Favourite from "./pages/Favourite";
import Films from "./pages/Films";
import Login from "./pages/Login";
import Planet from "./pages/Planet";
import Starships from "./pages/Starships";
import People from "./pages/People";
import Species from "./pages/Species";

function App() {
  return (
    <StarProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate replace to="home" />} />
          <Route path="/" index element={<Login />} />
          <Route element={<AppLayout />}>
            <Route element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="cars" element={<Cars />} />
            <Route path="details" element={<Details />} />
            <Route path="favourite" element={<Favourite />} />
            <Route path="films" element={<Films />} />
            <Route path="planet" element={<Planet />} />
            <Route path="people" element={<People />} />
            <Route path="species" element={<Species />} />
            <Route path="starships" element={<Starships />} />
            <Route path="/:id" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{ padding: "5px" }}
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#009d00",
            color: "#fff",
            fontSize: "15px",
            padding: "10px",
            textAlign: "center",
            fontFamily: "'Inter', sans-serif",
          },

          error: {
            style: {
              padding: "10px",
              fontFamily: "'Inter', sans-serif",
              textAlign: "center",
              background: "#c40000 ",
              color: "#fff",
              fontSize: "15px",
            },
          },
        }}
      />
    </StarProvider>
  );
}

export default App;
