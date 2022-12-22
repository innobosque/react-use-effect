import { useState } from 'react';
import { MouseListener, UseEffectExplication } from './components';
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
        <UseEffectExplication>
            <h1>mousemove</h1>
            <ul>
                <li>Si escribes cualquier cosa en la caja de texto las coordenas del puntero del mouse se activarán.</li>
                <li>En caso de dejar la caja de texto sin ningún caracter se desactivarán.</li>
            </ul>
            <pre>
                x: {coords.x}
                <br />
                y: {coords.y}
            </pre>

            <input
                onChange={e => setForm({ value: e.target.value })}
                type="text" />
            {
                Boolean(value.length) && <MouseListener setCoords={setCoords}  {...coords} />
            }
        </UseEffectExplication>
    )
}