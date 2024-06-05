
import {createRouter, createWebHistory} from 'vue-router';
import CalendarView from '../calendar/pages/calendar-view.pages.vue';
import DoctorChat from '../communications/components/doctor-chat.pages.vue';
import NotificationsView from '../notifications/pages/notifications-view.pages.vue';
import DoctorProfile from '../profiles/pages/doctor-profile/doctor-profile.pages.vue';
import HomeDoctor from '../profiles/pages/doctor-profile/home-doctor.pages.vue';
import HomePatient from '../profiles/pages/patient-profile/home-patient.pages.vue';
//import PageNotFound from '../shared/pages/page-not-found/page-not-found.pages.vue';
//import DoctorHeader from '../shared/pages/header-doctor/header-doctor.pages.vue';
//import PatientHeader from '../shared/pages/header-patient/header-patient.pages.vue';
import CalendarPatient from '../calendar/pages/calendar-patient.pages.vue';
import NotificationsPatients from '../notifications/pages/notification-patients.pages.vue';
import PatientProfile from '../profiles/pages/patient-profile/patient-profile.pages.vue';
import SelectRole from '../identity-and-access/pages/select-user-role.pages.vue';
import PatientDoctorPages from "@/app/communications/pages/patient-doctor.pages.vue";
import doctorPatientPages from "@/app/communications/pages/doctor-patient.pages.vue";

import ReasonConsultation from '../medical-record/components/reason-for-the-appointment.vue'
import Background from '../medical-record/components/background.vue'
import MedicalExams from '../medical-record/components/medical-tests.vue'
import ExternalReports from '../medical-record/components/external-reports.vue'
import DiagnosesAndTreatment from '../medical-record/components/diagnosis-and-treatment.vue'
import ClinicalHistory from '@/app/medical-record/components/clinical-history.vue';
import MedicalRecordPage from '@/app/medical-record/pages/medical-record.pages.vue';
import ReasonForTheAppointment from "@/app/medical-record/components/reason-for-the-appointment.vue";


const router = createRouter({
    history: createWebHistory(),
    routes:[

        { path: '/selectRole', component: SelectRole },
        { path: '/homeDoctor', component: HomeDoctor },
        { path: '/homePatient', component: HomePatient },

        { path: '/calendar', component: CalendarView },
        { path: '/messages', component: doctorPatientPages },
        { path: '/notifications', component: NotificationsView },
        { path: '/doctorProfile', component: DoctorProfile },
        //{ path: '/doctor-header', component: DoctorHeader},
        //{ path: '/patient-header', component: PatientHeader},
        { path: '/calendarPatient', component: CalendarPatient },
        { path: '/messagesPatient', component: PatientDoctorPages },
        { path: '/notificationsPatient', component: NotificationsPatients},
        { path: '/patientProfile', component: PatientProfile },
        { path: '/', redirect: '/selectRole' },
        //{ path: 'medical-history', component: MedicalhistorypageComponent },
        { path: '/medical-record', component: MedicalRecordPage, children: [
                { path: 'reasonConsultation', component: ReasonConsultation },
                { path: 'background', component: Background },
                { path: 'medicalExams', component: MedicalExams },
                { path: 'externalReports', component: ExternalReports },
                { path: 'diagnosesAndTreatment', component: DiagnosesAndTreatment }
            ]},
        { path: '/clinical-history', component: ClinicalHistory },



        // { path: '**', component: PageNotFoundComponent }
    ]
})


export default router;