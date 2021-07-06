const registro = (event) => {
  event.preventDefault();
  const propietario = document.getElementById('propietario').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const nombreMascota = document.getElementById('nombreMascota').value;
  const enfermedad = document.getElementById('enfermedad').value;
  const tipo = document.getElementById('tipo').value;
  const resultado = document.getElementById('resultado');

  if (tipo === 'perro') {
    const perro = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
    console.log(perro);
    resultado.innerHTML = `<li>${perro.datosPropietario()}</li> <br> <li> ${perro.tipo} , mientras que le nombre de la mascota es: ${perro.nombreMascota} y la enfermedad es: ${perro.enfermedad}</li> `
  } else if (tipo === 'gato') {
    const gato = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
    resultado.innerHTML = `<li>${gato.datosPropietario()}</li> <br> <li> ${gato.tipo} , mientras que le nombre de la mascota es: ${gato.nombreMascota} y la enfermedad es: ${gato.enfermedad} </li>`
  } else {
    const conejo = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
    resultado.innerHTML = `<li>${conejo.datosPropietario()}</li> <br> <li> ${conejo.tipo} , mientras que le nombre de la mascota es: ${conejo.nombreMascota} y la enfermedad es: ${conejo.enfermedad}</li>`
  }
  document.getElementById('propietario').value = "";
  document.getElementById('telefono').value = "";
  document.getElementById('direccion').value = "";
  document.getElementById('nombreMascota').value = "";
  document.getElementById('enfermedad').value = "";
  document.getElementById('tipo').value = "";

}
botonEnviar.addEventListener('click', registro);
class Propietario {
  constructor(nombre, direccion, telefono) {
    this.propietario = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return `El dueño es ${this.propietario}, domiciliado en : ${this.direccion}, su telefono es ${this.telefono}`
  }
}
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es un: ${this._tipo}`
  }
}
class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}