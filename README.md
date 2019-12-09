# MVC
Creacion de una api a partir del modelo MVC

NOTA: Antes de iniciar el proyecto, tenemos que tener instalado docker desktop, node.js, postman y mongodb
LINKS DE DESCARGA:
https://docs.docker.com/docker-for-windows/install/
https://nodejs.org/es/
https://www.mongodb.com/download-center
https://www.getpostman.com/

El primer paso es tener ya creada una base de datos en mongodb en caso de que no, crear una base de datos a partir del siguiente modelo 
[
{
        "nombre" : "Algebra",
        "clave" : "ABC1",
        "maestro" : "Javier Perez",
        "semestre" : 1
}
{
        "nombre" : "Quimica",
        "clave" : "ABC2",
        "maestro" : "Julio Peralta",
        "semestre" : 2
}
{
        "nombre" : "Ciencias Naturales",
        "clave" : "ABC3",
        "maestro" : "Monserrat Caballero",
        "semestre" : 3
}
{
        "nombre" : "Etica",
        "clave" : "ABC4",
        "maestro" : "Elizabeth Juares",
        "semestre" : 4
}
{
        "nombre" : "Calculo Diferencial",
        "clave" : "ABC5",
        "maestro" : "Ivan Salomon",
        "semestre" : 5
}
{
        "nombre" : "Estadistica",
        "clave" : "ABC6",
        "maestro" : "Miriam Jimenez",
        "semestre" : 6
}
{
        "nombre" : "Sistemas Operativos",
        "clave" : "ABC7",
        "maestro" : "Alberto Reyes",
        "semestre" : 7
}
{
        "nombre" : "Computo en la nube",
        "clave" : "ABC8",
        "maestro" : "Gabriel Bandala",
        "semestre" : 8
}
{
        "nombre" : "Aplicaciones Moviles",
        "clave" : "ABC9",
        "maestro" : "Dionisio Alvarez",
        "semestre" : 9
}
{
        "nombre" : "Legislacion",
        "clave" : "ABC10",
        "maestro" : "Selene Rodriguez",
        "semestre" : 10
}

]
Cuando tengamos nuestra base de datos tenemos que crear una carpeta donde dejaremos nuestro proyecto, en este caso la estructura de carpetas quedo del siguiente modo

MVC
  apiclientes
    models
      materias.js
    controllers
      admin.js
    node-modules
    Dockerfile
    docker-compose.yml
    app.js
    keys.js
    package.json
    package-lock.json
    
<----------------------------------------EXPLICACION GENERAL DE CADA ARCHIVO----------------------------------------------------------> 

keys.app --> Muestra la conexion al servidor
materias.js --> En este archivo esta nuestro modelo que se basa en nuestra colección de mongodb
admin.js --> En este archivo esta la configuración de las instrucciones a ejecutar, estas instrucciones se basan a partir del modelo (materias.js)
app.js --> Este archivo es el controlador principal que ejecuta la conexión de nuestro servicio, asi como la ejecución de las instruccines para cada metodo en su respectiva URI
package.json --> Archivo generado con ayuda de node.js para hacer uso de los recursos necesarios para hacer funcionar el proyecto
Dockerfile --> Con este archivo vamos a crear nuestra imagen de docker con ayuda del archivo package.json
docker-compose.yml --> Con este archivo vamos a crear nuestro contenedor de docker para poder hacer uso de nuestro servicio

<----------------------------------------PASOS PARA CORRER EL PROYECTO------------------------------------------------------------>

Corremos el programa de Docker y nos dirigimos a la ruta donde esta el archivo docker-compose.yml (dentro de una linea de comandos),
despues ejercutamos el siguiente comando:

    docker-compose up  --> Comando para crear un contenedor a partir del docker-compose
    NOTA:este comando crea un contenedor a partir de imagenes que declaramos dentro del archivo docker-compose.yml, si no tenemos 
    ninguna imagen con el mismo nombre que este en el archivo, estas se van a crear automaticamente y despues se creara el contenedor
Para ver si se creo el contenedor y si este se ejecuta correctamente usamos :

    docker ps --> lista los contenedores activos
    Si vemos api_materias y mongoserver ejecutamos
    docker logs api_materias 
    
Para comprobar si el resultado es correcto ingresamos a postman y seleccionamos el metodo get dentro de la url 'localhost:1500/'
tendria que salir un mensaje que indique si la conexión es satisfactoria o no, si es satisfactoria ingrese a la url 
'localhost:1500/api/materias' y realice un post con el modelo de la colección y por ultimo realice un get en la misma url
para ver el nuevo elemento ingresado

<----------------------------------SI QUEREMOS INICIAR EL PROYECTO CON UNA NUEVA DB Y COLLECCION------------------------------------>

(1) Lo primero que tenemos que hacer es irnos al archivo keys.js en este archivo vamos a configurar el acceso a nuestra db y nombre de servidor, en este caso es nuestro localhost
(2) Despues vamos al archivo materias.js, en este archivo vamos a modificar nuestro modelo de nuestra coleccion, tenemos que ajustarla
dependiendo de la estructura que tengamos en la nueva coleccion, seria recomendable renombrar el archivo materias.js por un nombre
que haga alusión a la nueva colección.
(3) Vamos al archivo admin.js en este archivo van a estar 2 modelos de un CRUD que se llaman materiasInq y materiasAdd, tenemos que 
cambiar los nombres de los atributos que estamos pasando por request por atributos que esten dentro de nuestro nuevo modelo 
(materias.js) y de preferencia combiar el nombre de materiasInq y materiasAdd por [nombre-modelo]Inq y [nombre-modelo]Add para tener 
mejor consistencia.
(4) Despues nos vamos a nuestro archivo app.js que es el que sirve como boton de arranque por decirlo de algun modo, ya que en este 
archivo se ejecutan las funciones de nuestro admin.js. En este archivo podemos cambiar el numero de puerto y las urls que 
utilizaremos más adelante para verificar si funciona el proyecto. Solo hay que modificar las url de /api/materias por una que se 
ajuste mas a la nueva coleccion, tambien cmabiar el nombre de los archivos requeridos (materias.js, materiasInq y materiasAdd) por
los nuevos nombres que le dimos, claro esto solo en caso de haber alterado los archivos materias.js y admin.js
(5) Despues abrimos nuestro docker-compose.yml y modificamos el nombre del servidor, el contenedor, la imagen que va a crear 
(api_materias y servidormongo),el nombre del contenedor y la imagen pueden tener el nombre que sea, pero el nombre del contenedor
del servidor debe tener el mismo que declaramos en keys.js, tambien tenemos que verificar que el puerto que designemos en el contenedor
de la imagen debe ser el mismo que tiene en app.js y en Dockerfile 
(6) Enseguida ingresamos a una linea de comandos a la ruta de nuestro proyecto, mas especificamente donde esta docker-compose.yml
y ejecutamos el comando "docker-compose up" con el que se creeara un contenedor a partir de una imagen creada por nuestro archivo 
package.json, que a su vez ejecuta nuestro archivo app.js
(7) Por ultimo verificamos si se creo nuestro contenedor con el comando "docker ps", si este se creo correctamente ejecutamos 
"docker logs [nombre del contenedor]" en nuestro contenedor que posea la imagen creada a partir de nuestro modelo. Para finalizar 
abrimos postman y ejecutamos un post y un get dentro de la url que especificamos en app.js (Ejemplo -> localhost:5000/api/materias)

NOTA: Si hacemos un get por primera vez o apagamos y prendemos nuestra computadora el registro de los documentos dentro de la colección
se borrara, porque no tiene un medio que guarde la información y para evitar eso necesitariamos crear un red con un usuario y contraseña
que guarde nuestros registros 

LINK DE REPOSITORIO DE MODELO MVC CON NETWORK
https://github.com/isma98/MVC-network
