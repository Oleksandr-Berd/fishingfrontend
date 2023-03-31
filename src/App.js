import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Dna } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { postNewData } from "./Utilities/helpers";
const TitleHeader = lazy(() => import("./Components/Header/TitleHead"));
const Header = lazy(() => import("./Components/Header/Header"));
const Home = lazy(() => import("./Components/Home/Home"));
const NavBar = lazy(() => import("./Components/NavBar/NavBar"));
const Fish = lazy(() => import("./Components/Fish/Fish"));
const RegionList = lazy(() => import("./Components/RegionList/RegionList"));
const FishingLocationsList = lazy(() =>
  import("./Components/FishingLocations/FishinglocationsList")
);
const Footer = lazy(() => import("./Components/Footer/Footer"));
const PreciseLocation = lazy(() =>
  import("./Components/FishingLocations/PreciseLocation/PreciseLocation")
);
const NewData = lazy(() => import("./Components/NewData/NewData"));

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
      <Suspense
        fallback={
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        }
      >
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
      </Suspense>
    </div>
  );
}

export default App;
