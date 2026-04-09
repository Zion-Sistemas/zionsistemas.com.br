import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

type EmailShellProps = {
  preview: string
  eyebrow: string
  title: string
  intro: string
  children: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
  outro?: string
}

const colors = {
  page: "#0d1c32",
  accent: "#0049db",
  accentSoft: "#2962ff",
  card: "#ffffff",
  inset: "#eceef0",
  text: "#191c1e",
  muted: "#5f6873",
  border: "#d6dbe3",
}

export function EmailShell({
  preview,
  eyebrow,
  title,
  intro,
  children,
  ctaLabel,
  ctaHref,
  outro = "ZION • Desenvolvimento de software sob medida",
}: EmailShellProps) {
  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>{preview}</Preview>
      <Body style={body}>
        <Container style={frame}>
          <Section style={hero}>
            <Text style={eyebrowText}>{eyebrow}</Text>
            <Heading style={titleText}>{title}</Heading>
            <Text style={introText}>{intro}</Text>
            {ctaLabel && ctaHref ? (
              <Button href={ctaHref} style={ctaButton}>
                {ctaLabel}
              </Button>
            ) : null}
          </Section>

          <Section style={card}>{children}</Section>

          <Hr style={divider} />

          <Text style={footerText}>{outro}</Text>
        </Container>
      </Body>
    </Html>
  )
}

export const emailStyles = {
  colors,
  sectionTitle: {
    color: colors.text,
    fontFamily:
      "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "0.16em",
    lineHeight: "1.3",
    margin: "0 0 14px",
    textTransform: "uppercase" as const,
  },
  bodyText: {
    color: colors.text,
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "15px",
    lineHeight: "1.7",
    margin: "0",
  },
  mutedText: {
    color: colors.muted,
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
    margin: "0",
  },
  insetCard: {
    backgroundColor: colors.inset,
    borderRadius: "26px",
    marginBottom: "18px",
    padding: "22px 24px",
  },
  dataLabel: {
    color: colors.muted,
    display: "block",
    fontFamily:
      "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "0.14em",
    lineHeight: "1.2",
    marginBottom: "8px",
    textTransform: "uppercase" as const,
  },
  dataValue: {
    color: colors.text,
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "1.5",
    margin: "0",
  },
}

const body = {
  backgroundColor: colors.page,
  margin: "0",
  padding: "32px 18px",
}

const frame = {
  margin: "0 auto",
  maxWidth: "640px",
}

const hero = {
  background:
    "linear-gradient(135deg, rgba(0,73,219,1) 0%, rgba(41,98,255,1) 100%)",
  borderRadius: "34px",
  padding: "40px 34px 34px",
}

const eyebrowText = {
  color: "#d9e6ff",
  fontFamily:
    "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "12px",
  fontWeight: "800",
  letterSpacing: "0.2em",
  lineHeight: "1.2",
  margin: "0 0 18px",
  textTransform: "uppercase" as const,
}

const titleText = {
  color: "#ffffff",
  fontFamily:
    "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "34px",
  fontWeight: "800",
  letterSpacing: "-0.03em",
  lineHeight: "1.05",
  margin: "0 0 16px",
}

const introText = {
  color: "#edf4ff",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "16px",
  lineHeight: "1.7",
  margin: "0",
}

const ctaButton = {
  backgroundColor: "#ffffff",
  borderRadius: "999px",
  color: colors.accent,
  display: "inline-block",
  fontFamily:
    "'Plus Jakarta Sans', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "12px",
  fontWeight: "800",
  letterSpacing: "0.16em",
  marginTop: "24px",
  padding: "14px 22px",
  textDecoration: "none",
  textTransform: "uppercase" as const,
}

const card = {
  backgroundColor: colors.card,
  borderRadius: "34px",
  marginTop: "-18px",
  padding: "34px",
}

const divider = {
  borderColor: "rgba(255,255,255,0.16)",
  margin: "26px 0 18px",
}

const footerText = {
  color: "#93a8c1",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontSize: "13px",
  lineHeight: "1.6",
  margin: "0",
  textAlign: "center" as const,
}
