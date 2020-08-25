import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils//resolveRoutes'

/* crearemos un objeto en el que dentro estableseremos las turas y que hace render dentro de ella */

const routes = {
    '/': Home,
    // es : por que es un valor dinamico
    '/:id': Character,
    '/contact': 'Contact',
}

//este sera el manejador el que mostrara los elementos segun la logica que estableceremos

const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    header.innerHTML = await Header()

    //con esto hacemos el render
    let hash = getHash();
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    content.innerHTML = await render()
}

export default router

