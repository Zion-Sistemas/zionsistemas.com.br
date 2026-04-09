import { z } from "zod"

export const contactProjectTypes = [
  "Sistema sob medida",
  "Automacao de processos",
  "Landing page",
  "Integracoes",
  "Consultoria",
] as const

const contactFieldSchemas = {
  name: z
    .string()
    .trim()
    .min(3, "Informe um nome com pelo menos 3 caracteres."),
  email: z
    .string()
    .trim()
    .min(1, "Informe um e-mail para contato.")
    .email("Digite um e-mail valido."),
  company: z
    .string()
    .trim()
    .min(2, "Informe a empresa para contextualizar o atendimento."),
  phone: z
    .string()
    .trim()
    .refine(
      (value) =>
        value.length === 0 || /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(value),
      "Digite um WhatsApp valido no formato brasileiro."
    ),
  projectType: z.enum(contactProjectTypes, {
    errorMap: () => ({ message: "Selecione uma categoria de projeto valida." }),
  }),
  message: z
    .string()
    .trim()
    .min(20, "Descreva seu projeto com pelo menos 20 caracteres."),
}

export const contactFormSchema = z.object(contactFieldSchemas)

export type ContactFormValues = z.infer<typeof contactFormSchema>

type ContactFieldName = keyof typeof contactFieldSchemas

export function zodResolver(fieldName: ContactFieldName) {
  const schema = contactFieldSchemas[fieldName]

  return ({ value }: { value: unknown }) => {
    const result = schema.safeParse(value)

    if (result.success) {
      return undefined
    }

    return result.error.issues[0]?.message ?? "Campo invalido."
  }
}

export function formatBrazilianPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)

  if (digits.length === 0) {
    return ""
  }

  if (digits.length <= 2) {
    return `(${digits}`
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}
