
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

export const dynamic = "force-dynamic"

const prisma = new PrismaClient()

const contactFormSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  contact: z.string().min(5, 'Контакт должен содержать минимум 5 символов'),
  projectType: z.string().min(1, 'Выберите тип проекта'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Валидация данных
    const validatedData = contactFormSchema.parse(body)
    
    // Сохранение в базу данных
    const contactForm = await prisma.contactForm.create({
      data: {
        name: validatedData.name,
        contact: validatedData.contact,
        projectType: validatedData.projectType,
        message: validatedData.message,
        status: 'new',
      },
    })
    
    return NextResponse.json({
      success: true,
      message: 'Ваше сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.',
      id: contactForm.id,
    }, { status: 200 })
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Ошибка валидации данных',
        errors: error.errors,
      }, { status: 400 })
    }
    
    return NextResponse.json({
      success: false,
      message: 'Произошла ошибка при отправке сообщения. Попробуйте еще раз.',
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
