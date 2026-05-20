import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import HotelList from "./components/HotelList";
import HotelForm from "./components/HotelForm";
import ReservationForm from "./components/ReservationForm";
import ReservationList from "./components/ReservationList";

import {
    getHotels,
    createHotel,
    deleteHotel,
    updateHotel
} from "./services/HotelService";

import {
    getReservations,
    createReservation
} from "./services/ReservationService";

function App() {

    // 🏨 STATES
    const [hotels, setHotels] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [editingHotel, setEditingHotel] = useState(null);
    const [search, setSearch] = useState("");

    // 📄 PAGINATION
    const [page, setPage] = useState(0);
    const size = 5;

    // 🔄 LOAD HOTELS
    const loadHotels = async () => {
        const res = await getHotels(page, size);
        setHotels(res.data.content || res.data);
    };

    // 🔄 LOAD RESERVATIONS
    const loadReservations = async () => {
        const res = await getReservations();
        setReservations(res.data);
    };

    useEffect(() => {
        loadHotels();
        loadReservations();
    }, [page]);

    // ➕ HOTEL
    const handleAddHotel = async (hotel) => {
        await createHotel(hotel);
        loadHotels();
    };

    // ❌ DELETE
    const handleDeleteHotel = async (id) => {
        await deleteHotel(id);
        loadHotels();
    };

    // ✏ EDIT
    const handleEditHotel = (hotel) => {
        setEditingHotel(hotel);
    };

    // 🔄 UPDATE
    const handleUpdateHotel = async (id, hotel) => {
        await updateHotel(id, hotel);
        setEditingHotel(null);
        loadHotels();
    };

    // 📅 ADD RESERVATION
    const handleAddReservation = async (reservation) => {
        await createReservation(reservation);
        loadReservations();
    };

    // 🔍 FILTER HOTELS
    const filteredHotels = hotels.filter((h) =>
        h.name?.toLowerCase().includes(search.toLowerCase()) ||
        h.city?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>

            {/* NAVBAR */}
            <Navbar search={search} setSearch={setSearch} />

            <div className="container mt-4">

                {/* ===================== */}
                {/* 📅 RESERVATIONS TOP */}
                {/* ===================== */}

                <h4 className="mb-3">📅 Reservations</h4>

                <ReservationForm
                    hotels={hotels}
                    onAddReservation={handleAddReservation}
                />

                <ReservationList reservations={reservations} />

                <hr />

                {/* ===================== */}
                {/* 🏨 HOTELS (MIDDLE) */}
                {/* ===================== */}

                <h4 className="mb-3">🏨 Hotels</h4>

                <HotelList
                    hotels={filteredHotels}
                    onDelete={handleDeleteHotel}
                    onEdit={handleEditHotel}
                />

                {/* PAGINATION */}
                <div className="d-flex justify-content-center mt-3">

                    <button
                        className="btn btn-secondary me-2"
                        disabled={page === 0}
                        onClick={() => setPage(page - 1)}
                    >
                        ⬅ Prev
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={() => setPage(page + 1)}
                    >
                        Next ➡
                    </button>

                </div>

                <hr />

                {/* ===================== */}
                {/* ➕ ADD HOTEL (BOTTOM) */}
                {/* ===================== */}

                <h4 className="mb-3">➕ Add Hotel</h4>

                <HotelForm
                    onAdd={handleAddHotel}
                    editingHotel={editingHotel}
                    onUpdate={handleUpdateHotel}
                />

            </div>
        </div>
    );
}

export default App;