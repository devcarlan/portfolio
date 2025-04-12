export type ContactFormData = {
  name: string
  email: string
  company: string
  message: string
  more: string
}

export type ActionResponse = {
  success: boolean
  message: string
  fieldData?: ContactFormData
  errors?: {
    [K in keyof ContactFormData]?: string[]
  }
}
