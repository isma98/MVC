# MVC
Creacion de una api a partir del modelo MVC

El primer paso es tener ya creada una base de datos en mongodb en caso de que no, crear una base de datos a partir del siguiente modelo 


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
    
<----------------------------------------EXPLICACION GENERAL DE CADA ARCHIVO------------------------------------------------------------> 
 
materias.js --> En este archivo esta nuestro modelo que se basa en nuestra colección de mongodb
admin.js --> En este archivo esta la configuración de las instrucciones a ejecutar, estas instrucciones se basan a partir del modelo (materias.js)
app.js --> Este archivo es el controlador principal que ejecuta la conexión de nuestro servicio, asi como la ejecución de las instruccines para cada metodo en su respectiva URI
package.json --> Archivo generado con ayuda de node.js para hacer uso de los recursos necesarios para hacer funcionar el proyecto
Dockerfile --> Con este archivo vamos a crear nuestra imagen de docker con ayuda del archivo package.json
docker-compose.yml --> Con este archivo vamos a crear nuestro contenedor de docker para poder hacer uso de nuestro servicio

<----------------------------------------PASOS PARA CORRER EL PROYECTO------------------------------------------------------------>
