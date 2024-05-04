import axios from "axios";

const http = axios.create({
    baseURL: 'https://json-server-vercel-xi-silk.vercel.app',
});

export class DoctorsApiService {
    async getDoctorByEmail(email) {
        try {
            const response = await http.get(`/doctors?email=${email}`);
            return response.data[0]; // Suponiendo que el email es único y devuelve solo un doctor
        } catch (error) {
            console.error("Error searching doctor by email:", error);
            throw error; // Puedes manejar el error según tus necesidades
        }
    }
}
