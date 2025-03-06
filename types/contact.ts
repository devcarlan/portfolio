export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export type ActionResponse = {
  success: boolean
  message: string
  errors?: {
    [K in keyof ContactFormData]?: string[]
  }
}
