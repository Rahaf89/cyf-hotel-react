import React from "react";
import Heading from "./Heading.js";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
import Footer from "./Footer.js";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards img="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg" />
      <TouristInfoCards img="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg" />
      <TouristInfoCards img="https://cimg.visitscotland.com/cms-images/header-images/ois/glasgow?size=md" />

      <Bookings />
      <Footer
        list={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
