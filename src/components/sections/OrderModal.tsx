"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

interface OrderModalProps {
  projectTitle: string;
  variant?: "button" | "link";
}

export function OrderModal({ projectTitle, variant = "button" }: OrderModalProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function openModal() {
    setOpen(true);
    setSubmitted(false);
    setError("");
  }

  function closeModal() {
    setOpen(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email (or leave it empty).");
      return;
    }

    const text = [
      "Hi CGTechVibes! 👋",
      "",
      "*Name:* " + name.trim(),
      email.trim() ? "*Email:* " + email.trim() : "",
      "*Project:* " + projectTitle,
      "",
      "I would like to order this Project App. Please send me the Payment link or QR Code. Thank you!",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={
          variant === "button"
            ? "inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-green-500/25 transition-all duration-300 hover:brightness-110 active:scale-95"
            : "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        }
      >
        <MessageCircle className="h-4 w-4" />
        {variant === "button" ? "Order Now" : `Interested? Order ${projectTitle} on WhatsApp`}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-2xl">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold tracking-tight">Place an Order</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  We&apos;ll send you the payment link on WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center py-6 text-center">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-green-500 text-white shadow-lg shadow-green-500/25">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold">WhatsApp opened!</h4>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your order message is ready in WhatsApp — just press send.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-5 rounded-xl bg-green-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-500/25 transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="order-name" className="mb-1.5 block text-sm font-medium">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="order-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="order-email" className="mb-1.5 block text-sm font-medium">
                    Email <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="order-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="order-project" className="mb-1.5 block text-sm font-medium">
                    Project
                  </label>
                  <input
                    id="order-project"
                    type="text"
                    readOnly
                    value={projectTitle}
                    className="w-full cursor-default rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm font-semibold text-muted-foreground outline-none"
                  />
                </div>

                {error && (
                  <p className="text-sm font-medium text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/40 hover:brightness-110 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Place Order
                </button>

                <p className="text-center text-xs italic text-muted-foreground">
                  Product link will be shipped via email or WhatsApp after
                  payment is completed.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
