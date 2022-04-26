# Angular servicios

## Contenidos 
1. [Introducción](#intro)
  1.1. [Link web](#link-web) 
3. [Visualización](#visualizacion)
4. [Descripción del trabajo realizado](#descripcion)

### 1. Introducción
Se trata de realizar una aplicación en angular en el que haya comunicación entre componentes padres e hijos. 

### 1.1 Link web <a name="link-web"/>
https://juancad.github.io/angular_servicios/

## 2. Visualización <a name="visualizacion"/>

Se trata de una aplicación para un bloc de notas, en el que se pueden añadir notas a una lista de notas y, posteriormente, marcar las notas como realizadas.

![image](https://user-images.githubusercontent.com/91132611/165274576-02585d90-7427-4abb-bb7f-6de93420be0b.png)

## 3. Descripción del trabajo realizado <a name="descripcion"/>

Se ha creado el componente padre "notes", que transmite información al componente hijo "list". También se ha creado un componente para poder marcar las notas, llamado "notemark".

"notemark" me permite marcar una nota como completada o no, en una nota marcada aparecerá un ✓.

El modelo nota contiene los atributos: titulo, contenido, color y fecha. 
- titulo es una cadena de caracteres, donde se indicará el título de la nota.
- contenido es una cadena de caracteres, donde se indicará contenido de la nota.
- color es una cadena de caracteres, que contendrá el color de fondo de la nota. En el formulario se han establecido los colores disponibles.
- fecha contendrá la fecha en que fue creada la nota.

Al añadir una nota, será añadida a una lista de notas. El componente hijo recibe las notas de esta lista.
