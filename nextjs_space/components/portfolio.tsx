
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { X, ExternalLink, Zap } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedWork, setSelectedWork] = useState<number | null>(null)
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const categories = [
    { id: 'all', label: 'Все работы', count: 16 },
    { id: 'advertising', label: 'Рекламные креативы', count: 4 },
    { id: 'video', label: 'Видео/Рилсы', count: 4 },
    { id: 'banners', label: 'Баннеры', count: 4 },
    { id: 'ai', label: 'AI-генерация', count: 4 }
  ]

  const portfolioItems = [
    // Рекламные креативы
    {
      id: 1,
      title: 'Социальные медиа кампания',
      category: 'advertising',
      description: 'Серия баннеров для продвижения IT-продукта в социальных сетях с современным дизайном',
      result: 'CTR увеличился на 45%',
      tags: ['Telegram ADS', 'SMM', 'Конверсия'],
      image: 'https://thumbs.dreamstime.com/b/social-media-banner-corners-concept-modern-design-vector-generative-ai-featuring-person-megaphone-abstract-shapes-390103743.jpg'
    },
    {
      id: 2,
      title: 'Telegram ADS креативы',
      category: 'advertising',
      description: 'Разработка серии эффективных рекламных креативов для Telegram канала',
      result: 'Конверсия 12.3%',
      tags: ['Telegram ADS', 'Реклама', 'Дизайн'],
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXqSifeaINpbEvSYaidGkvjkoFLalGh17Asha0wfassvcCfSIT8PdG2FjgTDHIvbtw5ilRkMgUmqjv1QhQGaetrztURt3h32igQd9lSOz-gBdaIBBn4N0v1caC88_M2j4hByFSs8Ak6yTLb7V-eswOWps3Ko5qYfPZmXrissGHgF48abhYeUgOlu2S/s1280/social%20media%20post%20thumbnail.webp'
    },
    {
      id: 3,
      title: 'A/B тестирование визуалов',
      category: 'advertising',
      description: 'Создание и тестирование различных вариантов креативов для оптимизации конверсии',
      result: 'Выявлен лучший вариант',
      tags: ['A/B тест', 'Аналитика', 'Оптимизация'],
      image: 'https://media.wired.com/photos/5a9f3fda52430e4b5eb949ab/4:3/w_576,h_432,c_limit/ff_abtesting_f.jpg'
    },
    {
      id: 4,
      title: 'Маркетинговая кампания',
      category: 'advertising',
      description: 'Комплексный визуальный дизайн для квартальной маркетинговой кампании бренда',
      result: 'Охват +200%',
      tags: ['Брендинг', 'Кампания', 'Маркетинг'],
      image: 'https://www.slideteam.net/media/catalog/product/cache/1280x720/m/a/marketing_team_quarterly_work_campaign_roadmap_with_branding_slide01.jpg'
    },

    // Видео/Рилсы
    {
      id: 5,
      title: 'Instagram Reels серия',
      category: 'video',
      description: 'Создание динамичных рилсов для продвижения продукта в Instagram и TikTok',
      result: '500K+ просмотров',
      tags: ['Рилсы', 'Instagram', 'TikTok'],
      image: 'https://i.ytimg.com/vi/HOKtAN5e4JA/maxresdefault.jpg'
    },
    {
      id: 6,
      title: 'Промо-ролик бренда',
      category: 'video',
      description: 'Короткий промо-ролик для презентации нового продукта компании',
      result: 'Увеличение продаж на 30%',
      tags: ['Промо', 'Брендинг', 'Видео'],
      image: 'https://www.befunky.com/images/wp/wp-2023-09-00-igreel-photo-feature.jpg?auto=avif,webp&format=jpg&width=1136&crop=16:9'
    },
    {
      id: 7,
      title: 'Анимированные баннеры',
      category: 'video',
      description: 'Серия анимированных баннеров для веб-сайта и социальных сетей',
      result: 'Взаимодействие +85%',
      tags: ['Анимация', 'Баннеры', 'Web'],
      image: 'https://img.freepik.com/free-psd/marketing-strategy-landing-page_23-2150506295.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: 8,
      title: 'Видео-контент для бренда',
      category: 'video',
      description: 'Создание серии видео-контента для маркетинговых целей',
      result: 'Охват аудитории +150%',
      tags: ['Видео-маркетинг', 'Контент', 'SMM'],
      image: 'https://img.freepik.com/free-vector/flat-design-marketing-agency-horizontal-banner-template_23-2150604254.jpg?semt=ais_hybrid&w=740&q=80'
    },

    // Баннеры
    {
      id: 9,
      title: 'Веб-баннеры для сайта',
      category: 'banners',
      description: 'Разработка адаптивных веб-баннеров различных размеров для корпоративного сайта',
      result: 'Клики +60%',
      tags: ['Web-дизайн', 'Баннеры', 'UX'],
      image: 'https://public-images.interaction-design.org/tags/4k8r8HvVwZhMCR3NWfE8v2wbaudKxKTd5eFbBa3o.jpg'
    },
    {
      id: 10,
      title: 'E-commerce баннеры',
      category: 'banners',
      description: 'Создание привлекательных баннеров для интернет-магазина',
      result: 'Продажи +40%',
      tags: ['E-commerce', 'Продажи', 'Конверсия'],
      image: 'https://www.31palms.com/wp-content/uploads/2024/04/3-4-2000x1557-optimized.jpg'
    },
    {
      id: 11,
      title: 'Digital advertising',
      category: 'banners',
      description: 'Баннеры для цифровой рекламы с акцентом на высокую конверсию',
      result: 'ROI увеличился на 120%',
      tags: ['Digital ads', 'ROI', 'Реклама'],
      image: 'https://i.ytimg.com/vi/uxjgG0H0Cng/maxresdefault.jpg'
    },
    {
      id: 12,
      title: 'Промо-баннеры',
      category: 'banners',
      description: 'Яркие промо-баннеры для специальных предложений и акций',
      result: 'Участие в акции +300%',
      tags: ['Промо', 'Акции', 'Маркетинг'],
      image: 'https://static.vecteezy.com/system/resources/previews/026/574/696/non_2x/digital-marketing-agency-social-media-post-or-promotional-web-banner-design-template-social-media-post-design-layout-free-vector.jpg'
    },

    // AI-генерация
    {
      id: 13,
      title: 'AI визуалы для кампании',
      category: 'ai',
      description: 'Уникальные визуалы, созданные с помощью нейросетей для рекламной кампании',
      result: 'Уникальность 100%',
      tags: ['AI', 'Midjourney', 'Креатив'],
      image: 'https://cdn.abacus.ai/images/4a952664-6211-4589-bf57-80cde53528f5.jpg'
    },
    {
      id: 14,
      title: 'Брендовая стилизация AI',
      category: 'ai',
      description: 'Стилизация визуального контента под фирменный стиль с использованием ИИ',
      result: 'Узнаваемость +90%',
      tags: ['AI брендинг', 'Стиль', 'DALL-E'],
      image: 'https://cdn.abacus.ai/images/14c727f4-d22a-48de-b77a-6db9d842b005.jpg'
    },
    {
      id: 15,
      title: 'Digital AI-арт',
      category: 'ai',
      description: 'Создание концептуального цифрового искусства для творческого проекта',
      result: 'Вирусный контент',
      tags: ['Digital art', 'AI-арт', 'Концепт'],
      image: 'https://cdn.abacus.ai/images/d8712400-3437-4bea-8980-64aca18f7d88.png'
    },
    {
      id: 16,
      title: 'AI-маркетинг визуалы',
      category: 'ai',
      description: 'Генерация маркетинговых визуалов с современной технологической эстетикой',
      result: 'Охват +250%',
      tags: ['AI-маркетинг', 'Tech', 'Нейросети'],
      image: 'https://cdn.abacus.ai/images/40f7c938-9210-4b34-b318-82b72d2327ca.png'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const openModal = (workId: number) => {
    setSelectedWork(workId)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedWork(null)
    document.body.style.overflow = 'unset'
  }

  const selectedWorkData = portfolioItems.find(item => item.id === selectedWork)

  return (
    <section id="portfolio" ref={ref} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Портфолио
          </h2>
          <div className="w-20 h-1 gradient-bg-primary mx-auto mb-8" />
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Подборка моих лучших работ в области графического дизайна, 
            видеопродакшена и AI-генерации. Каждый проект — это уникальное решение конкретной задачи.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'gradient-bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-purple-600 hover:shadow-md border'
              }`}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(item.id)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {item.result}
                      </span>
                      <Zap className="h-4 w-4 text-purple-500 group-hover:scale-125 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedWork && selectedWorkData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                  
                  <div className="relative aspect-video bg-gray-200 overflow-hidden">
                    <Image
                      src={selectedWorkData.image}
                      alt={selectedWorkData.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {selectedWorkData.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {selectedWorkData.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          Результат
                        </h4>
                        <p className="text-lg font-semibold text-green-600">
                          {selectedWorkData.result}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          Технологии
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedWorkData.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-sm bg-purple-50 text-purple-600 px-3 py-1 rounded-full border border-purple-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => {
                        closeModal()
                        const contactElement = document.querySelector('#contact')
                        if (contactElement) {
                          contactElement.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="gradient-bg-primary text-white hover:scale-105 transition-transform w-full md:w-auto"
                      size="lg"
                    >
                      Заказать похожий проект
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Заинтересовались моими работами?
          </p>
          <Button
            onClick={() => {
              const contactElement = document.querySelector('#contact')
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            size="lg"
            className="gradient-bg-primary text-white hover:scale-105 transition-transform px-8 py-3 text-lg"
          >
            Обсудить ваш проект
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
