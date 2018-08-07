gama = [];

gama.initialize = function () {
    gama.setup();
};

gama.setup = function () {
    // Firebase setup
    try {
        let app = firebase.app();
        let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
        console.log(`Firebase SDK carregado com sucesso!  Recursos: ${features.join(', ')}`);
    } catch (e) {
        console.error(e);
    }
}
// teste
// Activates when dom is loaded
$(function () {
    gama.initialize();
});
