import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { personalInfo } from '../data'

// SVG Social Icons matching exact vector designs
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21.5c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
)

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const CubeConnectIcon = () => (
  <svg className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)

const ContactSection = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [sentSuccess, setSentSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setErrorMessage('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      subject: formData.subject,
      message: formData.message,
    }

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, {
          publicKey: publicKey,
        })
        setSentSuccess(true)
        setFormData({ from_name: '', from_email: '', subject: '', message: '' })
        setTimeout(() => setSentSuccess(false), 5000)
      } else {
        throw new Error(
          'EmailJS credentials missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.'
        )
      }
    } catch (error) {
      console.error('EmailJS Submit Error:', error)
      setErrorMessage(
        error?.text || error?.message || 'Failed to send email. Please check your credentials and try again.'
      )
    } finally {
      setSending(false)
    }
  }

  const contactDetails = [
    {
      icon: <Mail className="w-4 h-4 text-blue-400" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="w-4 h-4 text-purple-400" />,
      label: 'Phone',
      value: personalInfo.phone || '+91 98765 43210',
      href: `tel:${(personalInfo.phone || '+91 98765 43210').replace(/\s/g, '')}`,
    },
    {
      icon: <MapPin className="w-4 h-4 text-rose-400" />,
      label: 'Location',
      value: personalInfo.location,
    },
    {
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      label: 'Availability',
      value: personalInfo.availableForWork ? 'Open to Work' : 'Not Available',
      badge: personalInfo.availableForWork,
    },
  ]

  const socialLinks = [
    {
      icon: <GithubIcon className="w-5 h-5" />,
      href: personalInfo.links.github,
      label: 'GitHub',
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: personalInfo.links.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      href: personalInfo.links.twitter,
      label: 'Twitter',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
    },
  ]

  return (
    <section id="contact" className="relative py-20 bg-[#080914] overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-3 px-4">
            Let's Build Something Great Together
          </h2>
        </div>

        {/* Main Glass Card Container */}
        <div className="bg-[#090b17]/95 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden backdrop-blur-xl">
          
          {/* Top Gradient Hairline Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 via-purple-500/60 to-transparent" />

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-stretch">
            
            {/* LEFT COLUMN — Contact Form */}
            <div className="xl:col-span-5 flex flex-col justify-between pr-0 xl:pr-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                  Let's Work Together
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center justify-between gap-3 animate-fadeIn">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer"
                      >
                        Try Again
                      </button>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111326]/90 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#151730] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        value={formData.from_email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#111326]/90 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#151730] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#111326]/90 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#151730] transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-[#111326]/90 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#151730] transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full group flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-500 hover:from-blue-500 hover:via-indigo-500 hover:to-fuchsia-400 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer disabled:opacity-60"
                  >
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : sentSuccess ? (
                      <span className="flex items-center gap-2 text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Message Sent Successfully!
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="hidden xl:block w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent self-stretch" />

            {/* RIGHT COLUMN — Details + Globe + Socials */}
            <div className="xl:col-span-6 flex flex-col lg:flex-row justify-between items-start relative pl-0 xl:pl-2">
              
              {/* Middle Section: Get In Touch */}
              <div className="flex flex-col justify-between w-full lg:w-auto h-full z-10 lg:min-w-[220px] mb-6 lg:mb-0">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
                    Get In Touch
                  </h3>

                  <div className="space-y-4">
                    {contactDetails.map((detail, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3.5 group p-2 -mx-2 rounded-xl hover:bg-white/[0.03] transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#181b36] to-[#0f1126] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/40 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition-all duration-300">
                          {detail.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white leading-tight flex items-center gap-1.5">
                            {detail.label}
                            {detail.badge && (
                              <span className="relative flex h-2 w-2 ml-1">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                              </span>
                            )}
                          </p>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-200"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-xs text-gray-400">{detail.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Let's Connect Button */}
                <div className="mt-8">
                  <a
                    href={personalInfo.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 bg-[#121427] hover:bg-[#181b38] hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] text-xs font-medium text-white transition-all duration-300"
                  >
                    <CubeConnectIcon />
                    <span>Let's Connect</span>
                  </a>
                </div>
              </div>

              {/* Far Right Section: 3D Globe + Social Icons */}
              <div className="w-full lg:flex-1 h-full flex flex-col justify-between items-center lg:items-end relative">
                
                {/* 3D Globe Container — completely borderless, seamlessly blending into background */}
                <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[250px] lg:h-[250px] my-2 lg:my-0 flex items-center justify-center">
                  
                  {/* Subtle outer glowing dashed orbit ring */}
                  <div className="absolute inset-2 rounded-full border border-cyan-500/20 border-dashed animate-[spin_30s_linear_infinite] pointer-events-none" />
                  
                  {/* Ambient soft blue back-glow */}
                  <div className="absolute w-[170px] h-[170px] rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />

                  {/* Globe Image with smooth radial gradient mask for 100% seamless background blend */}
                  <img
                    src="/contact_globe.png"
                    alt="Globe"
                    className="w-[240px] h-[240px] object-contain pointer-events-none select-none mix-blend-screen opacity-95 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_72%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_40%,transparent_72%)] transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Social Media Buttons (Squircle shape with hover lift & glow) */}
                <div className="flex items-center gap-3 mt-6 lg:mt-0">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      className="w-11 h-11 rounded-2xl bg-[#111326] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-400/50 hover:bg-[#171a38] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.3)] transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
