import React from "react";

function Navbar({ search, setSearch }) {
    return (
        <nav className="navbar navbar-dark bg-dark px-4 shadow-sm">

            {/* Logo */}
            <span className="navbar-brand fw-bold">
                🏨 Hotel Booking
            </span>

            {/* Search bar */}
            <input
                className="form-control w-50"
                type="text"
                placeholder="Search by city or name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        </nav>
    );
}

export default Navbar;