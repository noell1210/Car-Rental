import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import FindCar from "./page/CariMobil";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailCar from "./page/DetailCars";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findcars" element={<FindCar />} />
          <Route path="/detailcar/:id" element={<DetailCar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
