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
                <p>Accepts a function that contains <strong>imperative</strong>, possibly <mark>effectful code</mark>.</p>
                <p>El <strong>código efectivo</strong> es aquel que tiene efectos secundarios o que produce cambios en el entorno en el que se ejecuta.<br /> Estos efectos secundarios pueden ser cambios en el estado del sistema, como la escritura en un archivo o la modificación de una base de datos, o pueden ser efectos externos, como enviar una solicitud a un servidor o imprimir algo en la pantalla.</p>
                <p>En contraste, el <strong>código puro</strong> (<mark>pure code</mark>) es aquel que no tiene efectos secundarios y siempre produce el mismo resultado dado un conjunto de entradas. Esto hace que el <strong>código puro</strong> sea más fácil de probar y depurar, ya que los resultados siempre son predecibles. Sin embargo, el <strong>código puro</strong> puede ser menos útil en la práctica, ya que a menudo necesitamos que nuestro código tenga algún tipo de efecto para ser útil.</p>
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
