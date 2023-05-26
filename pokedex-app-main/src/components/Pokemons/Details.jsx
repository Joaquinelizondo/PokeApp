const DetailsPK = () => {
    return (

        <div className="details__container">

            <div className="details__header">
                <div>flecha</div>
                <h1>Nombre</h1>
                <span>#0XXX</span>
            </div>

            <div className="details__picture">
                <div>flecha izq</div>
                <div className="details__img">
                    <img src="#" alt="Imagen del Pokemon" />
                </div>
                <div>flecha Der</div>
            </div>

            <div className="details__card">
                <span>fire</span>{/* imagen del tipo de pk */}
                <h2 className="details__pk-h2">About</h2>
                <div className="details__atributes">
                    <div className="details__atr-top">
                        <img src="#" alt="Weight" />
                        <span>8..5 kg</span>
                    </div>
                    <div className="details__atr-bottom">
                        <span></span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DetailsPK;