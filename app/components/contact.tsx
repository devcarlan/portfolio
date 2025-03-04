'use client'

import { Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    console.log('submitted')
  }
  return (
    <section id='contact' className='py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Get In Touch</h2>
            <p className='text-[#09090b]/80 max-w-2xl mx-auto'>
              Have a project in mind or want to discuss potential client work
              opportunities? Feel free to reach out using the form below.
            </p>
          </div>

          <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid sm:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <label htmlFor='name' className='text-sm font-medium'>
                    Name
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-[#e2e8f0] bg-[#fff] px-3 py-2 text-sm ring-offset-[#fff] placeholder:text-[#64748b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#238b45] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='name'
                    name='name'
                    placeholder='Your name'
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor='email' className='text-sm font-medium'>
                    Email
                  </label>
                  <input
                    className='flex h-10 w-full rounded-md border border-[#e2e8f0] bg-[#fff] px-3 py-2 text-sm ring-offset-[#fff] placeholder:text-[#64748b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#238b45] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Your email'
                    required
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <label htmlFor='subject' className='text-sm font-medium'>
                  Subject
                </label>
                <input
                  className='flex h-10 w-full rounded-md border border-[#e2e8f0] bg-[#fff] px-3 py-2 text-sm ring-offset-[#fff] placeholder:text-[#64748b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#238b45] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  id='subject'
                  name='subject'
                  placeholder='Subject of your message'
                  required
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='message' className='text-sm font-medium'>
                  Message
                </label>
                <textarea
                  className='flex min-h-[80px] w-full rounded-md border border-[#e2e8f0] bg-[#fff] px-3 py-2 text-sm ring-offset-[#fff] placeholder:text-[#64748b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#238b45] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  id='message'
                  name='message'
                  placeholder='Your message'
                  rows={5}
                  required
                />
              </div>

              <button
                type='submit'
                className='flex items-center h-11 rounded-md px-8 bg-[#238b45] text-white hover:bg-[#238b45]/90 w-full sm:w-auto gap-2'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
