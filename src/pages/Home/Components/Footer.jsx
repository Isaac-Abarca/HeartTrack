

const Footer = () => {
    return (
        <footer className="bg-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <p className="text-gray-600 text-base"> {/* Aumentado a text-base para un tamaño más grande */}
                    © 2024 HealthTrack. Todos los derechos reservados.
                </p>
                <div className="flex space-x-6"> {/* Aumentado el espacio entre los enlaces */}
                    <a href="#terms" className="text-gray-600 hover:text-gray-900 text-base"> {/* Aumentado a text-base */}
                        Términos de servicio
                    </a>
                    <a href="#privacy" className="text-gray-600 hover:text-gray-900 text-base"> {/* Aumentado a text-base */}
                        Privacidad
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer
