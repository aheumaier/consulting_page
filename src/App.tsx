import { ArrowRight, Building2, Cloud, GitBranch, Scale, TrendingUp, AlertCircle, Users } from 'lucide-react';
import React, { useEffect } from 'react';
import CookieConsent from './components/CookieConsent';
import { trackCalendlyClick, trackServiceView, trackContactClick, trackScrollDepth, trackPageView } from './utils/analytics';

const services = [
  {
    title: "Interim CTO Services",
    description: "Erfahrene Führung für kritische Transformationsphasen. Fix what's broken, scale what works.",
    icon: GitBranch,
    features: [
      "Rapid Assessment in 2-4 Wochen",
      "Turnaround Execution für kritische Initiativen",
      "Aufbau hochperformanter Engineering-Kulturen",
      "PE-Value-Creation & Exit-Vorbereitung"
    ]
  },
  {
    title: "Technical Due Diligence",
    description: "Fundierte Technologiebewertung für PE/M&A-Transaktionen mit Fokus auf Risiken und Wertschöpfung.",
    icon: Building2,
    features: [
      "Technologie- und Architektur-Assessment",
      "Tech-Debt-Analyse und Sanierungsplan",
      "Team- und Kulturbewertung",
      "Integration Roadmap & Synergien"
    ]
  },
  {
    title: "Post-Merger Integration",
    description: "Schnelle Technologie-Integration nach M&A.",
    icon: Users,
    features: [
      "Systemkonsolidierung und Migration",
      "Team-Integration und Kulturangleichung",
      "Platform Harmonisierung",
      "Operational Excellence & Synergien"
    ]
  },
  {
    title: "Turnaround Management",
    description: "Stabilisierung kritischer Situationen und nachhaltige Transformation.",
    icon: AlertCircle,
    features: [
      "Stabilisierung kritischer Projekte",
      "Restrukturierung von Engineering-Organisationen",
      "Legacy-Modernisierung unter Betrieb",
      "€20M+ nachgewiesene Einsparungen"
    ]
  }
];

function App() {
  // Track page view on component mount
  useEffect(() => {
    trackPageView();
    
    // Track scroll depth
    let scrolled25 = false;
    let scrolled50 = false;
    let scrolled75 = false;
    let scrolled100 = false;
    
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
      
      if (!scrolled25 && scrollPercentage >= 25) {
        trackScrollDepth(25);
        scrolled25 = true;
      }
      if (!scrolled50 && scrollPercentage >= 50) {
        trackScrollDepth(50);
        scrolled50 = true;
      }
      if (!scrolled75 && scrollPercentage >= 75) {
        trackScrollDepth(75);
        scrolled75 = true;
      }
      if (!scrolled100 && scrollPercentage >= 95) {
        trackScrollDepth(100);
        scrolled100 = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScheduleClick = () => {
    trackCalendlyClick(); // Track the conversion event
    window.open('https://calendly.com/heumaier-interim/15-minute-intro', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Heumaier Interim</h1>
            <button 
              onClick={handleScheduleClick}
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
            >
              Transformation besprechen
            </button>
          </div>
        </nav>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">

            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Interim Management
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Technology Leadership für kritische Transformationsphasen. <br/>
            <span className="text-emerald-600 font-medium">Fix what's broken, scale what works.</span> <br/>
            Spezialisiert auf PE-backed SaaS, Healthcare Tech und regulierte Industrien.
            </p>
            
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
                onMouseEnter={() => trackServiceView(service.title)}
              >
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
            <h2 className="text-3xl font-bold text-white">Zeit für Ihre Transformation?</h2>
            <p className="mt-4 text-xl text-emerald-100">
              Ob Due Diligence, Post-Merger Integration oder Turnaround – 
              lassen Sie uns über Ihre Herausforderung sprechen.
            </p>
            <button 
              onClick={handleScheduleClick}
              className="mt-8 bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-emerald-50 transition"
            >
              Erstgespräch vereinbaren
            </button>
          </div>
        </div>

{/* Credentials Section */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="text-center">
    <h3 className="text-xl font-medium text-gray-900 mb-12">Erfahrung die zählt</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h4 className="text-emerald-600 font-medium mb-3">PE Experience</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>VP Engineering @ Myneva</p>
          <p>Technical Due Dilligence & Post-Merger Integrationen</p>
          <p>Field CTO @ Nordcloud</p>
        </div>
      </div>
      <div>
        <h4 className="text-emerald-600 font-medium mb-3">Enterprise Scale</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Engineering Lead @ Microsoft</p>
          <p>100+ Engineers</p>
        </div>
      </div>
      <div>
        <h4 className="text-emerald-600 font-medium mb-3">Compliance Expertise</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <p>GDPR, NIS2, ISO27001</p>
          <p>Healthcare (FHIR/HL7)</p>
        </div>
      </div>
    </div>
  </div>
</div>


      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold">Heumaier Ventures</h3>
              <p className="mt-4 text-gray-400">
                Interim CTO & Turnaround Executive für Technology Companies
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold text-gray-300">Kontakt</h4>
              <a 
                href="mailto:info@heumaier-interim.de" 
                className="mt-2 text-gray-400 hover:text-gray-300 block"
                onClick={() => trackContactClick('email')}
              >
                info@heumaier-interim.de
              </a>
              <a 
                href="tel:+491773208516" 
                className="text-gray-400 hover:text-gray-300 block"
                onClick={() => trackContactClick('phone')}
              >
                +49 (177) 320 8516
              </a>
              <p className="text-gray-400 mt-2">Hamburg, Deutschland</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Heumaier Ventures UG. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
      
      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;
