
import axios from 'axios';
import PatientsAppointmentsEntity from '../model/patient-appointment.entity.js';

export default class PatientAppointmentService {
    constructor() {
        this.basePath = 'http://localhost:3000';
        this.resourceEndpoint = '/patient-appointments';
    }

    async getAll() {
        const response = await axios.get(`${this.basePath}${this.resourceEndpoint}`);
        return response.data.map(item => Object.assign(new PatientsAppointmentsEntity(), item));
    }
}