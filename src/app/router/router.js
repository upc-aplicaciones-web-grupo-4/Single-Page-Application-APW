
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
import PatientChat from '../communications/components/patient-chat.pages.vue';
import NotificationsPatients from '../notifications/pages/notification-patients.pages.vue';
import PatientProfile from '../profiles/pages/patient-profile/patient-profile.pages.vue';
import SelectRole from '../identity-and-access/pages/select-user-role.pages.vue';



const router = createRouter({
    history: createWebHistory(),
    routes:[

        { path: '/selectRole', component: SelectRole },
        { path: '/homeDoctor', component: HomeDoctor },
        { path: '/homePatient', component: HomePatient },

        { path: '/calendar', component: CalendarView },
        { path: '/messages', component: DoctorChat },
        { path: '/notifications', component: NotificationsView },
        { path: '/doctorProfile', component: DoctorProfile },
        //{ path: '/doctor-header', component: DoctorHeader},
        //{ path: '/patient-header', component: PatientHeader},
        { path: '/calendarPatient', component: CalendarPatient },
        { path: '/messagesPatient', component: PatientChat },
        { path: '/notificationsPatient', component: NotificationsPatients},
        { path: '/patientProfile', component: PatientProfile },
        { path: '/', redirect: '/selectRole' }
       //{ path: 'medical-history', component: MedicalhistorypageComponent },
        //{ path: 'reasonConsultation', component: ReasonconsultationComponent },
      //  { path: 'background', component: BackgroundComponent },
        //{ path: 'medicalExams', component: MedicalexamsComponent },
        //{ path: 'externalReports', component: ExternalreportsComponent },
        //{ path: 'dignosesAndTreatment', component: DignosesandtreatmentComponent },
       // { path: 'treatmentPatient', component: TreatmentPatientComponent },

       // { path: '**', component: PageNotFoundComponent }
    ]
})
export default router;