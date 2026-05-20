import React from "react";

function HotelList({ hotels, onDelete, onEdit }) {

    return (
        <div className="container mt-4">

            <div className="row">

                {hotels.map((hotel) => (

                    <div className="col-md-4 mb-4" key={hotel.id}>

                        <div className="card shadow-lg h-100">

                            <div className="card-body">

                                <h5 className="card-title">
                                    {hotel.name}
                                </h5>

                                <p className="card-text">
                                    📍 {hotel.city}
                                </p>

                                <p>
                                    🛏 Rooms: {hotel.roomsAvailable}
                                </p>

                                <button
                                    className="btn btn-warning me-2"
                                    onClick={() => onEdit(hotel)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDelete(hotel.id)}
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default HotelList;