'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Phone, Mail, MapPin, Clock, CheckCircle, Menu, X, Star, Heart, Sparkles, Award, Shield } from 'lucide-react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactHighlighted, setContactHighlighted] = useState(false)
  const [aboutHighlighted, setAboutHighlighted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    closeMobileMenu()
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    setContactHighlighted(true)
    setTimeout(() => setContactHighlighted(false), 3000)
  }

  const scrollToMessageForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    setContactHighlighted(true)
    setTimeout(() => setContactHighlighted(false), 3000)
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    setAboutHighlighted(true)
    setTimeout(() => setAboutHighlighted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.message.trim()) newErrors.message = 'Please tell us what brings you here'
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required'
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
      alert('Thank you for your message! Dr. Blake will contact you soon.')
    }
  }

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission to your insurance company."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM."
    },
    {
      question: "What is your cancellation policy?",
      answer: "A 24-hour notice is required for all session cancellations to avoid being charged the full session fee."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual sessions are 50 minutes, and couples sessions are 60 minutes."
    },
    {
      question: "What can I expect in my first session?",
      answer: "Your first session will be a comprehensive assessment where we'll discuss your concerns, goals, and develop a personalized treatment plan."
    }
  ]

  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn evidence-based techniques to manage anxiety, reduce stress, and develop healthy coping mechanisms. I'll help you identify triggers and build resilience for a calmer, more balanced life.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
      icon: "🧘‍♀️",
      color: "from-blue-500 to-cyan-500",
      textColor: "text-gradient-primary"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your relationships through improved communication, conflict resolution, and emotional intimacy. Whether you're dating, married, or navigating family dynamics, I provide a safe space for growth.",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop&crop=center",
      icon: "💕",
      color: "from-pink-500 to-rose-500",
      textColor: "text-gradient-secondary"
    },
    {
      title: "Trauma Recovery",
      description: "Heal from past trauma with compassionate, trauma-informed therapy. Using proven techniques, I'll help you process difficult experiences and move toward post-traumatic growth and resilience.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      icon: "🦋",
      color: "from-purple-500 to-indigo-500",
      textColor: "text-gradient-accent"
    }
  ]

  const stats = [
    { number: "8+", label: "Years Experience", icon: Award, color: "text-gradient-primary" },
    { number: "500+", label: "Sessions Completed", icon: Heart, color: "text-gradient-secondary" },
    { number: "100%", label: "Confidential", icon: Shield, color: "text-gradient-accent" },
    { number: "4.9", label: "Client Rating", icon: Star, color: "text-gradient-warm" }
  ]

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50 border-b border-white/20">
        <div className="container-custom px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-display font-bold text-gradient-primary">Dr. Serena Blake</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gradient-primary transition-all duration-300 hover:scale-105 font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-gradient-secondary transition-all duration-300 hover:scale-105 font-medium">Services</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-gradient-accent transition-all duration-300 hover:scale-105 font-medium">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gradient-warm transition-all duration-300 hover:scale-105 font-medium">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20 animate-slide-down">
              <div className="flex flex-col space-y-3 pt-4">
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-gradient-primary transition-all duration-300 py-2 hover:bg-white/10 rounded-lg px-3 font-medium">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-gradient-secondary transition-all duration-300 py-2 hover:bg-white/10 rounded-lg px-3 font-medium">Services</button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-gradient-accent transition-all duration-300 py-2 hover:bg-white/10 rounded-lg px-3 font-medium">FAQ</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-gradient-warm transition-all duration-300 py-2 hover:bg-white/10 rounded-lg px-3 font-medium">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20 floating-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 floating-animation" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom text-center relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-bounce-in">
              <div className="relative inline-block">
                <img 
                  src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148020525.jpg?w=200&h=200&fit=crop&crop=face" 
                  alt="Dr. Serena Blake" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover shadow-2xl ring-4 ring-white/50 hover:ring-blue-200 transition-all duration-300 hover:scale-105"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in">
              <span className="text-gray-900">Find Your Path to </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">Healing</span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up font-medium">
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent font-semibold">Licensed clinical psychologist</span> helping you overcome anxiety, strengthen relationships, and heal from trauma in a <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold">safe, supportive environment</span>.
            </h2>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`text-2xl md:text-3xl font-display font-bold mb-1 ${stat.color}`}>
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">{stat.number}</span>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto animate-fade-in">
              <button 
                onClick={scrollToMessageForm}
                className="btn-primary btn-enhanced text-lg px-10 py-5 font-semibold"
              >
                Book a Free Consultation
              </button>
              <button 
                onClick={scrollToAbout}
                className="btn-secondary btn-enhanced text-lg px-10 py-5 font-semibold"
              >
                Learn More About Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <h2 className={`text-4xl md:text-5xl font-display font-bold mb-8 transition-all duration-500 ${aboutHighlighted ? 'text-gradient-primary scale-105' : 'text-gray-900'}`}>
                About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Dr. Serena Blake</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent font-semibold">Dr. Serena Blake</span> is a <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">licensed clinical psychologist (PsyD)</span> based in Los Angeles, CA, with <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold">eight years of experience</span> and over <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent font-semibold">500 client sessions</span>. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Whether you meet in her <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">Maplewood Drive office</span> or connect virtually via <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent font-semibold">Zoom</span>, Dr. Blake is committed to creating a <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold">safe, supportive space</span> for you to thrive.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl hover-lift">
                  <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 font-medium"><span className="text-gradient-primary">8+ Years</span> Experience</span>
                </div>
                <div className="flex items-center space-x-4 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl hover-lift">
                  <CheckCircle className="text-purple-600 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 font-medium"><span className="text-gradient-secondary">500+ Sessions</span></span>
                </div>
                <div className="flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl hover-lift">
                  <CheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 font-medium"><span className="text-gradient-accent">Licensed PsyD</span></span>
                </div>
                <div className="flex items-center space-x-4 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl hover-lift">
                  <CheckCircle className="text-orange-600 w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-700 font-medium"><span className="text-gradient-warm">In-Person & Virtual</span></span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8 animate-slide-in-right">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-soft hover-lift">
                <h3 className="font-display font-semibold text-gray-900 mb-6 flex items-center">
                  <Clock className="text-blue-600 w-6 h-6 mr-3" />
                  <span className="text-gradient-primary">Office Hours</span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-gray-900"><span className="text-gradient-primary">In-Person</span> (Tue & Thu)</p>
                      <p className="text-gray-600 font-medium">10 AM – 6 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-gray-900"><span className="text-gradient-secondary">Virtual via Zoom</span> (Mon, Wed & Fri)</p>
                      <p className="text-gray-600 font-medium">1 PM – 5 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-soft hover-lift">
                <h3 className="font-display font-semibold text-gray-900 mb-6">
                  <span className="text-gradient-secondary">Session Fees</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Individual Session</span>
                    <span className="font-display font-bold text-gradient-primary text-xl">$200</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                    <span className="text-gray-700 font-medium">Couples Session</span>
                    <span className="font-display font-bold text-gradient-secondary text-xl">$240</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span> & <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">Specialties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold">Evidence-based therapy approaches</span> tailored to your unique needs and goals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden hover-lift group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 text-5xl bg-white/90 rounded-full w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <div className="p-8">
                  <h3 className={`text-2xl font-display font-semibold text-gray-900 mb-4 ${service.textColor}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Frequently Asked</span> <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold">therapy sessions</span>, insurance, and what to expect
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <button
                  className="w-full py-8 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300 rounded-2xl px-6 group"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-display font-semibold text-gray-900 pr-4 group-hover:text-gradient-primary transition-colors">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="text-blue-600 w-6 h-6 flex-shrink-0 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="text-gray-400 w-6 h-6 flex-shrink-0 group-hover:text-gradient-primary transition-all duration-300" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="pb-8 px-6 animate-slide-down">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Book Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Free Consultation</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Ready to start your journey toward <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent font-semibold">healing</span>? Contact me to schedule a free consultation or ask any questions about my <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold">services</span>.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-soft hover-lift">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-xl">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-gray-900"><span className="text-gradient-primary">Phone</span></p>
                    <p className="text-gray-600 font-medium">(323) 555-0192</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-soft hover-lift">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-gray-900"><span className="text-gradient-secondary">Email</span></p>
                    <p className="text-gray-600 font-medium">serena@blakepsychology.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-soft hover-lift">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-xl">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-gray-900"><span className="text-gradient-accent">Office</span></p>
                    <p className="text-gray-600 font-medium">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-large animate-slide-in-right">
              <h3 className={`text-3xl font-display font-semibold text-gray-900 mb-8 transition-all duration-500 ${contactHighlighted ? 'text-gradient-primary scale-105' : ''}`}>
                Request Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Free Consultation</span>
              </h3>
              <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-500 ${contactHighlighted ? 'ring-4 ring-blue-300 bg-blue-50/30 rounded-2xl p-6' : ''}`}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">Name</span> *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input-enhanced ${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3">
                    <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent font-semibold">Phone</span> *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input-enhanced ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-semibold">Email</span> *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input-enhanced ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                    <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent font-semibold">What brings you here?</span> *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`form-input-enhanced ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="Please tell us about your concerns and what you hope to achieve through therapy..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-3">
                    <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent font-semibold">Preferred time to reach you</span> *
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={`form-input-enhanced ${errors.preferredTime ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="e.g., Weekdays after 5 PM, Weekends, etc."
                  />
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-2">{errors.preferredTime}</p>}
                </div>
                
                <div className="flex items-start space-x-4">
                  <input
                    type="checkbox"
                    id="agreeToContact"
                    name="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleInputChange}
                    className="mt-2 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="agreeToContact" className="text-sm text-gray-700">
                    I agree to be contacted by Dr. Blake regarding my inquiry *
                  </label>
                </div>
                {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact}</p>}
                
                <button
                  type="submit"
                  className="w-full btn-primary btn-enhanced text-lg py-5 mt-8 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container-custom text-center relative z-10">
          <div className="mb-8">
            <h3 className="text-3xl font-display font-bold mb-3 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent">Dr. Serena Blake</h3>
            <p className="text-gray-400 text-lg font-medium">Licensed Clinical Psychologist</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:scale-105 font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:bg-gradient-to-r hover:from-pink-500 hover:via-rose-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:scale-105 font-medium">Services</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:bg-gradient-to-r hover:from-emerald-500 hover:via-teal-500 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:scale-105 font-medium">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:bg-gradient-to-r hover:from-orange-500 hover:via-amber-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:scale-105 font-medium">Contact</button>
          </div>
          <div className="text-gray-400 text-sm">
            <p>© 2024 Dr. Serena Blake. All rights reserved.</p>
            <p className="mt-2">1287 Maplewood Drive, Los Angeles, CA 90026</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 