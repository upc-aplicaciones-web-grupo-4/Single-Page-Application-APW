import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

// Existing methods
const getPatients = () => {
    return http.get('/patients');
};

const getPatientById = (id) => {
    return http.get(`/patients/${id}`);
};

const createPatient = (patient) => {
    return http.post('/patients', patient);
};

const updatePatient = (id, patient) => {
    return http.put(`/patients/${id}`, patient);
};

const deletePatient = (id) => {
    return http.delete(`/patients/${id}`);
};

// New methods
const getDoctors = () => {
    return http.get('/doctors');
};

const getDoctorById = (id) => {
    return http.get(`/doctors/${id}`);
};

const getDiseases = () => {
    return http.get('/diseases');
};

const getDiseaseById = (id) => {
    return http.get(`/diseases/${id}`);
};

const getSubscriptions = () => {
    return http.get('/subscriptions');
};

const getSubscriptionById = (id) => {
    return http.get(`/subscriptions/${id}`);
};

export default {
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient,
    getDoctors,
    getDoctorById,
    getDiseases,
    getDiseaseById,
    getSubscriptions,
    getSubscriptionById
};