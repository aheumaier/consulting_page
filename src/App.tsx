import { ArrowRight, Building2, Cloud, GitBranch, Scale } from 'lucide-react';
import React from 'react';

const services = [
  {
    title: "Technologie Due Diligence",
    description: "Fundierte technologische Bewertung und Risikoanalyse für M&A-Prozesse.",
    icon: Building2,
    features: [
      "Umfassende Technologiebewertung",
      "Detaillierte Risiko- und Chancenanalyse",
      "Strategische Integrationsplanung",
      "Datengestützte Entscheidungsgrundlagen"
    ]
  },
  {
    title: "Cloud Transformation",
    description: "Strategische Begleitung der digitalen Transformation mit Enterprise-Expertise.",
    icon: Cloud,
    features: [
      "Ganzheitliche Cloud-Strategie",
      "Effiziente Migrationsplanung",
      "Professionelles Multi-Cloud-Management",
      "Nachhaltige Kostenoptimierung"
    ]
  },
  {
    title: "Fractional CTO & IT-Leadership",
    description: "Erfahrene Führungskompetenz auf Zeit für Ihre strategischen Technologieprojekte.",
    icon: GitBranch,
    features: [
      "Strategische IT-Führung auf Teilzeitbasis",
      "Technologie-Roadmap-Entwicklung",
      "Mentoring technischer Führungskräfte",
      "Digitale Transformationsbegleitung"
    ]
  },
  {
    title: "Strategische Digitalisierungsberatung",
    description: "Fundierte Entscheidungsgrundlagen für Ihre IT-Investitionen.",
    icon: Scale,
    features: [
      "Digitale Produkt- und Servicestrategie",
      "Technologieauswahl und -bewertung",
      "Strukturiertes Stakeholder-Management",
      "Nachhaltige Wertschöpfung"
    ]
  }
];

function App() {
  const handleScheduleClick = () => {
    window.open('https://calendly.com/heumaierventures-info/15-minute-intro', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">HeumaierConsulting</h1>
            <button 
              onClick={handleScheduleClick}
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
            >
              Beratungsgespräch vereinbaren
            </button>
          </div>
        </nav>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Strategische IT-Beratung
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Mit fundierter Expertise unterstütze ich Unternehmen bei der erfolgreichen Gestaltung ihrer digitalen Transformation.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-emerald-600" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-600 mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-3xl font-bold text-white">Professionelle IT-Beratung für Ihren Erfolg</h2>
            <p className="mt-4 text-xl text-emerald-100">Lassen Sie uns gemeinsam Ihre strategischen Ziele erreichen.</p>
            <button 
              onClick={handleScheduleClick}
              className="mt-8 bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-emerald-50 transition"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">HeumaierConsulting</h3>
              <p className="mt-4 text-gray-400">
                Strategische IT-Beratung für digitale Transformation
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold text-gray-300">Kontakt</h4>
              <p className="mt-2 text-gray-400">info@heumaier-consulting.de</p>
              <p className="text-gray-400">+49 (040) 123-4567</p>
              <p className="text-gray-400 mt-2">Eppendorfer Weg<br />202053 Hamburg</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} HeumaierConsulting. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;