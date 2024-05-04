import axios from "axios";

const http = axios.create({
    baseURL: 'https://json-server-vercel-xi-silk.vercel.app/doctors',
});

export class DoctorsApiService {
    async getDoctorByEmail(email) {
        try {
            const response = await http.get(`/?email=${email}`);
            if (response.data.length === 0) {
                return { error: 'Doctor not found' };
            }
            return response.data[0];
        } catch (error) {
            console.error("Error searching doctor by email:", error);
            throw error;
        }
    }
}