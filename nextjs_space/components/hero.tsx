
'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, PlayCircle, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const handleScrollToPortfolio = () => {
    const portfolioElement = document.querySelector('#portfolio')
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToContact = () => {
    const contactElement = document.querySelector('#contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg-primary opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-orange-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 mb-4"
            >
              Привет! Меня зовут
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">Aleksandra</span>
              <br />
              <span className="text-gray-800">Shutikova</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8"
            >
              Графический дизайнер | Рилсмейкер
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gray-50 p-6 rounded-2xl mb-8 border-l-4 border-purple-500"
            >
              <p className="text-lg lg:text-xl font-semibold text-gray-800">
                "Создаю креативы, которые продают.
                <br />
                <span className="gradient-text">Пробиваю баннерную слепоту"</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={handleScrollToPortfolio}
                size="lg"
                className="gradient-bg-primary text-white hover:scale-105 transition-transform text-lg px-8 py-3 h-auto"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Смотреть портфолио
              </Button>
              
              <Button
                onClick={handleScrollToContact}
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all text-lg px-8 py-3 h-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Обсудить проект
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 gradient-bg-secondary rounded-full opacity-20 blur-3xl animate-pulse" />
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10 bg-white rounded-full p-4 shadow-2xl"
              >
                <Image
                  src="/hero-illustration.jpg"
                  alt="Aleksandra Shutikova - Графический дизайнер и рилсмейкер"
                  width={600}
                  height={600}
                  className="rounded-full object-cover w-full h-full"
                  priority
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                ✨ AI-генерация
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                🎬 Видео-контент
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -left-8 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform -translate-y-1/2"
              >
                🎨 Креативы
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 cursor-pointer hover:text-purple-600 transition-colors"
            onClick={() => {
              const aboutElement = document.querySelector('#about')
              if (aboutElement) {
                aboutElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
            <p className="text-sm mt-2">Скролл вниз</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
