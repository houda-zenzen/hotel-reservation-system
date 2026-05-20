import axios from "axios";

const API_URL = "http://localhost:8080/hotels";

export const getHotels = () => axios.get(API_URL);

export const getHotelsPage = (page, size) =>
    axios.get(`${API_URL}/page?page=${page}&size=${size}`);

export const createHotel = (hotel) =>
    axios.post(API_URL, hotel);

export const updateHotel = (id, hotel) =>
    axios.put(`${API_URL}/${id}`, hotel);

export const deleteHotel = (id) =>
    axios.delete(`${API_URL}/${id}`);