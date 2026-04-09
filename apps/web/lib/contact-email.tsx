import "server-only"

import { render } from "@react-email/render"
import { Resend } from "resend"
import { ContactConfirmationEmail } from "@/emails/contact-confirmation-email"
import { ContactLeadEmail } from "@/emails/contact-lead-email"
import type { ContactFormValues } from "@/lib/contact-form-schema"

const CONTACT_RECIPIENTS = [
  "dxvialcantara@gmail.com",
  "giovaniissouza@gmail.com",
] as const

type ContactEmailResult = {
  confirmationSent: boolean
}

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL

  if (!apiKey) {
    throw new Error("RESEND_API_KEY nao configurada.")
  }

  if (!from) {
    throw new Error("CONTACT_FROM_EMAIL nao configurado.")
  }

  return {
    apiKey,
    from,
  }
}

async function renderEmailTemplates(values: ContactFormValues) {
  const leadReact = <ContactLeadEmail {...values} />
  const confirmationReact = (
    <ContactConfirmationEmail
      name={values.name}
      projectType={values.projectType}
      message={values.message}
    />
  )

  const [leadHtml, leadText, confirmationHtml, confirmationText] =
    await Promise.all([
      render(leadReact),
      render(leadReact, { plainText: true }),
      render(confirmationReact),
      render(confirmationReact, { plainText: true }),
    ])

  return {
    leadHtml,
    leadText,
    confirmationHtml,
    confirmationText,
  }
}

export async function sendContactEmails(
  values: ContactFormValues
): Promise<ContactEmailResult> {
  const { apiKey, from } = getResendConfig()
  const resend = new Resend(apiKey)
  const { leadHtml, leadText, confirmationHtml, confirmationText } =
    await renderEmailTemplates(values)

  const internalSubject = `Novo contato ZION • ${values.name} • ${values.projectType}`
  const confirmationSubject = "Recebemos seu contato | ZION"

  const { error: internalError } = await resend.emails.send({
    from,
    to: [...CONTACT_RECIPIENTS],
    subject: internalSubject,
    html: leadHtml,
    text: leadText,
    replyTo: values.email,
  })

  if (internalError) {
    throw new Error(
      `Falha ao enviar o email interno: ${internalError.message || "erro desconhecido."}`
    )
  }

  const { error: confirmationError } = await resend.emails.send({
    from,
    to: values.email,
    subject: confirmationSubject,
    html: confirmationHtml,
    text: confirmationText,
  })

  if (confirmationError) {
    console.error("Falha ao enviar email de confirmacao do contato.", {
      error: confirmationError,
      email: values.email,
    })

    return {
      confirmationSent: false,
    }
  }

  return {
    confirmationSent: true,
  }
}
