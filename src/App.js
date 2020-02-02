import React from "react";

import Bookings from "./Bookings";
import "./App.css";

import Heading from "./Heading.js";
import Footer from "./Footer.js";
import TouristInfoCard from "./TouristInfoCard.js";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cards">
        <TouristInfoCard
          Name="Glasgow"
          text="Find out all the essential information for travelling to Glasgow"
          link="https://peoplemakeglasgow.com/"
          pic="https://images.clarin.com/2016/11/08/B1G2A9nFEx_1256x620.jpg"
        />
        <TouristInfoCard
          Name="Manchester"
          text="As one of the most vibrant and cosmopolitan cities in the UK, there’s always something on in Manchester."
          link="https://www.visitmanchester.com/"
          pic="https://www.visitmanchester.com/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2"
        />
        <TouristInfoCard
          Name="London"
          text="Take a look at our guide to what’s on in London"
          link="https://www.visitlondon.com/"
          pic="https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555943130/production/city/hero_image_11_1555943130.jpg"
        />
      </div>
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
