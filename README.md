# Práctica Java Web

Java REST API + Reactjs (Nextjs)

Aplicación CRUD con SpringBoot y JPA

## Requisitos

La aplicación requiere:

- [Java](https://www.java.com/es/) - v8
- [Java JDK](https://www.oracle.com/mx/java/technologies/downloads/#java17) - v17.0.9
- [Apache Tomcat](https://tomcat.apache.org/download-10.cgi) - v10.1.15
- [MySQL Server](https://downloads.mysql.com/archives/installer/) - v8.0.26
- [Node.js](https://nodejs.org/) - v20.9.0

## Instalación para desarrollo

- **Código fuente**

```sh
   git clone https://github.com/darkmoor24/practicajavaweb
```

- **Base de datos**

  El script para crearla está ubicado en **/docs/practica.sql**
```sh
   cd ./docs/
   mysql -u root -p root practica.sql 
```
- **Backend**
    1. Ejecutar el proyecto desde el IDE de preferencia (Desarrollado en IntelliJ IDEA)
     2. Se ejecuta en el puerto **8080**, la API se ubica en **http://localhost:8080/practicaweb/api/v1**

- **Frontend**
    1. Abrir una terminal y dirigirse al directorio /frontend y ejecutar los siguientes comandos:
         ```sh
            cd ./frontend
            npm i  -> Instala las dependencias necesarias para compilar la app de Nextjs
            npm run dev -> Inicia la aplicación en modo de desarrollo
        ```
         
    2. La aplicación de Nexjs se despliega por defecto en el puerto **3000**
    3. Acceder a **http://localhost:3000**


## Instalación para producción
### Generación de .war (Opcional)
Construir la aplicación desde Maven con la configuración del archivo **pom.xml**
 1. Delegar construcción de aplicación a Maven (desde IntelliJ IDEA)
     
     ![Diálogo de Configuración -Build, Execution, Deployment para delegar a Maven la construcción de la aplicación ](/docs/images/build1.png)

2. Ejecutar los comandos **clean** y **package** disponibles en la sección de Maven

    ![Ubicación de sección Maven con comandos de ciclo de vida](/docs/images/build2.png)

3. Los archivos de producción de la aplicación se listarán en la carpeta **/target**

    ![Archivos generados en carpeta /target](/docs/images/build3.png)

### Instalación

 1. Copiar el archivo **practicaweb.war** generado en la carpeta **/target**

 2. Ubicar la carpeta **/webapps** de la ubicación raíz de **Tomcat 10 (CATALINA_HOME)**, las siguientes rutas son las más usuales en cada sistema operativo: 
     - **Windows**: C:/Program Files/Apache Software Foundation/Tomcat 10.1/webapps
     - **Linux**: /opt/tomcat/webapps

 3. Pegar el archivo en este directorio. 
     - Si el servidor está configurado para autodesplegar archivos .war, en un rango de 10 a 20 segundos se empieza a desempaquetar nuestra aplicación y se generará una carpeta llamada _practicaweb_. ***Por defecto el servidor ya está configurado para esto***.
     - Si el servidor no está configurado, abrir el archivo **/{CATALINA_HOME}/conf/server.xml** y agregar las siguientes líneas:

       ```xml
          <Host name="localhost" appBase="webapps" unpackWARs="true" autoDeploy="true">  
       ```
 4. Iniciar o reiniciar Tomcat
 5. Acceder a **http://localhost:8080/practicaweb**

    ![Pantalla inicial](/docs/images/main.png)

# Guía de uso

Una vez se ingresó a **http://localhost:8080/practicaweb**, se mostrará la pantalla de bienvenida. 
Para ingresar al Listado de Productos se debe dar clic en el botón "Ingresar".

## Búsqueda de Productos
Al ingresar al Listado de Productos, se mostrará un breve formulario de búsqueda. 
El cual consta de **_Tipo de Producto_ y _Clave de Producto_**.

La búsqueda puede ser realizada de dos modos:
 1. Búsqueda por Tipo de Producto

    ![Búsqueda por Tipo de Producto](/docs/images/usage/search-tipo.png)

 2. Búsqueda por Tipo de Producto y Clave de Producto
    
    ![Búsqueda por Tipo de Producto y Clave de Producto](/docs/images/usage/search-tipo-clave.png)

Al realizar la búsqueda, se mostrará una tabla con todos los registros coincidentes con los criterios de búsqueda ingresados.

![Tabla de registros de Productos](/docs/images/usage/table-productos.png)

En esta tabla es posible **_Agregar_, _Editar_ y _Eliminar_ Productos**, procedimientos descritos en la siguientes secciones.

## Agregar / Editar Producto

  Una vez se haya realizado la búsqueda de productos, será posible Agregar o Editar productos, así como sus proveedores y su información(Clave y Costo de proveedor).

  El formulario de datos es el mismo en ambos casos, por lo que para:

  - Agregar Producto
    
    Es necesario dar clic en el botón "Agregar Producto" situado en la esquina superior derecha de la tabla de registros.

    ![Ubicación del botón para agregar un producto](/docs/images/usage/add-product-button.png)



  - Editar Producto 

    Es necesario ubicar el registro que se quiere modificar y dar clic en el botón con ícono de lápiz en la última columna del registro.

    ![Ubicación del botón para editar un producto](/doc/images/usage/edit-product-button.png)


Al dar clic en cualquiera de las dos opciones se mostrará un cuadro de diálogo de pantalla completa con el formulario de datos del producto.

Es importante mencionar que si el producto es nuevo, el formulario estará vacío. Si se está editando la información, se mostrarán los datos precargados en el formulario.

  #### Agregar Producto

  ![Formulario para agregar un nuevo producto](/doc/images/usage/form-add-product.png)

  #### Editar Producto

  ![Formulario para editar un producto](/doc/images/usage/form-edit-product.png)


  ### Datos del Producto



  ### Proveedores del Producto

  ### Guardar el nuevo producto o los cambios realizados

  > [!NOTE]
  > Para guardar un nuevo producto, o cualquier cambio realizado en su información o la de sus proveedores, se debe dar clic en el botón Guardar ubicado en la esquina superior derecha.

## Eliminar Producto

## Bonus - Dark Mode (no requerido)
Es posible activar o desactivar el modo oscuro en esta aplicación web. 

Por defecto está en modo oscuro.
Para cambiarlo sólo hay que activar o desactivar el botón ubicado en la esquina superior derecha de la pantalla.

![Switch Dark mode](/docs/images/usage/dark-mode.png)
