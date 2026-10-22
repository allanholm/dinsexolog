export default function PriceBanner() {
    return (
        <section className="price-banner">
            <h1>Mine priser</h1>
            <p>Her skabes et roligt og nærværende rum for den personlige rejse, hvor jeg støtter både enkeltpersoner og par i at udforske deres individuelle behov.</p>
            <div className="price-banner__prices">
                <div className="price-banner__price">
                    <h4>Individuel session 60 min.</h4>
                    <p>kr. 800</p>
                </div>
                <div className="price-banner__price">
                    <h4>Par session 60 min.</h4>
                    <p>kr. 1.500</p>
                </div>
            </div>
        </section>
    );
}