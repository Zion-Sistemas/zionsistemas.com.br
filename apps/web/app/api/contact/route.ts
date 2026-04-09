import { NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/contact-form-schema"

export async function POST(request: Request) {
  const body = await request.json()
  const result = contactFormSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json(
      { message: result.error.issues[0]?.message ?? "Formulario invalido." },
      { status: 400 }
    )
  }

  return NextResponse.json({
    message:
      "Recebemos sua solicitacao. A equipe da ZION vai retornar em breve.",
  })
}
