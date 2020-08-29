// logica de la resolucion de rutas.
const resolveRoutes = (route) => {
    //si tura tiene menos de 3 elementos significa que es el home o el id
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }
    return route // esto retornara /about
}

export default resolveRoutes