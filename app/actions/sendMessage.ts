'use server'

import { ActionResponse, ContactFormData } from '@/types/contact'
import { z } from 'zod'

const validationSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().min(1, 'Email is required.'),
  subject: z.string().min(1, 'Subject is required.'),
  message: z.string().min(1, 'Message is required.'),
})

export const sendMessage = async (
  prevState: ActionResponse | null,
  formData: FormData
) => {
  'use server'
  try {
    const rawFormData: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    const validatedData = validationSchema.safeParse(rawFormData)

    if (!validatedData.success) {
      return {
        success: false,
        message: 'Please fix the errors in the form',
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

    console.log('Message sent!', rawFormData)

    return {
      success: true,
      message: 'Your message has been sent!',
    }
  } catch {
    return {
      success: false,
      message: 'An unexpected error occurred',
    }
  }
}
