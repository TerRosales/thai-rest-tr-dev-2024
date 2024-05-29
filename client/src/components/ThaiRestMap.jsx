import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import "../global.css";

const ThaiRestMap = () => {
  const position = { lat: 61.2176, lng: -149.8997 };
  return (
    <APIProvider apiKey={import.meta.env.VITE_REACT_MAPS_API_KEY}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
};

export default ThaiRestMap;
