import { Section, Text } from "@react-email/components"
import type { ContactFormValues } from "@/lib/contact-form-schema"
import { EmailShell, emailStyles } from "./components/email-shell"

type ContactLeadEmailProps = ContactFormValues

const fields: Array<{
  key: keyof ContactFormValues
  label: string
}> = [
  { key: "name", label: "Nome" },
  { key: "email", label: "E-mail" },
  { key: "company", label: "Empresa" },
  { key: "phone", label: "WhatsApp" },
  { key: "projectType", label: "Tipo de projeto" },
]

export function ContactLeadEmail(props: ContactLeadEmailProps) {
  return (
    <EmailShell
      preview={`Novo contato da ZION: ${props.name} • ${props.projectType}`}
      eyebrow="Novo lead"
      title="Novo contato recebido pelo site."
      intro="Uma nova solicitação chegou pela página de contato. Os dados principais estão organizados abaixo para triagem e retorno."
      ctaLabel="Responder lead"
      ctaHref={`mailto:${props.email}`}
      outro="Este email foi gerado automaticamente pela página /contact da ZION."
    >
      <Section style={emailStyles.insetCard}>
        <Text style={emailStyles.sectionTitle}>Resumo do contato</Text>
        {fields.map(({ key, label }) => {
          const value = props[key] || "Não informado"

          return (
            <Section key={key} style={{ marginBottom: "16px" }}>
              <Text style={emailStyles.dataLabel}>{label}</Text>
              <Text style={emailStyles.dataValue}>{value}</Text>
            </Section>
          )
        })}
      </Section>

      <Section style={emailStyles.insetCard}>
        <Text style={emailStyles.sectionTitle}>Mensagem</Text>
        <Text style={emailStyles.bodyText}>{props.message}</Text>
      </Section>

      <Text style={emailStyles.mutedText}>
        Se responder este email, use o endereço informado pelo lead ou o
        reply-to configurado no envio.
      </Text>
    </EmailShell>
  )
}

export default ContactLeadEmail
