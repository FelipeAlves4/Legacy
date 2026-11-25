import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./brand";
import { divisions, navigation, site } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-lead">
            <Brand />
            <p>
              Tecnologia, educação e gestão em um ecossistema para empresas que
              querem evoluir.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>Institucional</span>
              {navigation.map((i) => (
                <Link href={i.href} key={i.href}>
                  {i.label}
                </Link>
              ))}
            </div>
            <div>
              <span>Ecossistema</span>
              {divisions.map((i) => (
                <Link href={`/${i.slug}`} key={i.slug}>
                  {i.name}
                </Link>
              ))}
            </div>
            <div>
              <span>Conexões</span>
              <Link href="/portal">Área do Cliente</Link>
              <Link href="/contato">Fale com a Legacy</Link>
              {site.linkedinUrl && (
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <ArrowUpRight size={13} />
                </a>
              )}
              {site.instagramUrl && (
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Legacy. Todos os direitos reservados.
          </span>
          <Link href="/privacidade">Privacidade</Link>
          <span>Construindo o futuro dos negócios.</span>
        </div>
      </div>
    </footer>
  );
}
