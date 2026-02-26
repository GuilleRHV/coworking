import { useEffect, useState } from "react";
import '../Rooms.css'
const API_URL = import.meta.env.VITE_API_URL;

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
  fetch(`${API_URL}/rooms`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setRooms(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}, []);

  return (
    <div className="rooms-container">
    <h4>Espacios</h4>

        <div className="rooms-grid">
            {rooms.map((room: any) => (
            <div className="room-card" key={room.id}>
                <h3 className="room-title">{room.name}</h3>

                <p className="room-description">{room.description}</p>

                <p className="room-capacity">
                <strong>Capacidad:</strong> {room.capacity}
                </p>

                <p
                className={`room-status ${
                    room.is_available ? "available" : "not-available"
                }`}
                >
                {room.is_available ? "Disponible" : "No disponible"}
                </p>
            </div>
            ))}
        </div>
    </div>

  );
}

export default RoomList;

