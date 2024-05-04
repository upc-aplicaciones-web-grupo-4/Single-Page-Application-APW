export class Patient {
    constructor(id = '', name = '', lastname = '', gender = '', birthdate = '', civil_status = '', nationality = '', type_of_blood = '', image = '', phone = '', email = '', password = '', disease_id = 0, medical_history_id = 0, occupation = '') {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
        this.birthdate = birthdate;
        this.civil_status = civil_status;
        this.nationality = nationality;
        this.type_of_blood = type_of_blood;
        this.image = image;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.disease_id = disease_id;
        this.medical_history_id = medical_history_id;
        this.occupation = occupation;
    }
}
