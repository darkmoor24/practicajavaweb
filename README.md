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

## Guía de uso
