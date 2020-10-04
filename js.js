import cars from './cars.js';

// Obtengo el elemento HTML donde quiero agregar nuevo contenido
const tableBody = document.getElementById('table-users-body');

// se mestran todos los usuarios usando forEach
function printUsers() {
    tableBody.innerHTML = '';
    cars.forEach((user) => {
        const row = `<tr>
                        <td>${user.id}</td>
                        <td>${user.marca}</td>
                        <td>${user.modelo}</td>
                        <td>${user.color}</td>
                        <td>${user.año}</td>
                        <td>$ ${user.precio}</td>
                        <td>
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-danger" onclick="removeCar(${user.id})">Eliminar</button>
                                <button type="button" class="btn btn-secondary" onclick="editCarButton(${user.id})">Seleccionar</button>
                            </div>
                        </td>
                    </tr>`
        tableBody.innerHTML += row;
    })
}

// Guardar
function addCars() {
    //se captura el dato del input
    const marca = document.getElementById('marca').value;  
    const modelo = document.getElementById('modelo').value;
    const color = document.getElementById('color').value;
    const año = document.getElementById('año').value;
    const precio = document.getElementById('precio').value;
    if(marca && modelo && color && año && precio !== '') {
        // Creo un nuevo usuario que es un objeto
        const newCars = {
            id: cars.length + 1,
            marca: marca,
            modelo: modelo,
            color: color,
            año: año,
            precio: precio
        }  
        // Agrego el usuario creado al array que tiene todos los usuarios
        cars.push(newCars);
        // imprimo nuevamente a todos los usuarios
        printUsers();
        document.getElementById('marca').value='';
        document.getElementById('modelo').value='';
        document.getElementById('color').value='';
        document.getElementById('año').value='';
        document.getElementById('precio').value='';
    }else {
        alert("no se puede dejar campos vacios");
    }
    
}

// Eliminar
function removeCar(id) {
    // Se busca el indice
    const position = cars.findIndex((user) => user.id === id);
    // se elimina con la posición encontrada el auto de la lista)
    cars.splice(position, 1);
    printUsers();
}

// Editar
let editingCar = false;

function submitCar() {
    console.log(editingCar)
    if(editingCar) {
        editCar();
    } else {
        addCars();
    }
}
function editCar() {
    const marca = document.getElementById('marca').value;
    editingCar.marca = marca
    const modelo = document.getElementById('modelo').value;
    editingCar.modelo = modelo
    const color = document.getElementById('color').value;
    editingCar.color = color
    const año = document.getElementById('año').value;
    editingCar.año = año
    const precio = document.getElementById('precio').value;
    editingCar.precio = precio
    printUsers();
    editingCar = false;
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('color').value = '';
    document.getElementById('año').value = '';
    document.getElementById('precio').value = '';
}
function editCarButton(id) {
    const carr = cars.find((car) => car.id === id);  
    document.getElementById('marca').value = carr.marca;
    editingCar = carr;
    document.getElementById('modelo').value = carr.modelo;
    editingCar = carr;
    document.getElementById('color').value = carr.color;
    editingCar = carr;
    document.getElementById('año').value = carr.año;
    editingCar = carr;
    document.getElementById('precio').value = carr.precio;
    editingCar = carr;
}

window.printUsers = printUsers;
window.addCars = addCars;
window.removeCar = removeCar;
window.editCar = editCar;
window.editCarButton = editCarButton;
window.submitCar = submitCar;
