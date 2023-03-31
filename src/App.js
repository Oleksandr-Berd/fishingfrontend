import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { TitleHeader } from "./Components/Header/TitleHead";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./Components/Home/Home";
import { Fish } from "./Components/Fish/Fish";
import { RegionList } from "./Components/RegionList/RegionList";
import { FishingLocationsList } from "./Components/FishingLocations/FishinglocationsList";
import { Footer } from "./Components/Footer/Footer";
import { PreciseLocation } from "./Components/FishingLocations/PreciseLocation/PreciseLocation";
import { NewData } from "./Components/NewData/NewData";
import { useEffect, useState } from "react";
import { postNewData } from "./Utilities/helpers";

function App() {
  const [finalBody, setFinalBody] = useState({});
  const [finalPath, setFinalPath] = useState("");

  const handleFormSubmitAddData = (body, locPath) => {
    setFinalBody(body);
    setFinalPath(locPath);
  };

  useEffect(() => {
    if (!finalBody || !finalPath) {
      return;
    }
    postNewData(finalBody, finalPath);
  }, [finalBody, finalPath]);

  return (
    <div className="App">
      <Header>
        <TitleHeader />
      </Header>

      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route index element={<Navigate to={"home"} />}></Route>
        <Route path="region" element={<RegionList />} />
        <Route path="region/:locPath" element={<FishingLocationsList />} />
        <Route path="region/:locPath/:_id" element={<PreciseLocation />} />
        <Route
          path="newData"
          element={<NewData submit={handleFormSubmitAddData} />}
        />
        <Route path="fish" element={<Fish />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
