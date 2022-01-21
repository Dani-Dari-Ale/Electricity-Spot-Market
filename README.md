# Electricity-Spot-Market
MOII Project

# Carpeta code

Para ejecutar el proyecto debe tener instalado python version 3 o superior.

Luego instalar los requerimientos necesarios ejecutando: 

$ pip3 install -r requirements.txt


Finalmente ejecute la aplicacion escribiendo 

$ python3 main.py


# Creacion del ejecutable (Carpeta exe)

-Lo primero que debemos hacer es instalar pyinstaller con pip3 install

-Para crear el ejecutable hacemos lo siguiente:

	-Linux: pyinstaller -F -i ./1.ico --add-data "templates:templates" --add-data "static:static" main.py
	
	-Windows: pyinstaller -F -i ./1.ico --add-data "templates;templates" --add-data "static;static" main.py

-Luego debemos modificar el archivo main.spec:

	- Agregamos lo siguiente para poder trabajar con gekko:
	from PyInstaller.utils.hooks import collect_data_files
	gekko = collect_data_files('gekko')
	
	-Luego el valor de datas= gekko + [('templates', 'templates'), ('static', 'static')],
	
	-Ejecutamos en la consola pyinstaller main.spec

-Una vez hecho esto tenemos en la carpeta "dist" el ejecutable. Este ejecutable siempre debe estar en la misma carpeta del "input.xls" para poder usar la opcion del excel.

Nota: En Windows para cerrar la aplicacion y que no se quede corriendo en el puerto debemos salir presionando Ctrl+c. En Linux escribiendo en consola sudo kill $(sudo lsof -t -i:3000)
 
 Los ejecutables se encuentran en exe/Ejecutables/
