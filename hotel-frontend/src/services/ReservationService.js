import axios from "axios";

const API_URL = "http://localhost:8080/reservations";

export const getReservations = async () => {
    return await axios.get(API_URL);
};

export const createReservation = async (reservation) => {
    return await axios.post(API_URL, reservation);
};

export const deleteReservation = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};