class Datos {
    constructor(nombre, email, pass){
        this.nombre = nombre
        this.email = email
        this.pass = pass
    }
}

class Dom {

    agregarDatos(datos){
        const infoUsuario = document.getElementById('informacion-usuario')
        const elemento = document.createElement('ul')
        elemento.innerHTML = `
        <div class="card card-body">
            <ul class="list-group">
                <li class="list-unstyled">Nombre: ${datos.nombre}</li>
                <li class="list-unstyled">Email: ${datos.email}</li>
                <li class="list-unstyled">Contraseña: ${datos.pass}</li>
            </ul>
            <div>
            <button class="btn btn-danger float-right" name="eliminar">Eliminar</button>
            </div>
        </div>
        `
        infoUsuario.appendChild(elemento)
    }

    resetDatos(){
        document.getElementById('form').reset()

    }

    eliminarDatos(elemento){
        if (elemento.name === 'eliminar') {
            elemento.parentElement.parentElement.remove()
            this.mostrarMensaje('Mensaje Eliminado Correctamente!', 'danger')
        }

    }

    mostrarMensaje(mensaje, cssClass){
        const div = document.createElement('div')
        div.className = `alert alert-${cssClass} mt-4`
        div.appendChild(document.createTextNode(mensaje))

        const container = document.getElementById('container')
        const app = document.getElementById('app')
        container.insertBefore(div, app)

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000)
    }

    mostrarPassword(){
        const tipo = document.getElementById('password')
        if (tipo.type === 'password') {
            tipo.type = 'text'
        }else{
            tipo.type = 'password'
        }
    }

}

document.getElementById('form').addEventListener('submit', (e) => {
    const nombre = document.getElementById('nombre').value 
    const email = document.getElementById('email').value 
    const pass = document.getElementById('password').value

    const datos = new Datos(nombre, email, pass)
    const dom = new Dom()

    if (nombre === '' || email === '' || pass === '') {
        return dom.mostrarMensaje('Complete los Campos', 'success')
    }

    dom.agregarDatos(datos)
    dom.resetDatos()
    dom.mostrarMensaje('Mensaje Agregado Correctamente!', 'info')
    
    e.preventDefault()
})

document.getElementById('informacion-usuario').addEventListener('click', (e) => {
    const dom = new Dom()
    dom.eliminarDatos(e.target)
})

document.getElementById('mostrar-pass').addEventListener('click', () => {
    const dom = new Dom()
    dom.mostrarPassword()
})