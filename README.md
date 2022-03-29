# BACK TESTS

Este repositorio fue creado para probar el backend de una libreria online.

## API Test

### setup
Visita la página por medio de la url: http://localhost:4200/dashboard

## API Test

### verify request returns JSON
Se verifica que la página se cargue con el contenido en formato json.

### verify the request returns the correct status code
Se verifica que se carga la página de manera correcta con un status: OK.

### verify the resquest returns a body
Se verifia que la página contenga un cuerpo con información.

### verify the request returns items structure
Se verifica que la página cargue con una estructura definida para los datos(libros).

## Add Test 

### setup
Visita la página por medio de la url: http://localhost:4200/dashboard

### Add a new item & Verify exists

Valida que se agregue un libro mandandole un request con el libro a crear a la página.

### forced POST - adding empty book
Se valida que al lanzar una solicitud POST con campos vacíos se retorne un error y no suceda el agregar.

### Empty POST
Se valida que al lanzar una solicitud POST sin un cuerpo se retorne un error.

### self POST - add book
Valida que se agregue un libro con el request que genera la página.

## Delete Test 

### setup
Visita la página por medio de la url: http://localhost:4200/dashboard

### create and delete book test 
se crea un libro y se valida que se ejecute el elimnar al lanzar una solicitud DELETE con el id del libro creado.

### no id DELETE - delete book
Se valida que al lanzar una solicitud DELETE sin id en la url se retorne un error.

### Invalid id DELETE - delete book
Se valida que al lanzar una solicitud DELETE con un id invalido en la url se retorne un error.

## Edit Test
Valida que se pueda editar un libro.

### PUT - edit book
Se valida que al lanzar una solicitud PUT a un libro se edite acorde a los paramteros de la solicitud.

### invalid PUT - edit
Se valida que al lanzar una solicitud PUT sin un cuerpo se retorne un error.

### PUT - edit book with empty fields
Se valida que al lanzar una solicitud PUT con campos vacíos se retorne un error y no suceda el editar.

### PUT - edit book with one empty field 
Se valida que al lanzar una solicitud PUT con un campo vacio se retorne un error y no suceda el agregar.

### PUT - edit book with invalid ID
Se valida que al lanzar una solicitud PUT con un id invalido en la url se retorne un error.