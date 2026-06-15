/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Firebase Imports
import { db } from "../firebase.js";
import { collection, onSnapshot } from "firebase/firestore";

function ChangeView({ user }) {
  const map = useMap();

  useEffect(() => {
    if (user && user.lat && user.lng) {
      map.flyTo([user.lat, user.lng], 16);
    }
  }, [user, map]);

  return null;
}

function formatTime(ts) {
  if (!ts) return "Last seen: N/A";

  return new Date(ts).toLocaleString("en-IN");
}

export default function LocationMap() {
  const [users, setUsers] = useState([]); 
  const [selectedUser, setSelectedUser] = useState(null); 

  useEffect(() => {
    const usersCollection = collection(db, "users");

    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      
      {/* LEFT SIDE: MAP */}
      <div style={{ flex: 3 }}>
        <MapContainer
          center={[28.6139, 77.209]} 
          zoom={8} 
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          <ChangeView user={selectedUser} />

          {users.map((user) => (
            user.lat && user.lng && (
              <Marker
                key={user.id}
                position={[user.lat, user.lng]}
                eventHandlers={{
                  click: () => setSelectedUser(user),  
                }}
              >
                <Popup>
                  <b>{user.name}</b> <br />
                  {formatTime(user.lastSeen)}
                </Popup>
              </Marker>
            )
          ))}
        </MapContainer>
      </div>

      <div
        style={{
          flex: 1,
          padding: "15px",
          overflowY: "auto",
          borderLeft: "1px solid #f26363",
          backgroundColor: "#64b2fb"
        }}
      >
        <h3 style={{ marginTop: 0, color: "#000000" }}>Select User Document</h3>

        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => setSelectedUser(user)} 
            style={{
              padding: "15px",
              marginBottom: "10px",
              border: selectedUser?.id === user.id ? "2px solid #007bff" : "1px solid #a3fbf1",
              borderRadius: "6px",
              cursor: "pointer",
              background: selectedUser?.id === user.id ? "#dc9df1" : "white",
              transition: "all 0.2s ease"
            }}
          >
            <b style={{ fontSize: "16px", color: "#000000" }}>{user.name || "Unknown"}</b>
            <div style={{ fontSize: "12px", color: "#120404", marginTop: "5px" }}>
               {formatTime(user.lastSeen)}
            </div>
          </div>
        ))}

        {users.length === 0 && <p style={{ color: "#000000" }}>Data is loading from the database...</p>}
      </div>
    </div>
  );
}