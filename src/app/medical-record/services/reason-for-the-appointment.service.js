import axios from 'axios';

const http = axios.create({
    baseURL: 'https://webapp-240625213956.azurewebsites.net/api/v1'
});

export const getReasonsForTheAppointmentByMedicalRecordId = (medicalRecordId) => {
    return http.get(`/reason-of-consultation/${medicalRecordId}`);
}