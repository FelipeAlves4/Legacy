import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { site } from "@/config/site";

export function PortalAccess() {
  if (!site.portalUrl)
    return (
      <div className="portal-state">
        <LockKeyhole size={20} strokeWidth={1.5} />
        <div>
          <strong>Integração em preparação</strong>
          <p>
            O acesso será disponibilizado aqui quando a URL oficial do Portal
            Legacy estiver configurada.
          </p>
        </div>
      </div>
    );
  return (
    <a
      className="button-link"
      href={site.portalUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Acessar Portal Legacy <ArrowUpRight size={18} />
    </a>
  );
}
