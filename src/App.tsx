import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import { seaturtleLoc } from "./data/seaturtleLoc";
import { seaturtleMeta } from "./data/seaturtleMeta";
import { CITIES } from "./data/cities";
import { arcsData } from "./data/arcsData";

function App() {
  const [cities, setCities] = useState({
    lat: CITIES.lat,
  });

  const onPointClick = () => {
    alert("hi");
  };

  const onRightPointClick = () => {
    alert("Be Careful.\nSeaturtle is sleeping!!");
  };

  const onPointHover = () => {
    return "turtle";
  };

  let today = new Date();
  let hours = today.getHours();
  let dayAndNight = hours >= 7 && hours <= 18 ? "day" : "night";

  return (
    <Globe
      globeImageUrl={`//unpkg.com/three-globe/example/img/earth-${dayAndNight}.jpg}`}
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pointsData={seaturtleLoc}
      pointAltitude="size"
      pointLat="lat"
      pointLng="lng"
      pointColor="color"
      pointRadius="radius"
      labelResolution={2}
      onPointClick={onPointClick}
      onPointRightClick={onRightPointClick}
      onPointHover={onPointHover}
      showAtmosphere={true}
      arcColor={"color"}
      arcsData={arcsData}
    />
  );
  // const [marker, setMarker] = useState<markerProps[]>([]);

  // useEffect(() => {
  //   // load data
  //   fetch("components/world-cities.geojson")
  //     .then((res) => console.log(res))
  //     .then((res) => res.json())
  //     .then(({ features }) => setMarker(features))
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log("Fetch Error: ", err));
  // }, []);

  // const getTootip = (d: { city: string }) => `
  // <div style="text-align: center">
  //       <div>${d.city}</div>
  //     </div>
  //     `;

  // const fetchData = async () => {
  //   try {
  //     let res = await fetch("/location.json");
  //     let json = await res.json();
  //     console.log(json);
  //     return { success: true, data: json };
  //   } catch (error) {
  //     console.log(error);
  //     return { success: false };
  //   }
  // };
}

export default App;
