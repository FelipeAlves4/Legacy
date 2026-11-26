"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm({ endpoint }: { endpoint: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setFeedback("Confira os campos obrigatórios e informe um e-mail válido.");
      form.querySelector<HTMLInputElement>(":invalid")?.focus();
      return;
    }
    if (!endpoint) {
      setFeedback(
        "O canal de envio está em preparação. Seus dados não foram enviados.",
      );
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setFeedback("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Falha no envio");
      setStatus("sent");
      setFeedback("Mensagem enviada. Obrigado pelo contato.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(
        "Não foi possível enviar a mensagem. Tente novamente mais tarde.",
      );
    }
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <label>
          Seu nome <span>*</span>
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            placeholder="Como podemos chamar você?"
          />
        </label>
        <label>
          E-mail profissional <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="voce@empresa.com"
          />
        </label>
      </div>
      <label>
        Empresa{" "}
        <input
          name="company"
          autoComplete="organization"
          placeholder="Nome da sua empresa"
        />
      </label>
      <label>
        Como podemos ajudar? <span>*</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Conte um pouco sobre o seu desafio"
        />
      </label>
      <div className="form-end">
        <p>
          Os dados serão usados apenas para responder a esta conversa, quando o
          canal estiver ativo.
        </p>
        <button type="submit" disabled={status === "sending"}>
          {" "}
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          <ArrowUpRight size={17} />
        </button>
      </div>
      <p
        className={`form-feedback ${status === "error" ? "is-error" : ""}`}
        role="status"
        aria-live="polite"
      >
        {feedback}
      </p>
    </form>
  );
}
