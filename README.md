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

- Código fuente

```sh
   git clone https://github.com/darkmoor24/practicajavaweb
```

- Base de datos

  El script que la crea está ubicado en /docs/practica.sql
```sh
   cd ./docs/
   mysql -u root -p root practica.sql 
```
- Backend
    1. Ejecutar el proyecto desde el IDE de preferencia (Desarrollado en IntelliJ IDEA)

- Frontend
    1. Abrir una terminal y dirigirse al directorio /frontend y ejecutar los siguientes comandos:
         ```sh
            cd ./frontend
            npm i  -> Instala las dependencias necesarias para compilar la app de Nextjs
            npm run dev -> Inicia la aplicación en modo de desarrollo
        ```
         
    2. La aplicación de React se despliega por defecto en el puerto 3000

      
