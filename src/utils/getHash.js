//debemos generar una funcion que maneje el # para cambiar el url
const getHash = () => {
    /*
    - slice elimina el primer elemento el #
    - tolocalelowercase es para pasar a minuscula en casa del q usuario lo pusiera en mayusculas
    - con el split eliminamos los slash ya que nuestra app ya los tiene incluido
    -solo necesitamos el ID por lo que selecionamos las posicion [1]
    - en caso de que no encuentre ninguna ruta manda solo el /
    */
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
}

export default getHash