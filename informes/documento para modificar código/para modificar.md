2.5 La aplicación final puede ser modificada por alguien externo al equipo de desarrollo. 

##### El objetivo de este documento es que cualquier persona con conocimientos de matemática, computación y del problema que resuelve la aplicación pueda ser capaz de modificar el código fuente para adaptarlo a nuevas necesidades. 

Con este documento pretendemos informar a alguien externo como poder realizar cualquier modificación en la aplicación, para lograr esto explicaremos cual es el flujo de trabajo de esta y que funcionalidades tienen cada una de sus partes. Para realizar cualquier cambio es necesario tener conocimientos básicos del lenguaje de programación $pyhton$ y del framework $flask$ que se utiliza en el mismo lenguaje para el trabajo con la página web. Para trabajar con documentos $excel$ se utilizó xls por tanto si se desea realizar algún cambio en la forma de leer y exportar datos con $excel$ puede ver el $.py$  pertinente

 Para empezar tomaremos de referencia el $.py$ $main$ y hablaremos de los distintos módulos que esta utiliza a medida que estos se van cargando, explicando las funcionalidades de los mismos y el uso que se les dan, por si se desea realizar algún cambio en estos o agregar algo nuevo el programador sepa donde encontrar lo que necesita para modificarlo si ya esta creado.

 Brindaremos un orden de como se va ejecutando el programa y pondremos imágenes del código fuente explicando que realiza cada función. En el caso del $html$ mostraremos el código de este y como se visualiza el mismo en pantalla.

##### main.py

Iniciaremos explicando las funciones que se encuentran en este $.py$

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\PROYECTO GIT\Electricity-Spot-Market\informes\documento para modificar código\img\1.mainImports.png" alt="1.mainImports" style="zoom:50%;" />

Estos $import$ se utilizan para cargar todo lo relacionado con la librería de $flask$, lo que se encuentra en $utils$ puede ser modificado fácilmente pues son funciones creados por nosotros para facilitar el trabajo con $Flask$



Al inicio del $.py$ seleccionamos quien será el host, el puerto, asignamos quien guardará la estructura de $Flask$.

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\PROYECTO GIT\Electricity-Spot-Market\informes\documento para modificar código\img\2.mainData.png" alt="2.mainData" style="zoom:50%;" />



Seguido tenemos las funciones que utiliza el framework para saber que trabajo realizar para cada ruta.

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\PROYECTO GIT\Electricity-Spot-Market\informes\documento para modificar código\img\3.mainRutes.png" alt="3.mainRutes" style="zoom:50%;" />

La 1ra función es un $GET$ de la página que se muestra al acceder al sitio.

La 2da función trabaja con $index$ que es la página que muestra las opciones para rellenar los datos y muestra los resultados obtenidos. Para mostrar la página utiliza un $GET$ y una vez se insertan los datos y se desea obtener una solución se realiza un $POST$

Si esa función se llama con un $GET$ $request.method == "POST"$ será falso y por tanto solo mostrará la página $index.html$, en caso de ser un $POST$ si pasará el primer $if$ y según si los datos se pasaron con un $excel$ o se entraron a mano es que tomará los valores, mostrando luego una nueva página llamada $result.html$ donde  se presentan los resultados obtenidos de la resolución del modelo. Las diferentes funciones que se utilizan en cada caso se presentarán más adelante en las secciones dedicadas a sus respectivos $.py$

La 3ra función es para cuando se acceda a página $about$, la cual solo muestra en pantalla información y por tanto es un $GET$

##### demand.py

El otro módulo que utilizamos es el $demand.py$, en este se manejan las herramientas que se utilizan en el $frontend$, empezando por una clase que hereda de $Enum$ llamada $distribution$ que se utiliza para el $dropbox$ del $index.html$ que permite al usuario seleccionar que tipo de variable aleatoria desea elegir. 

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\distributionEnum.png" alt="distributionEnum" style="zoom:50%;" />

Luego tiene la función $demand$ que recibe el tipo de distribución que se seleccionó desde el $frontend$, los parámetros de esa distribución y un N que representa la cantidad de casos si es por escenarios y a partir de aquí se genera la demanda basándose en las funciones del $random\_variables.py$

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\demandaGen.png" alt="demandaGen" style="zoom:50%;" />

Por tanto si se desea agregar alguna otra forma de calcular la demanda y acceder a ella desde el $frontend$ se deberá agregar su nombre en el $Enum$ y especificar como se calcula en la función $demand$. Si se desea agregar alguna otra forma de generar variables aleatorias puede hacerlo aquí pero para mantener la estructura de la aplicación sería mejor que las agregase en $random\_variables.py$

##### file_work.py

En este módulo tenemos las funciones relacionadas con el trabajo con documentos $excel$, por eso se importa $xlrd$. Aquí tenemos las funciones encargadas de abrir el $excel$ (con la función $read\_excel$) , $parsear$ sus valores a $python$ (con las funciones $get\_values\_from\_excel$ y $parse\_variable$) y la función $write\_output$ que se encarga de exportar la salida. Si se desea cambiar la forma en la que se toman los datos de $excel$ o la forma en que estos se exportan deberá cambiar las funciones pertinentes. 

Recordar que este modulo se carga en $main.py$, y se utiliza en la función $index$, por tanto si se desea hacer algún cambio en la entrada de alguna función puede encontrar su llamado en $main.py$

##### flask.py

En este módulo se encuentran las funciones que se llaman directamente utilizando las rutas de $flask$ en el $main.py$, la principal tarea consiste en enlazar los datos que se agregan desde el $frontend$ y traerlos al $backend$ 

$find\_val\_to\_model$ conecta la entrada y devuelve esta como valores en $python$. Si se desea agregar más entradas puede hacerlo en esta función o crear una nueva función en este $.py$ y hacer el llamado a partir de la ruta correspondiente.

$create\_demand$ y $create\_demand\_excel$ crean la demanda a partir de la entrada de valores dados por el usuario o a partir de un documento $excel$ respectivamente.

Con $get\_result$  se genera la demanda $d$ y se intenta resolver el modelo, luego se hace $return$ a los dos listados de variables las cuales tienen el valor con el que se alcanza el óptimo de la función objetivo. Si se quisiera hacer algún cambio en la forma de generar la demanda o en la estructura del modelo puede ir a las funciones que se encargan de realizar esa tarea y en esta solo se aseguraría de recibir la entrada necesaria y dar la salida correcta.

<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108230014594.png" alt="image-20220108230014594" style="zoom:50%;" />



##### random\_variables.py

En este módulo tenemos todas las fórmulas que utilizamos para calcular variables aleatorias a partir de un random. Como variables aleatorias continuas tenemos:

- uniforme

- exponencial

- gamma

- normal

  <img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\vaContinuas.png" alt="vaContinuas" style="zoom:50%;" />

  



Y como variables aleatorias discretas tenemos:

- binaria

- geométrica

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\vaDiscretas.png" alt="vaDiscretas" style="zoom:50%;" />

Y por ultimo tenemos el caso por escenarios 

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\vaEscenarios.png" alt="vaEscenarios" style="zoom: 50%;" />

Si se desea agregar alguna otra forma de generar variables aleatorias puede agregarla aquí para mantener la estructura del proyecto pero para utilizar dicha variable para calcular la demanda se deben modificar los métodos del $demand.py$



##### solveModel.py

$from\ gekko\ import\ GEKKO$

Con esta línea cargamos el módulo de $GEKKO$ el cual utilizamos para representar el modelo y resolverlo. Para ello utilizamos las funciones que veremos a continuación:

##### La función $solveModel$

Primero se crean las variables que utiliza $GEKKO$  para representar el modelo $q\_i$ y $t\_ij$ y se guardan en los listados $vars\_q$ y $vars\_t$ ( para realizar este proceso están las funciones $assignVar\_q$ y $assignVar\_t$ respectivamente).

En $m$ se asigna la estructura $GEKKO$ la cual recibirá el modelo con la función objetivo y las condicionales.

$conditionals(m,L,vars\_q,vars\_t,D)$ coloca en $m$ las restricciones del modelo(se verá la función más adelante), se le pasa como parámetros la estructura $GEKKO$, la matriz L, los dos listados de variables y la Demanda

Luego se le especifica a $m$ cual será su función objetivo mediante un llamado a $obj\_fun$ que recibe como parámetro el listado de variables $vars\_q$ y los listados $a$ y $b$

Ya con esto tenemos el modelo con su función objetivo y sus condicionales así que se llama al método $solve$ de la estructura $GEKKO$, el cual resuelve el modelo y en cada variable deja el valor que debe tener esta para conseguir el óptimo (recordar que en este caso esas variables se encuentran en los listados $vars\_q$ y $vars\_t$) .

Como esta función representa la construcción del modelo y la solución de este con el método $solve$ es preferible mantenerlo de esta forma, si se desea cambiar las condicionales del modelo o la función objetivo aquí solo se deben editar los parámetros que estas reciben de entrada y retornar las variables correspondientes.

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\SolveModel.png" alt="SolveModel" style="zoom:50%;" />



$obj\_function$ será la función objetivo del modelo que se desea resolver, en caso de tener otra función objetivo basta con cambiar la implementación de este método y devolver la función que se desea. En este caso q,a y b son listados con variables, pero se puede modificar a conveniencia.

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\obj_function.png" alt="obj_function" style="zoom:50%;" />



En $conditionals$ se especifican las ecuaciones o inecuaciones que se utilizaran como restricciones del modelo, note que cualquier ecuación que se desee agregar se debe colocar en $m.Equation(<EquationBody>)$, donde $m$ es la estructura $GEKKO$ que representa el modelo. En nuestro caso se agregan tantas condicionales como largo tenga la lista L de entrada. Nótese que la condicional debe de satisfacer que devuelve $Bool$, o sea debe existir una relación de igualdad o desigualdad al final. Si se desean utilizar otras condicionales basta con especificar:

$m.Equation(Conditional1)$

$m.Equation(Conditional2)$

$m.Equation(Conditional3)$

$...$

$m.Equation(Conditionaln)$

donde m es la estructura $GEKKO$ que representa el modelo.

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\conditionals.png" alt="conditionals" style="zoom:50%;" />



En los métodos $assignVar\_q$ y $assignVar\_t$ se crean las variables a evaluar y se colocan en listados. Estas variables se crean con el método $m.Var$ y se van guardando en el listado correspondiente. Al finalizar se devuelve dicho listado. (Nótese que en $assignVar\_t$ se utiliza un listado de listas xq se está trabajando con una matriz bidimensional)

<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\listasConVariables.png" alt="listasConVariables" style="zoom:50%;" />



Por ultimo tenemos los métodos auxiliares $sum\_T\_Out$ y $sum\_T\_In$ que computan la energía que sale y entra a cada nodo a partir de la fórmula, donde $node$ es el id del nodo del que se desea computar la energía que sale o entra.



<img src="C:\Users\reynel\Downloads\4to_dos_semestre\Modelos de Optimizacion II\InformeFotos\termicalSum.png" alt="termicalSum" style="zoom:50%;" />



En este módulo se encuentra todo lo relacionado con la estructura del modelo y las funciones relacionadas con este, por tanto si no se desea cambiar nada del modelo en cuestión no se debe modificar ninguna función de aquí, si se desea cambiar el modelo, no es necesario acceder a nada externo excepto si se desea cambiar algún parámetro de entrada, en ese caso deberá ir al $flask.py$ en la función $get\_results$ y especificar esos parámetros donde se llama a la función $solveModel$



##### about.html

Este $html$ contiene la información de los pasos a realizar para utilizar la aplicación y resolver el problema, cualquier cambio que se desee realizar en como utilizar la aplicación debería dejarlo reflejado en el about.

##### home.html

Es la presentación de la app, si desea cambiar la presentación puede cambiarla aquí o modificar la aplicación para que abra directamente en el index.html, está solo por motivos estéticos.

##### index.html

A continuación pasaremos a explicar como está distribuido el $html$ usando $flask$ por si se desea hacer algún cambio sobre este se entienda como afecta a la aplicación.

Primero se muestra un $texbox$ para números donde se coloca la cantidad de nodos del problema y un botón Create matrix que genera una matriz a partir de la cantidad de nodos que se insertan. A continuación podemos ver como se ve en el navegador y el código correspondiente

##### <img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108233527495.png" alt="image-20220108233527495" style="zoom:50%;" /> 

<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108233626769.png" alt="image-20220108233626769" style="zoom:50%;" />

Al pulsar el botón se nos muestran dos listados y una matriz para rellenar, el código es el que podemos ver a continuación en el $html$



<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108233710231.png" alt="image-20220108233710231" style="zoom:50%;" />

<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108233732287.png" alt="image-20220108233732287" style="zoom:50%;" />

Estos valores pasan al $backend$ como las variables $l$(para $l\_matrix$), $a$ (para $a\_matrix$) y b, (para $b\_matrix$) en la función $index$ del $main.py$ cuando se le haga $post$.

Luego tenemos la selección de variable y su respectivo código en $html$. Esta selección es un $dropbox$ con las distintas distribuciones separadas por tipo y luego uno o dos $textbox$ aparecerán para seleccionar los parámetros de la variable aleatoria que se utilizará para generar la Demanda. En el caso de $por\_escenarios$ aparecerá una lista para rellenar la probabilidad de cada escenario.



<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108233953463.png" alt="image-20220108233953463" style="zoom:50%;" />

<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108234016500.png" alt="image-20220108234016500" style="zoom:50%;" />



<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108233922808.png" alt="image-20220108233922808" style="zoom:50%;" />



Y para finalizar tenemos el botón $send$ que al ser de tipo $submit$, hará un llamado a la función $index$ del $main.py$ pero con $request.method$ siendo $POST$  por lo que esta vez pasará por $solve\_model$  y devolverá las listas con las soluciones del modelo, mostrándolas en otra página. También tenemos otro botón para cargar los datos a partir de un $Excel$ que llama a la función encargada de transformar los datos desde $Excel$ a $python$. El código de los botones es el siguiente:

<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108235159952.png" alt="image-20220108235159952" style="zoom:50%;" />



<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108235537320.png" alt="image-20220108235537320" style="zoom:50%;" />



##### results.htm

En esta página damos los resultados del modelo, el script para dibujarlo en forma de matriz se encuentra en el propio $html$ con el nombre $draw\_matrix$. Puede cambiarlo para mostrar los resultados de la forma en que guste, los listados con la solución del modelo se encuentra en:

<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220109000315202.png" alt="image-20220109000315202" style="zoom:50%;" />

Y se muestran en la página con el siguiente código:

 <img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220109000117634.png" alt="image-20220109000117634" style="zoom:50%;" />



Quedando de la siguiente forma:



<img src="C:\Users\reynel\AppData\Roaming\Typora\typora-user-images\image-20220108235448743.png" alt="image-20220108235448743" style="zoom:50%;" />