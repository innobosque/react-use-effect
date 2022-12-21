import { useState } from 'react';
import { MouseListener } from './components/MouseListener';
export const UseEffectApp = () => {
    const [form, setForm] = useState({
        value: ''
    });
    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    });
    const { value } = form;
    return (
        <>
            <header>
                <h1>useEffect</h1>
                <p>Accepts a function that contains imperative, possibly effectful code.</p>
                <p>Acepta una función que contiene código imperativo, posiblemente código efectivo.</p>
            </header>
            <p>
            Las mutaciones, suscripciones, temporizadores, registro y otros efectos secundarios no están permitidos dentro del cuerpo principal de un componente de función (denominado como <strong>render phase</strong> de React). Si lo hace, dará lugar a errores confusos e inconsistencias en la interfaz de usuario.
            </p>
            <section>
                <h2>Desplazamiento del ratón</h2>
                <p>Si escribes cualquier cosa en la caja de texto las coordenas del puntero del mouse se activarán. Mientras no hay texto en la caja dejará de funcionar.</p>
                <pre>
                    x: {coords.x}
                    <br />
                    y: {coords.y}
                </pre>
            </section>
            <input
             onChange={e=>setForm({value: e.target.value})}
             type="text" />

             {
                Boolean(value.length) && <MouseListener setCoords={setCoords}  {...coords} />
            }
            
        </>
    )
}
