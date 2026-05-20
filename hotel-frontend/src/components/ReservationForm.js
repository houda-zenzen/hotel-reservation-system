import React, { useState } from "react";

function ReservationForm({ hotels, onAddReservation }) {

    const [reservation, setReservation] = useState({
        clientName: "",
        hotelId: "",
        checkInDate: "",
        checkOutDate: ""
    });

    const handleChange = (e) => {
        setReservation({
            ...reservation,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddReservation(reservation);

        setReservation({
            clientName: "",
            hotelId: "",
            checkInDate: "",
            checkOutDate: ""
        });
    };

    return (
        <div className="card p-4 shadow mb-4">

            <h4 className="mb-3">📅 New Reservation</h4>

            <form onSubmit={handleSubmit}>

                {/* CLIENT NAME */}
                <input
                    type="text"
                    name="clientName"
                    className="form-control mb-2"
                    placeholder="Client Name"
                    value={reservation.clientName}
                    onChange={handleChange}
                />

                {/* HOTEL SELECT */}
                <select
                    name="hotelId"
                    className="form-control mb-2"
                    value={reservation.hotelId}
                    onChange={handleChange}
                >
                    <option value="">Select Hotel</option>

                    {hotels.map((hotel) => (
                        <option key={hotel.id} value={hotel.id}>
                            {hotel.name} - {hotel.city}
                        </option>
                    ))}

                </select>

                {/* DATES */}
                <input
                    type="date"
                    name="checkInDate"
                    className="form-control mb-2"
                    value={reservation.checkInDate}
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="checkOutDate"
                    className="form-control mb-2"
                    value={reservation.checkOutDate}
                    onChange={handleChange}
                />

                <button className="btn btn-primary w-100">
                    Book Now
                </button>

            </form>

        </div>
    );
}

export default ReservationForm;