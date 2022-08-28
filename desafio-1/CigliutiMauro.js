class Usuario {
	constructor(nombre, apellido, libros = [], mascotas = []) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	}

	getFullName() {
		return (
			`${this.nombre} ${this.apellido}`
		);
	}

	addMascota(string) {
		this.mascotas = [...this.mascotas, string];
		return this.mascotas;
	}

	countMascotas() {
		return this.mascotas.length;
	}

	addBook(titulo, aut) {
		this.libros = [...this.libros, { nombre: titulo, autor: aut }];
		return this.libros;
	}

	getBookNames() {
		let bookNames = [];
		this.libros.forEach((libro) => bookNames.push(libro.nombre));
		return bookNames;
	}

}

const user1 = new Usuario('Jaime', 'Clara');

user1.addMascota('Juana');
user1.addMascota('Thor');
user1.addBook('Harry Potter y la Piedra Filosofal', 'JK Rowling');
user1.addBook('Harry Potter y el Cáliz de Fuego', 'JK Rowling');

console.log(user1);
console.log(user1.getFullName());
console.log(user1.countMascotas());
console.log(user1.getBookNames());