// logica de la resolucion de rutas.
const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }
    return `/${route}` // esto retornara /about
}

export default resulveRoutes