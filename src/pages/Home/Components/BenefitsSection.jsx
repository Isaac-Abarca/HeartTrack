import { FaHeartbeat, FaChartLine, FaLaptopMedical, FaLock, FaMobileAlt, FaHandHoldingHeart } from "react-icons/fa";

const benefits = [
    {
        title: "Controla tu presión arterial de manera sencilla",
        description:
            "Realiza un seguimiento diario de tus niveles de presión arterial y mantente informado sobre cualquier cambio significativo en tu salud.",
        icon: <FaHeartbeat className="h-10 w-10 text-gray-600" />
    },
    {
        title: "Monitoreo continuo de tu ritmo cardíaco",
        description:
            "Registra tus pulsaciones para identificar patrones que puedan ayudarte a mejorar tu bienestar general.",
        icon: <FaLaptopMedical className="h-10 w-10 text-gray-600" />
    },
    {
        title: "Visualiza tu progreso",
        description:
            "Con gráficos claros y fáciles de entender, observa cómo tus datos de salud evolucionan a lo largo del tiempo, ya sea a diario, semanal o mensualmente.",
        icon: <FaChartLine className="h-10 w-10 text-gray-600" />
    },
    {
        title: "Prevención proactiva",
        description:
            "Detecta anomalías antes de que se conviertan en problemas serios, lo que te permite tomar decisiones informadas para mejorar tu salud.",
        icon: <FaHandHoldingHeart className="h-10 w-10 text-gray-600" />
    },
    {
        title: "Facilidad de uso",
        description:
            "Nuestra plataforma es intuitiva y diseñada para cualquier usuario, sin importar su nivel de experiencia tecnológica.",
        icon: <FaMobileAlt className="h-10 w-10 text-gray-600" />
    },
    {
        title: "Acceso desde cualquier dispositivo",
        description:
            "Consulta tus datos de salud desde tu móvil, tablet o computadora, manteniendo tu información siempre a mano.",
        icon: <FaLock className="h-10 w-10 text-gray-600" />
    }
];

function BenefitsSection() {
    return (
        <section className="bg-gray-50 min-h-screen py-24 flex items-center"> {/* min-h-screen asegura que ocupe toda la pantalla */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-black mb-10">
                    Beneficios de Monitorear tu Salud Diariamente
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                <div className="bg-gray-200 p-3 rounded-full mr-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-black">
                                    {benefit.title}
                                </h3>
                            </div>
                            <p className="text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BenefitsSection;
