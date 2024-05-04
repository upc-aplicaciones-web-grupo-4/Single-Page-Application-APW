// medical-history.service.js
import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000'
});

// Métodos para MedicalHistory
const getMedicalHistories = () => {
    return http.get('/medical_history');
};

const getMedicalHistoryById = (id) => {
    return http.get(`/medical_history/${id}`);
};

const getMedicalHistoryByPatientId = (patientId)=> {
    return http.get(`/medical_history/${patientId}`);
}
const createMedicalHistory = (medicalHistory) => {
    return http.post('/medical_history', medicalHistory);
};

const updateMedicalHistory = (id, medicalHistory) => {
    return http.put(`/medical_history/${id}`, medicalHistory);
};

const deleteMedicalHistory = (id) => {
    return http.delete(`/medical_history/${id}`);
};

export default {
    getMedicalHistories,
    getMedicalHistoryById,
    getMedicalHistoryByPatientId,
    createMedicalHistory,
    updateMedicalHistory,
    deleteMedicalHistory
};