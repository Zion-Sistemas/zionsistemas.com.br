import { Section, Text } from "@react-email/components"
import type { ContactFormValues } from "@/lib/contact-form-schema"
import { EmailShell, emailStyles } from "./components/email-shell"

type ContactConfirmationEmailProps = Pick<
  ContactFormValues,
  "name" | "projectType" | "message"
>

export function ContactConfirmationEmail({
  name,
  projectType,
  message,
}: ContactConfirmationEmailProps) {
  return (
    <EmailShell
      preview="Recebemos seu contato e vamos retornar em breve."
      eyebrow="Contato recebido"
      title="Recebemos sua solicitação."
      intro={`Olá, ${name}. Obrigado por entrar em contato com a ZION. Já registramos seu contexto inicial e vamos retornar com direcionamento técnico, escopo recomendado e próximos passos.`}
      ctaLabel="Responder este email"
      ctaHref="mailto:contato@zionsistemas.com.br"
    >
      <Section style={emailStyles.insetCard}>
        <Text style={emailStyles.sectionTitle}>O que registramos</Text>
        <Section style={{ marginBottom: "16px" }}>
          <Text style={emailStyles.dataLabel}>Tipo de projeto</Text>
          <Text style={emailStyles.dataValue}>{projectType}</Text>
        </Section>
        <Section>
          <Text style={emailStyles.dataLabel}>Resumo enviado</Text>
          <Text style={emailStyles.bodyText}>{message}</Text>
        </Section>
      </Section>

      <Section style={emailStyles.insetCard}>
        <Text style={emailStyles.sectionTitle}>Próximos passos</Text>
        <Text style={emailStyles.bodyText}>
          A equipe da ZION vai analisar seu contexto e responder com um caminho
          técnico inicial. Se precisar complementar alguma informação, basta
          responder este email.
        </Text>
      </Section>

      <Text style={emailStyles.mutedText}>
        Este retorno confirma apenas o recebimento da sua mensagem. O contato
        humano vem na sequência.
      </Text>
    </EmailShell>
  )
}

export default ContactConfirmationEmail
