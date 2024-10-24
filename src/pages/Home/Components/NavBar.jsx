
const NavBar = () => {
    return (
        <nav className="bg-white/75 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-xl font-bold text-black">HealthTrack</a>
                        <div className="hidden sm:flex space-x-8 ml-10">
                            <a href="#inicio" className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium">Inicio</a>
                            <a href="#beneficios" className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium">Beneficios</a>
                            <a href="#preguntas-frecuentes" className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium">Preguntas frecuentes</a>
                            <a href="#contacto" className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium">Contacto</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#registrarse" className="text-gray-500 hover:text-black px-3 py-2 text-sm font-medium">Registrarse</a>
                        <a href="#iniciar-sesion" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium">Iniciar sesión</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
