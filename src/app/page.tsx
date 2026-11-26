import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MoveRight } from "lucide-react";
import { ButtonLink, Kicker, TextLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ProductPreview } from "@/components/product-preview";
import { PortalAccess } from "@/components/portal-access";
import { divisions, site } from "@/config/site";

export default function Home() {
  return (
    <main id="conteudo">
      <section className="hero" aria-labelledby="hero-title">
        <Image
          className="hero-image"
          src="/images/legacy-sculpture.png"
          alt="Escultura arquitetônica conceitual em forma de L, com metal escuro e luz dourada"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy">
            <h1 id="hero-title">
              Inovação que
              <br /> constrói <em>legados.</em>
            </h1>
            <p>{site.description}</p>
            <div className="hero-actions">
              <ButtonLink href="/ecossistema">Explore o ecossistema</ButtonLink>
              <ButtonLink href="/gestao" outline>
                Conheça nossas soluções
              </ButtonLink>
            </div>
          </div>
          <div className="hero-caption">
            <span>LEGACY / FORMA & VISÃO</span>
            <span>01 — 03</span>
          </div>
        </div>
        <a
          className="hero-scroll"
          href="#manifesto"
          aria-label="Rolar para o manifesto"
        >
          <ArrowDownRight size={20} />
        </a>
      </section>

      <section className="manifesto section-light" id="manifesto">
        <div className="container">
          <div className="section-index">
            <span>01 / MANIFESTO</span>
            <span>UMA VISÃO DE FUTURO</span>
          </div>
          <Reveal className="manifesto-grid">
            <h2>
              O futuro não se espera.
              <br />
              <em>Se constrói.</em>
            </h2>
            <div className="manifesto-aside">
              <span className="fine-rule" />
              <p>
                Empresas avançam quando conhecimento, tecnologia e estratégia
                trabalham na mesma direção.
              </p>
              <p>
                É dessa conexão que nascem operações mais claras, decisões
                melhores e novas possibilidades de crescimento.
              </p>
              <TextLink href="/sobre">Conheça a Legacy</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ecosystem section-dark" id="ecossistema">
        <div className="container">
          <div className="section-index">
            <span>02 / ECOSSISTEMA</span>
            <span>TRÊS FRENTES, UMA DIREÇÃO</span>
          </div>
          <Reveal className="ecosystem-head">
            <div>
              <Kicker>O ecossistema Legacy</Kicker>
              <h2>
                Um propósito.
                <br />
                <em>Muitas possibilidades.</em>
              </h2>
            </div>
            <p>
              Uma arquitetura de soluções que aproxima gestão, aprendizado e
              transformação digital.
            </p>
          </Reveal>
          <div className="division-grid">
            <Link className="division division-gestao" href="/gestao">
              <span className="division-number">
                {divisions[0].number} / GESTÃO
              </span>
              <span
                className="division-graphic graphic-gestao"
                aria-hidden="true"
              >
                <i />
                <i />
                <i />
              </span>
              <span className="division-bottom">
                <span>
                  <strong>{divisions[0].name}</strong>
                  <small>{divisions[0].description}</small>
                </span>
                <ArrowUpRight size={24} />
              </span>
            </Link>
            <div className="division-stack">
              <Link className="division division-educacao" href="/educacao">
                <span className="division-number">
                  {divisions[1].number} / CONHECIMENTO
                </span>
                <span
                  className="division-graphic graphic-educacao"
                  aria-hidden="true"
                >
                  <i />
                  <i />
                  <i />
                </span>
                <span className="division-bottom">
                  <span>
                    <strong>{divisions[1].name}</strong>
                    <small>{divisions[1].description}</small>
                  </span>
                  <ArrowUpRight size={24} />
                </span>
              </Link>
              <Link className="division division-digital" href="/digital">
                <span className="division-number">
                  {divisions[2].number} / TRANSFORMAÇÃO
                </span>
                <span
                  className="division-graphic graphic-digital"
                  aria-hidden="true"
                >
                  <i />
                  <i />
                  <i />
                </span>
                <span className="division-bottom">
                  <span>
                    <strong>{divisions[2].name}</strong>
                    <small>{divisions[2].description}</small>
                  </span>
                  <ArrowUpRight size={24} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="product section-light" id="solucoes">
        <div className="container">
          <div className="section-index">
            <span>03 / SOLUÇÃO EM DESTAQUE</span>
            <span>LEGACY GESTÃO</span>
          </div>
          <Reveal className="product-intro">
            <div>
              <Kicker>Gestão que aproxima</Kicker>
              <h2>
                Controle que
                <br />
                <em>gera clareza.</em>
              </h2>
            </div>
            <div>
              <p>
                Uma visão integrada para conectar pessoas, obras e operações. O
                Legacy Gestão está em desenvolvimento com foco inicial no setor
                da construção.
              </p>
              <TextLink href="/gestao">Explore o Legacy Gestão</TextLink>
            </div>
          </Reveal>
          <Reveal>
            <ProductPreview />
          </Reveal>
          <div className="product-foot">
            <span>GESTÃO DE OBRAS</span>
            <span>EQUIPES CONECTADAS</span>
            <span>VISIBILIDADE OPERACIONAL</span>
            <span>INFORMAÇÃO CENTRALIZADA</span>
          </div>
        </div>
      </section>

      <section className="technology section-dark">
        <div className="container technology-layout">
          <div className="technology-copy">
            <div className="section-index">
              <span>04 / TECNOLOGIA</span>
            </div>
            <Reveal>
              <Kicker>Inteligência aplicada</Kicker>
              <h2>
                Tecnologia com propósito.
                <br />
                <em>Inovação com direção.</em>
              </h2>
              <p>
                Integração, automação e experiência trabalham juntas para tornar
                a operação mais conectada e preparar empresas para evoluir.
              </p>
              <TextLink href="/digital" light>
                Conheça Legacy Digital
              </TextLink>
            </Reveal>
          </div>
          <div
            className="network"
            aria-label="Diagrama conceitual de sistemas conectados"
          >
            <svg
              viewBox="0 0 650 540"
              fill="none"
              role="img"
              aria-hidden="true"
            >
              <circle
                cx="325"
                cy="270"
                r="199"
                stroke="currentColor"
                opacity=".16"
              />
              <circle
                cx="325"
                cy="270"
                r="130"
                stroke="currentColor"
                opacity=".25"
              />
              <circle
                cx="325"
                cy="270"
                r="64"
                stroke="currentColor"
                opacity=".35"
              />
              <path
                d="M325 71v398M126 270h398M184 129l282 282M466 129 184 411"
                stroke="currentColor"
                opacity=".14"
              />
              <path
                d="M325 270 173 125M325 270l215 22M325 270 198 453M325 270l96-213M325 270l237 379"
                stroke="#C9AA73"
                opacity=".62"
              />
              <g fill="#C9AA73">
                <circle cx="325" cy="270" r="8" />
                <circle cx="173" cy="125" r="4" />
                <circle cx="540" cy="292" r="4" />
                <circle cx="198" cy="453" r="4" />
                <circle cx="421" cy="213" r="4" />
                <circle cx="237" cy="379" r="4" />
              </g>
            </svg>
            <span className="network-label n1">INTEGRAÇÃO</span>
            <span className="network-label n2">AUTOMAÇÃO</span>
            <span className="network-label n3">EXPERIÊNCIA</span>
            <span className="network-label n4">SEGURANÇA</span>
            <span className="network-center">
              LEGACY<span>ECOSSISTEMA</span>
            </span>
          </div>
        </div>
        <div className="container tech-bottom">
          <span>EFICIÊNCIA OPERACIONAL</span>
          <span>INTELIGÊNCIA ARTIFICIAL</span>
          <span>ESCALABILIDADE</span>
        </div>
      </section>

      <section className="about-strip section-light" id="sobre">
        <div className="about-image">
          <Image
            src="/images/architecture.png"
            alt="Arquitetura contemporânea em concreto, vidro e luz natural"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="about-content">
          <Kicker>Sobre a Legacy</Kicker>
          <Reveal>
            <h2>
              Construir o amanhã exige <em>visão hoje.</em>
            </h2>
            <p>
              Acreditamos que empresas não crescem apenas com ferramentas.
              Crescem quando tecnologia, conhecimento e estratégia trabalham na
              mesma direção.
            </p>
            <TextLink href="/sobre">Nossa visão</TextLink>
          </Reveal>
        </div>
      </section>

      <section className="portal-band section-dark">
        <div className="container portal-layout">
          <div>
            <Kicker>Portal Legacy</Kicker>
            <h2>
              Seu negócio.
              <br />
              <em>Seu ambiente.</em>
            </h2>
            <p>
              O Portal Legacy será o ponto de acesso aos produtos contratados,
              em um ambiente integrado.
            </p>
          </div>
          <div className="portal-action">
            <span className="portal-symbol" aria-hidden="true">
              L<span>.</span>
            </span>
            <PortalAccess />
          </div>
        </div>
      </section>

      <section className="closing section-light" id="contato">
        <div className="container">
          <div className="section-index">
            <span>05 / PRÓXIMO PASSO</span>
            <span>VAMOS CONSTRUIR JUNTOS</span>
          </div>
          <Reveal className="closing-grid">
            <div>
              <h2>
                O próximo legado
                <br />
                <em>começa aqui.</em>
              </h2>
              <p>
                Conte o que sua empresa precisa transformar. Vamos descobrir o
                caminho possível.
              </p>
            </div>
            <div className="closing-actions">
              <Link href="/contato" className="closing-main">
                Falar com a Legacy <MoveRight size={25} />
              </Link>
              <Link href="/ecossistema" className="closing-secondary">
                Conhecer as soluções <ArrowUpRight size={19} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
