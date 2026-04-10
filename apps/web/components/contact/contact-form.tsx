"use client"

import { useMutation } from "@tanstack/react-query"
import { useForm } from "@tanstack/react-form"
import {
  ArrowPathIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline"
import { startTransition } from "react"
import {
  contactProjectTypes,
  contactFormSchema,
  formatBrazilianPhone,
  type ContactFormValues,
  zodResolver,
} from "@/lib/contact-form-schema"

type ContactResponse = {
  message: string
}

const inputClassName =
  "w-full rounded-[1.75rem] bg-[#eceef0] px-5 py-4 text-sm text-[#191c1e] placeholder:text-[#191c1e]/35 outline-none transition-all duration-200 focus:bg-white focus:ring-1 focus:ring-[#0049db]/40 focus:shadow-[0_0_0_6px_rgba(0,73,219,0.08)]"

const labelClassName =
  "mb-3 block text-[0.72rem] font-bold tracking-[0.14em] text-[#191c1e]/55 uppercase"

const fieldErrorClassName = "mt-2 text-sm text-[#9e3500]"

function getFieldError(errors: unknown[]) {
  const firstError = errors[0]

  if (typeof firstError === "string") {
    return firstError
  }

  return undefined
}

async function submitContactForm(values: ContactFormValues) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })

  const data = (await response.json()) as ContactResponse

  if (!response.ok) {
    throw new Error(data.message || "Nao foi possivel enviar sua mensagem.")
  }

  return data
}

export function ContactForm() {
  const submitMutation = useMutation({
    mutationFn: submitContactForm,
  })

  const defaultValues: ContactFormValues = {
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "Sistema sob medida",
    message: "",
  }

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: contactFormSchema,
    },
    onSubmit: async ({ value }) => {
      await submitMutation.mutateAsync(value)

      startTransition(() => {
        form.reset()
      })
    },
  })

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_30px_80px_rgba(13,28,50,0.12)] md:p-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(0,73,219,0.08),transparent)]" />

      <div className="relative mb-8">
        <div className="max-w-md">
          <p className="mb-3 text-[0.72rem] font-black tracking-[0.22em] text-[#0049db]">
            ENTRAR EM CONTATO
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-black tracking-[-0.02em] text-[#191c1e] md:text-4xl">
            Conte o que trava sua operação hoje.
          </h2>
        </div>
      </div>

      <form
        className="relative space-y-6"
        onSubmit={(event) => {
          event.preventDefault()
          event.stopPropagation()
          void form.handleSubmit()
        }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <form.Field
            name="name"
            validators={{
              onChange: zodResolver("name"),
              onSubmit: zodResolver("name"),
            }}
          >
            {(field) => (
              <label className="block">
                <span className={labelClassName}>Nome</span>
                <input
                  autoFocus
                  className={inputClassName}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Seu nome completo"
                />
                {getFieldError(field.state.meta.errors) ? (
                  <p className={fieldErrorClassName}>
                    {getFieldError(field.state.meta.errors)}
                  </p>
                ) : null}
              </label>
            )}
          </form.Field>

          <form.Field
            name="email"
            validators={{
              onChange: zodResolver("email"),
              onSubmit: zodResolver("email"),
            }}
          >
            {(field) => (
              <label className="block">
                <span className={labelClassName}>E-mail</span>
                <input
                  className={inputClassName}
                  name={field.name}
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="voce@empresa.com.br"
                />
                {getFieldError(field.state.meta.errors) ? (
                  <p className={fieldErrorClassName}>
                    {getFieldError(field.state.meta.errors)}
                  </p>
                ) : null}
              </label>
            )}
          </form.Field>
        </div>

        <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
          <form.Field
            name="company"
            validators={{
              onChange: zodResolver("company"),
              onSubmit: zodResolver("company"),
            }}
          >
            {(field) => (
              <label className="block">
                <span className={labelClassName}>Empresa</span>
                <input
                  className={inputClassName}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Nome da empresa"
                />
                {getFieldError(field.state.meta.errors) ? (
                  <p className={fieldErrorClassName}>
                    {getFieldError(field.state.meta.errors)}
                  </p>
                ) : null}
              </label>
            )}
          </form.Field>

          <form.Field
            name="phone"
            validators={{
              onChange: zodResolver("phone"),
              onSubmit: zodResolver("phone"),
            }}
          >
            {(field) => (
              <label className="block">
                <span className={labelClassName}>WhatsApp</span>
                <input
                  className={inputClassName}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) =>
                    field.handleChange(formatBrazilianPhone(event.target.value))
                  }
                  placeholder="(11) 99999-9999"
                  inputMode="numeric"
                  autoComplete="tel"
                />
                {getFieldError(field.state.meta.errors) ? (
                  <p className={fieldErrorClassName}>
                    {getFieldError(field.state.meta.errors)}
                  </p>
                ) : null}
              </label>
            )}
          </form.Field>
        </div>

        <form.Field
          name="projectType"
          validators={{
            onChange: zodResolver("projectType"),
            onSubmit: zodResolver("projectType"),
          }}
        >
          {(field) => (
            <label className="block">
              <span className={labelClassName}>Tipo de projeto</span>
              <div className="relative">
                <select
                  className={`${inputClassName} appearance-none pr-14`}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) =>
                    field.handleChange(
                      event.target.value as ContactFormValues["projectType"]
                    )
                  }
                >
                  {contactProjectTypes.map((projectType) => (
                    <option key={projectType} value={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#191c1e]/55">
                  <ChevronDownIcon className="size-5" />
                </span>
              </div>
              {getFieldError(field.state.meta.errors) ? (
                <p className={fieldErrorClassName}>
                  {getFieldError(field.state.meta.errors)}
                </p>
              ) : null}
            </label>
          )}
        </form.Field>

        <form.Field
          name="message"
          validators={{
            onChange: zodResolver("message"),
            onSubmit: zodResolver("message"),
          }}
        >
          {(field) => (
            <label className="block">
              <span className={labelClassName}>Mensagem</span>
              <textarea
                className={`${inputClassName} min-h-36 resize-y`}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => field.handleChange(event.target.value)}
                placeholder="Explique o processo que precisa organizar, integrar ou transformar."
              />
              {getFieldError(field.state.meta.errors) ? (
                <p className={fieldErrorClassName}>
                  {getFieldError(field.state.meta.errors)}
                </p>
              ) : null}
            </label>
          )}
        </form.Field>

        {submitMutation.isError ? (
          <div className="rounded-[1.5rem] bg-[#fff4ef] px-5 py-4 text-sm text-[#9e3500]">
            {submitMutation.error.message}
          </div>
        ) : null}

        {submitMutation.isSuccess ? (
          <div className="flex items-start gap-3 rounded-[1.5rem] bg-[#eff6ff] px-5 py-4 text-sm text-[#0d1c32]">
            <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-[#0049db]" />
            <p>{submitMutation.data.message}</p>
          </div>
        ) : null}

        <div className="flex flex-col gap-4 border-t border-[#c3c5d8]/20 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-[#191c1e]/55">
            Respondemos com direcionamento inicial, escopo recomendado e
            proximos passos.
          </p>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting] as const}
          >
            {([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0049db] px-8 py-3.5 text-sm font-bold tracking-[0.14em] text-white whitespace-nowrap transition-all duration-200 hover:scale-[1.02] hover:bg-[#2962ff] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <ArrowPathIcon className="size-4 animate-spin" />
                    ENVIANDO
                  </>
                ) : (
                  <>
                    SOLICITAR CONTATO
                    <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            )}
          </form.Subscribe>
        </div>
      </form>
    </div>
  )
}
