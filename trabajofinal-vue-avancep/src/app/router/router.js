
import {createRouter, createWebHistory} from 'vue-router';
import CalendarView from '../calendar/pages/calendar-view.pages.vue';
import DoctorChat from '../communications/pages/doctor-chat.pages.vue';
import NotificationsView from '../notifications/pages/notifications-view.pages.vue';
import DoctorProfile from '../profiles/pages/doctor-profile/doctor-profile.pages.vue';
import HomeDoctor from '../profiles/pages/doctor-profile/home-doctor.pages.vue';
import PageNotFound from '../shared/pages/page-not-found/page-not-found.pages.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/homeDoctor', component: HomeDoctor },
        { path: '/calendar', component: CalendarView },
        { path: '/messages', component: DoctorChat },
        { path: '/notifications', component: NotificationsView },
        { path: '/doctorProfile', component: DoctorProfile },
        { path: '/', redirect: '/homeDoctor' },
        { path: '/:catchAll(.*)', component: PageNotFound }
    ]
})
export default router;