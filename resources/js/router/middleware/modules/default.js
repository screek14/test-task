import store from "../../../store";

const paths = [
  'login',
  'registration',
]

const codeVerifyPaths = [
  'home',
  'login',
  'registration',
  'registration-success',
  'verification-card',
]

const cardVerifyPaths = [
  'home',
  'login',
  'registration',
  'registration-success',
  'verification-code',
]

export default function (VueRouter) {
  VueRouter.beforeEach((to, from, next) => {
    if(to.meta.auth === true && !(store.getters['user/getLoggedIn'] || store.getters['user/getRegistration'])) {
      return next({name: 'login'});
    }

    if(store.getters['user/getVerify'] && store.getters['user/getLoggedIn'] && codeVerifyPaths.indexOf(to.name) !== -1) {
      return next({name: 'success'});
    }

    if(store.getters['user/getVerifyCard'] && store.getters['user/getLoggedIn'] && cardVerifyPaths.indexOf(to.name) !== -1) {
      return next({name: 'registration-success'});
    }

    if(store.getters['user/getLoggedIn'] && paths.indexOf(to.name) !== -1) {
      return next({name: 'verification-code'});
    }

    if(store.getters['user/getRegistration'] && paths.indexOf(to.name) !== -1) {
      return next({name: 'verification-card'});
    }

    return next();
  })
}