
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Send, 
  MessageCircle, 
  Mail,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const projectTypes = [
    { value: 'advertising', label: 'Рекламные креативы' },
    { value: 'video', label: 'Видео-контент / Рилсы' },
    { value: 'banners', label: 'Баннеры и дизайн' },
    { value: 'ai-generation', label: 'AI-генерация' },
    { value: 'social-media', label: 'Дизайн для соцсетей' },
    { value: 'branding', label: 'Брендинг и айдентика' },
    { value: 'consultation', label: 'Консультация' },
    { value: 'other', label: 'Другое' }
  ]

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = 'Имя обязательно для заполнения'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Имя должно содержать минимум 2 символа'
    }

    if (!formData.contact.trim()) {
      errors.contact = 'Контакт обязателен для заполнения'
    } else if (formData.contact.trim().length < 5) {
      errors.contact = 'Контакт должен содержать минимум 5 символов'
    }

    if (!formData.projectType) {
      errors.projectType = 'Выберите тип проекта'
    }

    if (!formData.message.trim()) {
      errors.message = 'Сообщение обязательно для заполнения'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Сообщение должно содержать минимум 10 символов'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Очищаем ошибку для поля при изменении
    if (formErrors[field]) {
      setFormErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Пожалуйста, исправьте ошибки в форме')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        toast.success(result.message)
        setFormData({
          name: '',
          contact: '',
          projectType: '',
          message: ''
        })
      } else {
        toast.error(result.message || 'Произошла ошибка при отправке сообщения')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Произошла ошибка при отправке сообщения. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Готовы создать креатив,<br />который продает?
          </h2>
          <div className="w-20 h-1 gradient-bg-primary mx-auto mb-8" />
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Свяжитесь со мной удобным способом, и мы обсудим ваш проект. 
            Отвечаю быстро и всегда готова к новым интересным задачам!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Способы связи
              </h3>
              
              <div className="space-y-6">
                {/* Telegram */}
                <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Telegram (предпочтительно)
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Быстро отвечаю и могу показать примеры работ
                    </p>
                    <a
                      href="https://t.me/ya3sasha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      @ya3sasha
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start p-6 bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Email
                    </h4>
                    <p className="text-gray-600 mb-3">
                      Для официальных запросов и детальных брифов
                    </p>
                    <a
                      href="mailto:yasashashutikova@gmail.com"
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      yasashashutikova@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-2xl p-8 text-white"
            >
              <h4 className="text-2xl font-bold mb-4">
                Почему выбирают меня?
              </h4>
              <ul className="space-y-3">
                {[
                  'Быстрый ответ в течение 2-4 часов',
                  'Прозрачный процесс и регулярные обновления',
                  'Учет маркетинговых целей в дизайне',
                  'Использование современных AI-инструментов',
                  'Гарантия качества и соблюдение сроков'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 opacity-90" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Написать мне
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="text-base font-medium text-gray-900 mb-2 block">
                    Имя *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`h-12 text-base ${formErrors.name ? 'border-red-500' : ''}`}
                    style={{ paddingLeft: '16px' }}
                  />
                  {formErrors.name && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.name}
                    </div>
                  )}
                </div>

                {/* Contact Field */}
                <div>
                  <Label htmlFor="contact" className="text-base font-medium text-gray-900 mb-2 block">
                    Контакт (Telegram/Email) *
                  </Label>
                  <Input
                    id="contact"
                    type="text"
                    placeholder="@username или email@example.com"
                    value={formData.contact}
                    onChange={(e) => handleInputChange('contact', e.target.value)}
                    className={`h-12 text-base ${formErrors.contact ? 'border-red-500' : ''}`}
                    style={{ paddingLeft: '16px' }}
                  />
                  {formErrors.contact && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.contact}
                    </div>
                  )}
                </div>

                {/* Project Type Field */}
                <div>
                  <Label htmlFor="projectType" className="text-base font-medium text-gray-900 mb-2 block">
                    Тип проекта *
                  </Label>
                  <Select
                    value={formData.projectType || ""}
                    onValueChange={(value) => handleInputChange('projectType', value)}
                  >
                    <SelectTrigger className={`h-12 text-base ${formErrors.projectType ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Выберите тип проекта" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formErrors.projectType && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.projectType}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="message" className="text-base font-medium text-gray-900 mb-2 block">
                    Сообщение *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте, целях и пожеланиях..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className={`text-base resize-none ${formErrors.message ? 'border-red-500' : ''}`}
                    style={{ padding: '12px 16px' }}
                  />
                  {formErrors.message && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {formErrors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 text-lg font-semibold gradient-bg-primary text-white hover:scale-105 transition-transform disabled:scale-100 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Отправить сообщение
                    </>
                  )}
                </Button>

                {/* Privacy Notice */}
                <p className="text-sm text-gray-500 text-center">
                  Нажимая "Отправить", вы соглашаетесь на обработку персональных данных 
                  для связи по вашему запросу
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
