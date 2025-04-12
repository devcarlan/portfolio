'use server'

import { ActionResponse, ContactFormData } from '@/types/contact'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const validationSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().min(1, 'Email is required.'),
  company: z.string(),
  message: z.string().min(1, 'Message is required.'),
  more: z.string(),
})

const sendMail = async (data: ContactFormData) => {
  const { name, email, company, message } = data

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
      <p><strong>${name} </strong>${
        company ? `from <strong>${company}</strong>` : ''
      } has sent you a message.</p><br>
      <p><strong>Email: </strong> ${email}</p><br>
      <p><strong>Message: </strong> ${message}</p><br>`,
    })
  } catch (error) {
    throw new Error(`Email sending failed with the following error: ${error}`)
  }
}

export const sendMessage = async (
  prevState: ActionResponse,
  formData: FormData
) => {
  try {
    const rawFormData: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      message: formData.get('message') as string,
      more: formData.get('more') as string,
    }

    if (rawFormData.more !== '') throw new Error('Bad bot!')

    const validatedData = validationSchema.safeParse(rawFormData)

    if (!validatedData.success) {
      return {
        success: false,
        message: 'Please fix the errors in the form',
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

    const { name, email, company, message, more } = validatedData.data

    await sendMail(validatedData.data)

    return {
      success: true,
      message: 'Your message has been sent!',
      fieldData: { name, email, company, message, more },
    }
  } catch {
    return {
      success: false,
      message: 'An unexpected error occurred.',
    }
  }
}
