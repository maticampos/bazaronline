sessionStorage.setItem('usuario', 'Pedro'); 

let usuario = sessionStorage.getItem('usuario');
console.log(usuario); // Pedro

sessionStorage.removeItem('usuario'); 

usuario = sessionStorage.getItem('usuario');

console.log(usuario); // null
