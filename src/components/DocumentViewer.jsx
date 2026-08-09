import React from 'react'

const DocumentViewer = ({ selectedCert, onClose }) => {
  if (!selectedCert) return null

  // Handle clicking outside to close
  const handleBackdropClick = () => {
    onClose()
  }

  // Prevent clicks inside modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-5xl bg-[#0c1021] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-full"
        onClick={handleModalClick}
      >
        {/* Modal Toolbar / Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#0a0c18]">
          <div className="flex items-center gap-4 truncate pr-4">
            <div 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/10"
              style={{ background: selectedCert.iconBg, borderColor: `${selectedCert.iconBorder}50` }}
              dangerouslySetInnerHTML={{ __html: selectedCert.icon }}
            />
            <div className="truncate">
              <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight truncate">
                {selectedCert.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1 font-medium truncate">
                {selectedCert.issuer} • {selectedCert.year}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Download Button */}
            {selectedCert.documentUrl && (
              <a 
                href={selectedCert.documentUrl} 
                download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-blue-300 border border-blue-500/30 rounded-lg sm:rounded-xl transition-all font-medium text-xs sm:text-sm group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden sm:inline">Download</span>
              </a>
            )}

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="p-2 sm:p-2.5 bg-white/5 hover:bg-red-500/20 border border-white/5 hover:border-red-500/30 text-gray-400 hover:text-red-400 rounded-lg sm:rounded-xl transition-all group"
              title="Close Viewer"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Document Viewer Canvas */}
        <div className="flex-1 bg-black/60 p-4 sm:p-8 overflow-y-auto flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
          {selectedCert.documentUrl ? (
            <img 
              src={selectedCert.documentUrl} 
              alt={`${selectedCert.title} Certificate`}
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10"
            />
          ) : (
            <div className="text-gray-500 text-center flex flex-col items-center gap-4 bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/5">
              <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-lg font-bold text-gray-300">Document Unavailable</p>
                <p className="text-sm mt-1">The certificate file has not been uploaded yet.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DocumentViewer
