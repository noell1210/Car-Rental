import React from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import SearchBarSecond from "../../components/SearchBarSecond";
import Footer from "../../components/Footer";
import DetailCarCard from "../../components/DetailCarCard";
const DetailCar = () => {
  const param = useParams();
  return (
    <div>
      <NavigationBar />
      <SearchBarSecond />
      <DetailCarCard />
      <Footer />
    </div>
  );
};

export default DetailCar;
