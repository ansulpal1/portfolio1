import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { certifications } from '../data'
import DocumentViewer from '../components/DocumentViewer.jsx'

const AllCertificationsPage = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <div className="relative min-h-screen bg-[#080914] text-white pt-32 pb-12 overflow-x-hidden">
      
      {/* Background Glowing Orbs */}
      <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation & Header */}
        <div className="mb-14 animate-fadeIn">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-gray-300 hover:text-white transition-all mb-8 group shadow-lg backdrop-blur-sm"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> 
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)] animate-pulse" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">
              All Certifications
            </h1>
          </div>
          <p className="mt-4 text-gray-400 max-w-2xl text-lg">
            A comprehensive overview of my technical certifications, professional training, and continuous learning milestones.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="group relative bg-[#0c1021]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fadeIn"
              style={{
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${cert.iconBorder}80`
                e.currentTarget.style.boxShadow = `0 12px 40px ${cert.iconBorder}25, 0 0 0 1px ${cert.iconBorder}20`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
              }}
              onClick={() => setSelectedCert(cert)}
            >
              {/* Top Row: Icon & Year */}
              <div className="flex items-start justify-between mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ 
                    background: cert.iconBg,
                    border: `1px solid ${cert.iconBorder}60`,
                    boxShadow: `0 0 20px ${cert.iconBg}`
                  }}
                  dangerouslySetInnerHTML={{ __html: cert.icon }}
                />
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-300 shadow-sm backdrop-blur-sm">
                  {cert.year}
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-col flex-1 mb-8">
                <h3 className="text-xl font-bold text-gray-100 mb-2 leading-snug group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <span className="text-sm font-medium text-gray-400">
                  {cert.issuer}
                </span>
              </div>
              
              {/* View Document Button */}
              <button 
                className="w-full py-3 rounded-xl border transition-all duration-300 font-bold text-sm relative overflow-hidden group/btn flex items-center justify-center gap-2" 
                style={{ borderColor: `${cert.iconBorder}50`, color: '#e5e7eb' }}
              >
                <span 
                  className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" 
                  style={{ backgroundColor: cert.iconBorder }}
                />
                <span className="relative flex items-center gap-2">
                  View Certificate
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

      </div>

      <DocumentViewer selectedCert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  )
}

export default AllCertificationsPage
