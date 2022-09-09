import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import { seaturtleLoc } from "./data/seaturtleLoc";
import { seaturtleMeta } from "./data/seaturtleMeta";
import { CITIES } from "./data/cities";
import { arcsData } from "./data/arcsData";

const markerTooltipRenderer = (marker: { name: string; gid: string }) => {
  return `Animal: ${marker.name} (gid: ${marker.gid})`;
};

function App() {
  const [details, setDetails] = useState(null);

  const onPointClick = () => {
    alert("hi");
  };

  const onRightPointClick = () => {
    alert("Be Careful.\nSeaturtle is sleeping!!");
  };

  const onPointHover = () => {
    return "turtle";
  };

  // const onClickMarker;

  // let today = new Date();
  // let hours = today.getHours();
  // let dayAndNight = hours >= 7 && hours <= 18 ? "day" : "night";

  return (
    <Globe
      // globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
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
      showAtmosphere={false}
      animateIn={true}
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
