import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LocationMap() {
  const users = [
    {
      id: 1,
      name: "Abhishek",
      lat: 28.5744,
      lng: 77.5030,
    },
    {
      id: 2,
      name: "Rahul",
      lat: 28.5355,
      lng: 77.3910,
    },
    {
      id: 3,
      name: "Aman",
      lat: 28.6139,
      lng: 77.2090,
    },
  ];

  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={10}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {users.map((user) => (
        <Marker
          key={user.id}
          position={[user.lat, user.lng]}
        >
          <Popup>
            <h3>{user.name}</h3>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LocationMap;