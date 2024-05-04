
import axios from 'axios';
import PatientsAppointmentsEntity from '../models/patient-appointment.entity.js';

export default class PatientAppointmentService {
    constructor() {
        this.basePath = 'https://json-server-vercel-xi-silk.vercel.app';
        this.resourceEndpoint = '/patient-appointments';
    }

    async getAll() {
        const response = await axios.get(`${this.basePath}${this.resourceEndpoint}`);
        return response.data.map(item => Object.assign(new PatientsAppointmentsEntity(), item));
    }
}