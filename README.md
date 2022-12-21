# Hook useEffect

El código de JavaScript es imperativo. Con lo cual se ejecuta instrucción a instrucción.

Sin embargo las mutaciones, suscripciones, temporizadores, registro y otros efectos secundarios no están permitidos dentro del cuerpo principal de un componente de función (denominado como <strong>render phase</strong> de React). 

Si lo hace, dará lugar a errores confusos e inconsistencias en la interfaz de usuario.

__useEffect__ acepta una función que contiene código imperativo, posiblemente código efectivo.

En el ejemplo que tenemos hemos lanzado un addEventListener cuando se desplaza el ratón. Aunque metamos la condicional [x] en useEffect mientras no lancemos el método removeEventListener este seguirá siguiéndose ejecutando.
Comenta el código de limpieza para ver lo que ocurren al desplazar el ratón. 

```js
const effectFuncion = () => {
        //Listener Añadido que queda activo mientras no lo eliminemos
        window.addEventListener("mousemove",mouseMove);
        //Listener finalizado. Clean Effect
        //Función de limpieza. Si esta función aunque deje de existir el componente el evento seguirá produciéndose.
        return () => {
            window.removeEventListener("mousemove",mouseMove);
        }
    }
```