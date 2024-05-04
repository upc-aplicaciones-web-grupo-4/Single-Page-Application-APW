export class Doctor {
    constructor(id = '', name = '', lastname = '', fee = 0, gender = '', image = '', title = '', college_number = '', RNE = '', undergraduate = '', specialty = '', sub_speciality = '', code_of_doctor = '', subscription_id = 0, email = '', password = '') {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.fee = fee;
        this.gender = gender;
        this.image = image;
        this.title = title;
        this.college_number = college_number;
        this.RNE = RNE;
        this.undergraduate = undergraduate;
        this.specialty = specialty;
        this.sub_speciality = sub_speciality;
        this.code_of_doctor = code_of_doctor;
        this.subscription_id = subscription_id;
        this.email = email;
        this.password = password;
    }
}