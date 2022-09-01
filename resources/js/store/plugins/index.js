import createPersistedState from "vuex-persistedstate";

const mutations = [];
const paths = [
    'user',
]
const plugins = [];

if (!localStorage.getItem('memberToken')) {
    plugins.push(createPersistedState({
        paths: paths,
        filter: mutation => (mutations.indexOf(mutation.type) === -1), // Boolean
    }));
}

export default plugins;
