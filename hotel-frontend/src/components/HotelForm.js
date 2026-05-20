import React, { useEffect, useState } from "react";

function HotelForm({ onAdd, editingHotel, onUpdate }) {

    const [hotel, setHotel] = useState({
        name: "",
        city: "",
        roomsAvailable: ""
    });

    useEffect(() => {
        if (editingHotel) {
            setHotel(editingHotel);
        }
    }, [editingHotel]);

    const handleChange = (e) => {
        setHotel({
            ...hotel,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (hotel.id) {
            onUpdate(hotel.id, hotel);
        } else {
            onAdd(hotel);
        }

        setHotel({
            name: "",
            city: "",
            roomsAvailable: ""
        });
    };

    return (

        <div>

            <h3 className="mb-4">
                {hotel.id ? "Update Hotel" : "Add Hotel"}
            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Hotel Name"
                        value={hotel.name}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="City"
                        value={hotel.city}
                        onChange={handleChange}
                    />

                </div>

                <div className="mb-3">

                    <input
                        type="number"
                        name="roomsAvailable"
                        className="form-control"
                        placeholder="Rooms Available"
                        value={hotel.roomsAvailable}
                        onChange={handleChange}
                    />

                </div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >

                    {hotel.id ? "Update Hotel" : "Add Hotel"}

                </button>

            </form>

        </div>
    );
}

export default HotelForm;