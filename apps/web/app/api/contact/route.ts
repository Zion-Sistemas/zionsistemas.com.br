import { NextResponse } from "next/server"
import { sendContactEmails } from "@/lib/contact-email"
import { contactFormSchema } from "@/lib/contact-form-schema"

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { message: "Nao foi possivel ler os dados enviados." },
      { status: 400 }
    )
  }

  const result = contactFormSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { message: result.error.issues[0]?.message ?? "Formulario invalido." },
      { status: 400 }
    )
  }

  try {
    const delivery = await sendContactEmails(result.data)

    return NextResponse.json({
      message: delivery.confirmationSent
        ? "Recebemos sua solicitacao. A equipe da ZION vai retornar em breve."
        : "Recebemos sua solicitacao. O aviso interno foi entregue e a equipe da ZION vai retornar em breve.",
    })
  } catch (error) {
    console.error("Falha ao processar envio do formulario de contato.", error)

    return NextResponse.json(
      {
        message:
          "Nao foi possivel enviar sua mensagem agora. Tente novamente em instantes.",
      },
      { status: 500 }
    )
  }
}
