import { useEffect } from "react";

export const MouseListener = ({x,y,setCoords}) => {
    

    const mouseMove = e => {
        //console.log('Listener activo');
        const { x, y } = e;
        setCoords({ x, y });
    }

    const effectFuncion = () => {
        //Listener Añadido que queda activo mientras no lo eliminemos
        window.addEventListener("mousemove",mouseMove);
        //Listener finalizado. Clean Effect
        //Función de limpieza. Si esta función aunque deje de existir el componente el evento seguirá produciéndose.
        return () => {
            window.removeEventListener("mousemove",mouseMove);
        }
    }

    // effectFuncion();
    useEffect(effectFuncion,[x])

    
    return (
        <>
            <h1>Coordenadas</h1>
            <ul>
                <li>x: { x }</li>
                <li>y: { y }</li>
            </ul>
        </>

    )
}
