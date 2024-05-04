export class TreatmentAndMedication {
    constructor(drug_name = '', quantity = '', concentration = '', frequency = '', duration = '') {
        this.drug_name = drug_name;
        this.quantity = quantity;
        this.concentration = concentration;
        this.frequency = frequency;
        this.duration = duration;
    }
}

export class MedicalHistory {
    constructor(id = '', patient_id = 0, doctors_id = [], date = '', reason = '', symptoms = [], personal_background = '', family_background = '', lab_results_id = 0, physical_test = '', external_reports = [], medical_exams = [], diagnostic = [], treatment_and_medication = []) {
        this.id = id;
        this.patient_id = patient_id;
        this.doctors_id = doctors_id;
        this.date = date;
        this.reason = reason;
        this.symptoms = symptoms;
        this.personal_background = personal_background;
        this.family_background = family_background;
        this.lab_results_id = lab_results_id;
        this.physical_test = physical_test;
        this.external_reports = external_reports;
        this.medical_exams = medical_exams;
        this.diagnostic = diagnostic;
        this.treatment_and_medication = treatment_and_medication;
    }
}