

const Hero = () => {
    return (
        <section className="bg-white min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-black mb-4">Monitorea tu salud fácilmente</h1>
                <p className="text-gray-500 text-lg mb-8">
                    Lleva un control diario de tu presión arterial y ritmo cardíaco para mejorar tu calidad de vida.
                </p>
                <a href="#comenzar" className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium">
                    Comenzar a llevar el seguimiento
                </a>
            </div>
        </section>
    )
}

export default Hero
