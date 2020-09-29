import {default as HelloWorld} from './components/hello-world';

const components = [HelloWorld]

const install = function (app) {
    components.map(component => {
        app.use(component);
    });
};

export {HelloWorld};

export default {
    install
};
