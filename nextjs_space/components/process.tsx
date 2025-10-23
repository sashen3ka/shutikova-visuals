
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MessageSquare, 
  Lightbulb, 
  Palette, 
  RefreshCw, 
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react'

const Process = () => {
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

  const processSteps = [
    {
      id: 1,
      icon: MessageSquare,
      title: 'Бриф',
      subtitle: 'Обсуждаем задачу и цели',
      description: 'Детально изучаю ваши потребности, целевую аудиторию, бюджет и сроки. Задаю уточняющие вопросы для полного понимания задачи.',
      duration: '1-2 дня',
      color: 'text-blue-500 bg-blue-50 border-blue-200',
      features: [
        'Анализ целевой аудитории',
        'Определение ключевых сообщений',
        'Техническое задание',
        'Согласование сроков'
      ]
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Концепция',
      subtitle: 'Предлагаю 2-3 варианта идей',
      description: 'Разрабатываю несколько концептуальных направлений, создаю мудборды и делаю первичные наброски для выбора лучшего решения.',
      duration: '2-3 дня',
      color: 'text-yellow-500 bg-yellow-50 border-yellow-200',
      features: [
        'Мудборды и референсы',
        '2-3 концепции дизайна',
        'Обоснование решений',
        'Презентация идей'
      ]
    },
    {
      id: 3,
      icon: Palette,
      title: 'Реализация',
      subtitle: 'Создаю финальный дизайн',
      description: 'Воплощаю выбранную концепцию в жизнь, создавая финальные макеты со всеми деталями, анимацией и адаптацией под различные форматы.',
      duration: '3-5 дней',
      color: 'text-purple-500 bg-purple-50 border-purple-200',
      features: [
        'Финальные макеты',
        'Адаптация под форматы',
        'Анимация (если требуется)',
        'Техническая подготовка'
      ]
    },
    {
      id: 4,
      icon: RefreshCw,
      title: 'Правки',
      subtitle: 'Вношу корректировки',
      description: 'Принимаю ваши комментарии и вношу необходимые изменения. Включено до 2 итераций правок для достижения идеального результата.',
      duration: '1-2 дня',
      color: 'text-orange-500 bg-orange-50 border-orange-200',
      features: [
        'До 2 раундов правок',
        'Быстрая обратная связь',
        'Детализация изменений',
        'Финальное согласование'
      ]
    },
    {
      id: 5,
      icon: CheckCircle,
      title: 'Результат',
      subtitle: 'Передаю файлы в нужных форматах',
      description: 'Подготавливаю и передаю все финальные файлы в требуемых форматах с исходниками. Предоставляю краткую инструкцию по использованию.',
      duration: '1 день',
      color: 'text-green-500 bg-green-50 border-green-200',
      features: [
        'Файлы во всех форматах',
        'Исходные файлы',
        'Инструкция по использованию',
        'Техническая поддержка'
      ]
    }
  ]

  return (
    <section id="process" ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Процесс работы
          </h2>
          <div className="w-20 h-1 gradient-bg-primary mx-auto mb-8" />
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Прозрачный и понятный процесс работы от первого обращения до получения готового результата. 
            Каждый этап продуман для максимальной эффективности.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full">
            <motion.div
              initial={{ height: 0 }}
              animate={isVisible ? { height: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
              className="gradient-bg-primary w-full rounded-full"
            />
          </div>

          {/* Process Steps */}
          <div className="space-y-8 lg:space-y-16">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
                  animate={isVisible ? { opacity: 1, y: 0, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`relative lg:flex lg:items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isVisible ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center ${step.color.split(' ')[1]} ${step.color.split(' ')[0]}`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      {/* Mobile Timeline Node */}
                      <div className="lg:hidden flex items-center mb-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 ${step.color}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                            Этап {step.id}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {step.duration}
                          </div>
                        </div>
                      </div>

                      {/* Desktop Duration */}
                      <div className="hidden lg:flex items-center justify-between mb-4">
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                          Этап {step.id}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      
                      <p className="text-lg font-medium text-gray-600 mb-4">
                        {step.subtitle}
                      </p>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ 
                              duration: 0.5, 
                              delay: 0.8 + index * 0.2 + featureIndex * 0.1 
                            }}
                            className="flex items-center text-gray-700"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid md:grid-cols-3 gap-6 mt-20"
        >
          {[
            {
              title: 'Общий срок',
              value: '7-13 дней',
              description: 'В зависимости от сложности проекта',
              icon: Clock,
              color: 'text-blue-500 bg-blue-50'
            },
            {
              title: 'Включено правок',
              value: '2 итерации',
              description: 'Для достижения идеального результата',
              icon: RefreshCw,
              color: 'text-purple-500 bg-purple-50'
            },
            {
              title: 'Гарантия качества',
              value: '100%',
              description: 'Работаю до полного удовлетворения',
              icon: CheckCircle,
              color: 'text-green-500 bg-green-50'
            }
          ].map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <div className="text-2xl font-bold gradient-text mb-2">
                  {item.value}
                </div>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Готовы начать?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Давайте обсудим ваш проект и определим, как мой процесс работы поможет достичь ваших целей
            </p>
            <button
              onClick={() => {
                const contactElement = document.querySelector('#contact')
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white gradient-bg-primary rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
