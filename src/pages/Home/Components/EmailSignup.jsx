

const EmailSignup = () => {
    return (
        <section className="bg-white min-h-screen py-16 flex items-center">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-black mb-4">
                    Comienza tu viaje hacia una mejor salud
                </h2>
                <p className="text-gray-500 text-lg mb-8">
                    Regístrate hoy y da el primer paso para tomar el control de tu salud cardiovascular.
                </p>
                <form className="flex justify-center items-center space-x-4">
                    <input
                        type="email"
                        placeholder="Ingresa tu email"
                        className="border border-gray-300 p-4 rounded-lg w-full max-w-md"
                    />
                    <button className="bg-black text-white px-6 py-4 rounded-lg font-semibold">
                        Registrarse
                    </button>
                </form>
                <p className="text-gray-400 text-sm mt-4">
                    Al registrarte, aceptas nuestros términos y condiciones.
                </p>
            </div>
        </section>
    )
}

export default EmailSignup
