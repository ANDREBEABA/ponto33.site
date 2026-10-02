import { waLink } from "@/lib/site";
import { IconWhatsApp } from "./icons";

// Botão flutuante de WhatsApp presente em todas as páginas.
export function WhatsAppButton() {
  return (
    <a
      className="fab"
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}
