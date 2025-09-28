import React from 'react';
import { Activity, Cpu, HardDrive, Wifi, Shield, Users, Award, MapPin } from 'lucide-react';

export default function LivePerformanceSection() {
  const businessMetrics = [
    {
      icon: <Users className="w-5 h-5" />,
      label: "Zufriedene Kunden",
      value: "50+",
      color: "bg-green-500",
      width: "w-3/4"
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "Zertifizierungen",
      value: "5+",
      color: "bg-purple-500",
      width: "w-1/2"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Rechenzentren",
      value: "3",
      color: "bg-purple-500",
      width: "w-1/2"
    }
  ];

  return (
    <>
      {/* ABSCHNITT: Live Performance - START */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mobile-grid-1">
            {/* Performance Dashboard */}
            <div className="relative">
              <div className="bg-white shadow-lg border border-gray-200 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center mb-6 md:mb-8">
                  <div className="w-8 h-8 bg-white flex items-center justify-center mr-3">
                    <Activity className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Unsere Stärken</h3>
                </div>
                
                {/* Metrics */}
                <div className="space-y-4 md:space-y-6">
                  {businessMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-gray-600">
                            {metric.icon}
                          </div>
                          <span className="text-sm md:text-base text-gray-700 font-medium mobile-text-sm">{metric.label}</span>
                        </div>
                        <span className="text-sm md:text-base text-gray-900 font-bold">{metric.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2">
                        <div className={`h-2 ${metric.color} ${metric.width}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-200 to-blue-200 opacity-60 mobile-hide-decorative"></div>
            </div>
            
            {/* Content */}
            <div className="space-y-4 md:space-y-6 mobile-space-y-4 mt-8 lg:mt-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight section-title" id="cloud-performance">
                Zuverlässige Cloud-Performance, auf die Sie sich
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">verlassen können</span>
              </h2>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mobile-text-base">
                Nutzen Sie IT-Infrastruktur aus sicheren Rechenzentren in Deutschland und 
                greifen Sie auf Cloud-Server nach Bedarf zu – genau dann, wenn Sie 
                zusätzliche Rechenleistung oder Speicherplatz benötigen, und nur für die 
                Dauer, die wirklich erforderlich ist. Reagieren Sie flexibel auf Veränderungen 
                und behalten Sie dank nutzungsbasierter Abrechnung stets die volle 
                Kostenkontrolle.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ABSCHNITT: Live Performance - END */}
    </>
  );
}