# Desafio "Uso básico de arrays y objetos"

![captura presentación][0]

|Bootcamp 2022 Modulo 4|Introducción a la programación con Javascript|
|----|-----|
|**Unidad n°3**|Arrays y objetos|
|**Día Bootcamp**|47|
|**Día Modulo**|10/15|

<hr>

El desafío es un ejercicio muy básico para aprender a crear arreglos y objetos. En base a unas planillas de cálculo dadas, se deben crear arreglos de objetos que representan esas planillas de forma clara y ordenada. Además se solicitan algunos ejercicios simples de extracción de datos y representación en una vista utilizando algun método para recorrer estos arreglos.

<hr>

# Referencias: *'cause we nerds... love them!! :)*

* [MDN sobre Array][1] con referencias muy interesantes a *shallow & deep copy*.
* [MDN sobre Object][2]
* [MDN sobre HTMLElement.innerText][3]

<hr>

# Requerimientos

|N°|Estado|Requisito|Puntaje|
|:-------:|:------:|:------:|:------:|
|1|OK|Crear 1 arreglo por cada listado (planilla) y 1 objeto dentro de estos para cada fila de la planilla|?|
|2|OK|Mostrar la primera y última atención de cada listado siguiendo el formato solicitado|?|
|3|OK|Recorrer el arreglo y mostrar su contenido en una tabla|?|

<hr>

## IMPLEMENTACIÓN

* Se han 3 creado 3 arreglos, tal como solicita el desafío. Estos arreglos contienen 1 objeto por cada fila de información contenida en las planilla de cálculo sobre las que se deben crear estos arreglos de objetos. 
* Para el segundo requisito se crean creado *template literals* utilizando la propiedad `Array.length`.
* El pintado se ha realizado con 2 pequeñas funciones: 
  * La primera simplemente inserta los templates literals mencionados anteriormente dentro de elementos `<p>` dentro del nodo de texto a través de la propiedad `Element.innerText`.
  * La segunda recorre los arreglos e inserta *strings* a través del método `Element.innerHTML` que serán parseadas como elementos `<tr>`

<hr>

## NOTAS

1. Solo una curiosidad: insertar saltos de línea dentro de un *template literal* que se insertará dentro de un elemento del DOM creará automáticamente un elemento <br> para representar ese salto, por lo que esta práctica.
2. Una sola duda me queda respecto a esto: será este un efecto secundario de utilizar la propiedad `innerText` de la interfaz `HTMLElement` que no aparece si uno utiliza la propiedad `innerHtml` de la interfaz Element o la propiedad `textContent` de la interfaz `Node`? Sobre esto también hay consideraciones de seguridad que deben ser tenidas en cuenta.

![captura][4]
![captura][5]

<hr>

[5]:./assets/utils/screenshot1.png
[4]:./assets/utils/screenshot2.png
[3]:https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[1]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[0]:./assets/utils/presentacion.png


<!--TODO -->
<!--TODO -->
<!--TODO -->
<!--TODO -->
<!--TODO -->
