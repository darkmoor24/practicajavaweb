DROP DATABASE IF EXISTS practica;
CREATE DATABASE IF NOT EXISTS practica;
USE practica;

CREATE TABLE tipo_producto(
	id_tipo_producto		INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre			        VARCHAR(90),
    descripcion		        VARCHAR(90)
);

CREATE TABLE proveedor(
	id_proveedor		INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre		    	VARCHAR(90),
    descripcion		    VARCHAR(90)
);

CREATE TABLE producto(
	id_producto			INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre				VARCHAR(90),
    clave				VARCHAR(30),
    costo				DOUBLE,
    estatus				INT NOT NULL DEFAULT 1,
    id_tipo_producto	INT NOT NULL,

    CONSTRAINT fk_tipo_producto FOREIGN KEY (id_tipo_producto) REFERENCES tipo_producto(id_tipo_producto) ON DELETE CASCADE ON UPDATE CASCADE
);      


CREATE TABLE proveedor_producto(
	id_proveedor_producto 	    INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    clave_proveedor			    VARCHAR(30),
    costo_proveedor	    		DOUBLE,
    
    id_proveedor				INT NOT NULL,
    id_producto	    			INT NOT NULL,

    CONSTRAINT fk_proveedor FOREIGN KEY (id_proveedor) REFERENCES proveedor(id_proveedor) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_producto	FOREIGN KEY (id_producto)  REFERENCES producto(id_producto) ON DELETE CASCADE ON UPDATE CASCADE
);  

# Views
-- Listar tipos productos
CREATE VIEW viewObtenerTiposProductos AS 
SELECT tp.id_tipo_producto, tp.nombre, tp.descripcion FROM tipo_producto tp;

-- L        istar productos
CREATE VIEW viewObtenerProductos AS 
SELECT p.nombre, p.clave, p.costo, p.id_producto, p.id_tipo_producto, p.estatus FROM producto p INNER JOIN tipo_producto tp ON p.id_tipo_producto = tp.id_tipo_producto;

-- Listar p     roveedores producto
CREATE VIEW viewObtenerProveedoresProducto AS
SELECT pp.id_proveedor_producto, pp.clave_proveedor, pp.costo_proveedor, pr.nombre, p.id_producto FROM proveedor_producto pp 
INNER JOIN proveedor pr ON pp.id_proveedor = pr.id_proveedor
INNER JOIN producto p ON pp.id_producto = p.id_producto;  

# Stored Procedures

/* CREATE SENTENCES */
-- Agregar nuevo producto
DELIMITER $$
CREATE PROCEDURE spAgregarProducto(
	IN v_nombre				VARCHAR(90),
    IN v_clave				VARCHAR(30),
    IN v_costo				DOUBLE,
	IN v_id_tipo_producto	INT
)            
	BEGIN
		INSERT INTO producto (nombre, clave, costo, id_tipo_producto) VALUES (v_nombre, v_clave, v_costo, v_id_tipo_producto);
    END $$              
DELIMITER ;

-- Agregar nuevo proveedor producto
DELIMITER $$
CREATE PROCEDURE spAgregarNuevoProveedorProducto(
	IN v_clave_proveedor		VARCHAR(30),
    IN v_costo_proveedor		DOUBLE,
    IN v_id_proveedor		    INT,
    IN v_id_producto	    	INT
)   
	BEGIN
		INSERT INTO proveedor_producto (clave_proveedor, costo_proveedor, id_proveedor, id_producto) VALUES (v_clave_proveedor, v_costo_proveedor, v_id_proveedor, v_id_producto);
    END $$  
DELIMITER ; 

/* READ SENTENCES */
-- Listar tipos de producto
DELIMITER $$
CREATE PROCEDURE spObtenerTiposProductos ()
	BEGIN
		SELECT * FROM viewObtenerTiposProductos;
    END $$
DELIMITER ;

-- Listar productos por tipo producto y clave (coincidencias de clave)
DELIMITER $$
CREATE PROCEDURE spObtenerProductos (
	IN v_id_tipo_producto	INT,
    IN v_clave			    VARCHAR(30)
)            
	BEGIN
		IF v_clave = "" THEN
			SELECT p.id_producto, p.nombre, p.clave, p.costo, p.estatus, p.id_tipo_producto FROM viewObtenerProductos p WHERE p.id_tipo_producto = v_id_tipo_producto;
        ELSE
			SELECT p.id_producto, p.nombre, p.clave, p.costo, p.estatus, p.id_tipo_producto FROM viewObtenerProductos p WHERE p.id_tipo_producto = v_id_tipo_producto AND p.clave LIKE CONCAT('%', v_clave, '%');
        END IF;
    END $$              
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE spObtenerProveedoresProducto (IN v_id_producto INT)
	BEGIN
		SELECT pp.id_proveedor_producto, pp.nombre, pp.clave_proveedor, pp.costo_proveedor FROM viewObtenerProveedoresProducto pp WHERE pp.id_producto = v_id_producto;
    END $$  
DELIMITER ; 

/* UPDATE SENTENCES */
-- Actualizar producto
DELIMITER $$ 
CREATE PROCEDURE spActualizarProducto (
	IN v_nombre				VARCHAR(30),
	IN v_clave				VARCHAR(30),
    IN v_costo				DOUBLE,
    IN v_estatus			INT,
    IN v_id_tipo_producto	INT,
    IN v_id_producto		INT
)
	BEGIN
		UPDATE producto SET nombre = v_nombre, clave = v_clave, costo = v_costo, estatus = v_estatus, id_tipo_producto = v_id_tipo_producto WHERE id_producto = v_id_producto;
	END $$              
DELIMITER ;

-- Actualizar proveedor producto
DELIMITER $$
CREATE PROCEDURE spActualizarProveedorProducto(
	IN v_clave_proveedor 		VARCHAR(30),
    IN v_costo_proveedor		DOUBLE,
    IN v_id_proveedor			INT,
    IN v_id_proveedor_producto	INT
)       
	    BEGIN
		UPDATE proveedor_producto SET clave_proveedor = v_clave_proveedor, costo_proveedor = v_costo_proveedor, id_proveedor = v_id_proveedor WHERE id_proveedor_producto = v_id_proveedor_producto;
    END $$  
DELIMITER ; 


/* DELETE SENTENCES (Bajas físicas)*/
-- Eliminar producto: Elimina los proveedores y el producto
DELIMITER $$
CREATE PROCEDURE spEliminarProducto(IN v_id_producto INT)
	BEGIN 
		DELETE FROM proveedor_producto WHERE id_producto = v_id_producto;
        
		DELETE FROM producto WHERE id_producto = v_id_producto;
    END $$
DELIMITER ;

-- Eliminar proveedor producto
DELIMITER $$
CREATE PROCEDURE spEliminarProveedorProducto(IN v_id_proveedor_producto INT)
	BEGIN   
		DELETE FROM proveedor_producto WHERE id_proveedor_producto = v_id_proveedor_producto;
    END $$  
DELIMITER ; 


# Datos no administrables segun requerimientos
INSERT INTO tipo_producto (nombre, descripcion) VALUES
("Limpieza", "Productos de limpieza en general"),
("Ropa", "Ropa para todas las edades"),
("Electrónica", "Productos de audio, video y demás");

INSERT INTO proveedor (nombre, descripcion) VALUES 
("Distribuidora México", "Productos químicos de limpieza"),
("Abarrotes a Granel Ruiz", "Abarrotes en general a granel"),
("Surtidora La Morena", "Productos y material de limpieza en general"),
("Tech Solutions", "Productos de audio"),
("Gadget World", "Productos de vídeo y grabación"),
("Fashion Trends", "Ropa de niño y mujer"),
("Clothing Co.", "Ropa de caballero");

# Datos de prueba
CALL spAgregarProducto('Pinol 350ml', 'PINOL350', 25.5, 1);
CALL spAgregarNuevoProveedorProducto('ML-350-PINO', 22.6, 1, 1);