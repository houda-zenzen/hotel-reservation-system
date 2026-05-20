import React from "react";

function ReservationList({ reservations }) {

    return (
        <div className="container mt-4">

            <h3>📅 Reservations</h3>

            {reservations.length === 0 ? (
                <p className="text-muted">No reservations yet</p>
            ) : (
                reservations.map((r) => (
                    <div key={r.id} className="card p-3 mb-2 shadow-sm">

                        <h5>👤 {r.clientName}</h5>

                        <p>🏨 Hotel: {r.hotel?.name}</p>

                        <p>
                            📅 {r.checkInDate} → {r.checkOutDate}
                        </p>

                    </div>
                ))
            )}

        </div>
    );
}

export default ReservationList;