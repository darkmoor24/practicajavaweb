# Práctica Java Web
## CRUD Productos Java REST API + Reactjs (Nextjs)

Aplicación CRUD de Java Web 8

## Features

- Feature

## Instalación

La aplicación requiere:

- [Java](https://www.java.com/es/) - v8
- [Java JDK](https://www.oracle.com/mx/java/technologies/downloads/#java17) - v17.0.9
- [Apache Tomcat](https://tomcat.apache.org/download-90.cgi) - v9.0.82
- [MySQL Server](https://downloads.mysql.com/archives/installer/) - v8.0.26
- [Node.js](https://nodejs.org/) - v20.9.0

# Ambientes de ejecución
La aplicación cuenta con 2 ambientes de ejecución y cada uno de ellos tiene su propio procedimiento para ejecutar.

## Desarrollo
- Backend
    1. Ejecutar el proyecto desde el IDE de preferencia o por línea de comando para desplegar la API REST, por defecto la aplicación corre en el puerto 8080 con Apache Tomcat
    
        ```sh
          cd ./
          ```
        
- Frontend
    1. Abrir una terminal y dirigirse al directorio src/main/resources/frontend
         ```sh
            cd src/main/resources/frontend
            npm i
            npm run dev
        ```
         
    2. La aplicación de Frontend para desarrollo se despliega por defecto en el puerto 3000
       
## Producción
- Backend y Frontend (desplegado por API REST)
    ```sh
    cd dillinger
    npm i
    node app
    ```
