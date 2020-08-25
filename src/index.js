import router from './routes'

window.addEventListener('load', router)

//generamos un escuchador de las rutas a las que me estoy moviendo
window.addEventListener('hashchange', router)