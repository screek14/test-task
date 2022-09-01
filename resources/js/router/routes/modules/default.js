import Login from "../../../pages/Login.vue";
import Page404 from "../../../pages/404.vue"
import Registration from "../../../pages/Registration.vue";
import VerificationCard from "../../../pages/VerificationCard.vue";
import VerificationCode from "../../../pages/VerificationCode.vue";
import Success from "../../../pages/Success.vue";
import SuccessRegistration from "../../../pages/SuccessRegistration.vue";

export default [
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {auth: false},
  },
  {
    name: 'registration',
    path: '/registration',
    component: Registration,
    meta: {auth: false},
  },
  {
    name: 'verification-card',
    path: '/verification-card',
    component: VerificationCard,
    meta: {auth: true},
  },
  {
    name: 'verification-code',
    path: '/verification-code',
    component: VerificationCode,
    meta: {auth: true},
  },
  {
    name: 'success',
    path: '/success',
    component: Success,
    meta: {auth: true},
  },
  {
    name: 'registration-success',
    path: '/registration-success',
    component: SuccessRegistration,
    meta: {auth: true},
  },
  {
    path: '/',
    redirect: '/login',
    meta: {auth: false},
  },
  {
    name: 'error',
    path: '*',
    component: Page404,
    meta: {auth: true},
  },
]