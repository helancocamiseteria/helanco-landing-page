import { ref, computed } from 'vue'
import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export const useContactForm = () => {
  // Form state
  const formData = ref<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })

  const errors = ref<FormErrors>({})
  const touched = ref<Record<keyof ContactFormData, boolean>>({
    name: false,
    email: false,
    message: false
  })
  const isSubmitting = ref(false)
  const submitSuccess = ref(false)
  const submitError = ref<string | null>(null)

  // Validation rules
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'Nome é obrigatório'
    }
    if (name.trim().length < 2) {
      return 'Nome deve ter pelo menos 2 caracteres'
    }
    return undefined
  }

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'E-mail é obrigatório'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'E-mail inválido'
    }
    return undefined
  }

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return 'Mensagem é obrigatória'
    }
    if (message.trim().length < 10) {
      return 'Mensagem deve ter pelo menos 10 caracteres'
    }
    return undefined
  }

  // Validate single field
  const validateField = (field: keyof ContactFormData) => {
    touched.value[field] = true
    
    switch (field) {
      case 'name':
        errors.value.name = validateName(formData.value.name)
        break
      case 'email':
        errors.value.email = validateEmail(formData.value.email)
        break
      case 'message':
        errors.value.message = validateMessage(formData.value.message)
        break
    }
  }

  // Validate all fields
  const validateForm = (): boolean => {
    // Mark all fields as touched when validating the entire form
    touched.value = {
      name: true,
      email: true,
      message: true
    }

    errors.value = {
      name: validateName(formData.value.name),
      email: validateEmail(formData.value.email),
      message: validateMessage(formData.value.message)
    }

    return !errors.value.name && !errors.value.email && !errors.value.message
  }

  // Check if form is valid
  const isFormValid = computed(() => {
    return (
      formData.value.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email) &&
      formData.value.message.trim().length >= 10
    )
  })

  // Submit form
  const submitForm = async () => {
    // Reset previous states
    submitSuccess.value = false
    submitError.value = null

    // Validate form
    if (!validateForm()) {
      return
    }

    // Get EmailJS credentials from runtime config
    const config = useRuntimeConfig()
    const serviceId = config.public.emailjsServiceId as string
    const templateId = config.public.emailjsTemplateId as string
    const publicKey = config.public.emailjsPublicKey as string

    // Check if credentials are configured
    if (!serviceId || !templateId || !publicKey) {
      submitError.value = 'Configuração de e-mail não encontrada. Entre em contato diretamente.'
      return
    }

    isSubmitting.value = true

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.value.name,
          from_email: formData.value.email,
          message: formData.value.message,
          to_name: 'Helanco',
        },
        publicKey
      )

      if (response.status === 200) {
        submitSuccess.value = true
        // Reset form
        formData.value = {
          name: '',
          email: '',
          message: ''
        }
        errors.value = {}
        touched.value = {
          name: false,
          email: false,
          message: false
        }
        
        // Hide success message after 10 seconds
        setTimeout(() => {
          submitSuccess.value = false
        }, 10000)
      }
    } catch (error: any) {
      if (import.meta.dev) {
        console.error('EmailJS Error:', error)
      }
      submitError.value = 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente.'
    } finally {
      isSubmitting.value = false
    }
  }

  // Reset form
  const resetForm = () => {
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
    errors.value = {}
    touched.value = {
      name: false,
      email: false,
      message: false
    }
    submitSuccess.value = false
    submitError.value = null
  }

  return {
    // State
    formData,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    submitError,
    isFormValid,

    // Methods
    validateField,
    validateForm,
    submitForm,
    resetForm
  }
}
