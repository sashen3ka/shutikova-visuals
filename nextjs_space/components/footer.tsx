
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowUp, 
  MessageCircle, 
  Mail, 
  Instagram,
  Linkedin,
  Heart
} from 'lucide-react'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navigationLinks = [
    { href: '#about', label: 'Обо мне' },
    { href: '#services', label: 'Услуги' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#contact', label: 'Контакты' }
  ]

  const socialLinks = [
    {
      href: 'https://t.me/ya3sasha',
      icon: MessageCircle,
      label: 'Telegram',
      color: 'text-blue-500 hover:text-blue-600'
    },
    {
      href: 'mailto:yasashashutikova@gmail.com',
      icon: Mail,
      label: 'Email',
      color: 'text-purple-500 hover:text-purple-600'
    }
  ]

  return (
    <>
      <footer ref={ref} className="bg-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full" />
          <div className="absolute top-40 right-32 w-16 h-16 border-2 border-white/10 rounded-full" />
          <div className="absolute bottom-20 left-1/3 w-24 h-24 border-2 border-white/15 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-3">
                  Aleksandra Shutikova
                </h3>
                <p className="text-gray-400 text-lg">
                  Графический дизайнер | Рилсмейкер
                </p>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Создаю креативы, которые продают и пробивают баннерную слепоту. 
                Помогаю брендам выделиться с помощью эффективного визуального контента.
              </p>

              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Следите за мной:</span>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold mb-6">
                Навигация
              </h4>
              
              <nav className="space-y-4">
                {navigationLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold mb-6">
                Связаться со мной
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Telegram</p>
                    <a
                      href="https://t.me/ya3sasha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      @ya3sasha
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a
                      href="mailto:yasashashutikova@gmail.com"
                      className="text-purple-400 hover:text-purple-300 transition-colors break-all"
                    >
                      yasashashutikova@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-gray-300 mb-4">
                  Готовы к сотрудничеству?
                </p>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300"
                >
                  Написать мне
                </button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© 2025 Aleksandra Shutikova</span>
                <span className="hidden lg:inline">•</span>
                <span className="flex items-center">
                  Сделано с <Heart className="h-4 w-4 text-red-500 mx-1" /> для креативности
                </span>
              </div>
              
              <div className="text-sm text-gray-500">
                Последнее обновление: январь 2025
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={showScrollTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Наверх"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </>
  )
}

export default Footer
