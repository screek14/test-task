import Vue from 'vue';
import Vuex from 'vuex';
import camelCase from 'lodash/camelCase';
import plugins from "./plugins";

Vue.use(Vuex);

const requireModules = require.context("./modules", false, /\.js$/);
const modules = {};

requireModules.keys().forEach(fileName => {
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));

  modules[moduleName] = requireModules(fileName).default;
});

const store = new Vuex.Store({
  modules,
  plugins
});

export default store;
