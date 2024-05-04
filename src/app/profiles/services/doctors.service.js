import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

// Existing methods
const getDoctors = () => {
    return http.get('/doctors');
};

const getDoctorById = (id) => {
    return http.get(`/doctors/${id}`);
};

const createDoctor = (doctor) => {
    return http.post('/doctors', doctor);
};

const updateDoctor = (id, doctor) => {
    return http.put(`/doctors/${id}`, doctor);
};

const deleteDoctor = (id) => {
    return http.delete(`/doctors/${id}`);
};

export default {
    getDoctors,
    getDoctorById,
    createDoctor,
    updateDoctor,
    deleteDoctor
};