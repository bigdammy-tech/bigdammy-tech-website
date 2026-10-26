import { useState } from "react";
import { SITE, PROJECT_TYPES, BUDGETS } from "./data";

const empty = { name: "", email: "", type: PROJECT_TYPES[0], details: "", budget: BUDGETS[4], deadline: "" };

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (!SITE.formspreeId) {
      // Fallback until Formspree is set up: opens the visitor's email app.
      const body = Object.entries(form).map(([k, v]) => `${k}: ${v}`).join("\n");
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("New project request: " + form.type)}&body=${encodeURIComponent(body)}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent")
    return <p className="notice" role="status">Request sent. We will reply to {form.email || "your email"} soon.</p>;

  return (
    <form className="form" onSubmit={submit}>
      <label>Your name<input required value={form.name} onChange={set("name")} autoComplete="name" /></label>
      <label>Email<input required type="email" value={form.email} onChange={set("email")} autoComplete="email" /></label>
      <label>What do you need?
        <select value={form.type} onChange={set("type")}>{PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}</select>
      </label>
      <label>Budget
        <select value={form.budget} onChange={set("budget")}>{BUDGETS.map((b) => <option key={b}>{b}</option>)}</select>
      </label>
      <label className="wide">Tell us about your idea
        <textarea required rows="5" value={form.details} onChange={set("details")} />
      </label>
      <label>Preferred deadline<input type="date" value={form.deadline} onChange={set("deadline")} /></label>
      <div className="form-actions">
        <button className="btn gold" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send request"}</button>
        <a className="btn ghost" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
      </div>
      {status === "error" && <p className="notice err" role="alert">Could not send. Check your connection and try again, or use WhatsApp.</p>}
    </form>
  );
}
