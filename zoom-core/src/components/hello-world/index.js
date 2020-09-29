import HelloWorld from './HelloWorld'

HelloWorld.install = vue => {
    vue.component(HelloWorld.name, HelloWorld)
}

export default HelloWorld
