const registro = (event) => {
  event.preventDefault();
  const propietario = document.getElementById('propietario').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const nombreMascota = document.getElementById('nombreMascota').value;
  const enfermedad = document.getElementById('enfermedad').value;
  const tipo = document.getElementById('tipo').value;
  const mascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);

  function enviarResultado(mascota) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${mascota.datosPropietario()}</li> <br> <li> ${mascota.tipo} , mientras que le nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedad}</li> `
  }

  if (tipo === 'perro') {
    const perro = mascota;
    enviarResultado(perro);

  } else if (tipo === 'gato') {
    const gato = mascota;
    enviarResultado(gato);
  } else {
    const conejo = mascota;
    enviarResultado(conejo);
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