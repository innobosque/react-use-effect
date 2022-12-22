export const UseEffectExplication = ({ children }) => {
    return (
        <>
            <section>
                <header>
                    <h1>useEffect</h1>
                    <blockquote>Accepts a function that contains <strong>imperative</strong>, possibly <mark>effectful code</mark>.</blockquote>
                    <p>El <strong>código efectivo</strong> es aquel que tiene efectos secundarios o que produce cambios en el entorno en el que se ejecuta.<br /> Estos efectos secundarios pueden ser cambios en el estado del sistema, como la escritura en un archivo o la modificación de una base de datos, o pueden ser efectos externos, como enviar una solicitud a un servidor o imprimir algo en la pantalla.</p>
                    <p>En contraste, el <strong>código puro</strong> (<mark>pure code</mark>) es aquel que no tiene efectos secundarios y siempre produce el mismo resultado dado un conjunto de entradas. Esto hace que el <strong>código puro</strong> sea más fácil de probar y depurar, ya que los resultados siempre son predecibles. Sin embargo, el <strong>código puro</strong> puede ser menos útil en la práctica, ya que a menudo necesitamos que nuestro código tenga algún tipo de efecto para ser útil.</p>
                </header>
                <blockquote>
                    Las mutaciones, suscripciones, temporizadores, registro y otros efectos secundarios no están permitidos dentro del cuerpo principal de un componente de función (denominado como <strong>render phase</strong> de React). Si lo hace, dará lugar a errores confusos e inconsistencias en la interfaz de usuario.
                </blockquote>
            </section>
            <section>
                {children}
                <div role="alert">
                    La utilización del <strong>hook useEffect</strong> se encuentra en <em>/src/components/MouseListener.jsx</em>
                </div>
            </section>
        </>
    )
}
