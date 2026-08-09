import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { certifications } from '../data'
import DocumentViewer from '../components/DocumentViewer.jsx'

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  
  // Only show top 4 featured certs
  const featuredCerts = certifications.filter(c => c.featured).slice(0, 4)

  return (
    <section id="certifications" className="relative py-20 bg-[#080914] overflow-hidden"
     style={{
        backgroundImage: "url('/cer.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <Link 
            to="/certifications" 
            className="self-start sm:self-auto text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 group"
          >
            View All Certifications
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredCerts.map((cert) => (
            <div 
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer group bg-[#0a0c18] border border-white/5 hover:border-white/10 rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ 
                  background: cert.iconBg,
                  border: `1px solid ${cert.iconBorder}50` 
                }}
                dangerouslySetInnerHTML={{ __html: cert.icon }}
              />

              {/* Details */}
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors leading-snug line-clamp-2">
                  {cert.title}
                </h3>
                <span className="text-xs text-gray-400 mt-1">
                  {cert.issuer}
                </span>
                <span className="text-xs text-gray-500 mt-0.5">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <DocumentViewer selectedCert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  )
}

export default CertificationsSection
