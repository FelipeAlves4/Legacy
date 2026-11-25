import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { ButtonLink, Kicker, TextLink } from "@/components/ui";
import { PortalAccess } from "@/components/portal-access";
import { ProductPreview } from "@/components/product-preview";
import { ContactForm } from "@/components/contact-form";
import { divisions, site } from "@/config/site";

const pages = {
  sobre: {
    title: "Sobre a Legacy",
    intro: "Um ecossistema para empresas que escolhem evoluir.",
    body: "Acreditamos que empresas não crescem apenas com ferramentas. Crescem quando tecnologia, conhecimento e estratégia trabalham na mesma direção.",
    label: "NOSSA VISÃO",
  },
  ecossistema: {
    title: "Ecossistema",
    intro: "Um propósito. Muitas possibilidades.",
    body: "Três frentes complementares para aproximar a gestão do conhecimento e conectar a estratégia à execução.",
    label: "VISÃO INTEGRADA",
  },
  gestao: {
    title: "Legacy Gestão",
    intro: "Controle que gera clareza.",
    body: "Uma proposta de sistema para organizar operações, conectar equipes e dar visibilidade à gestão. O foco inicial está em obras e operações da construção.",
    label: "PRODUTO EM DESENVOLVIMENTO",
  },
  educacao: {
    title: "Legacy Educação",
    intro: "Conhecimento que se transforma em capacidade.",
    body: "Uma frente dedicada à capacitação e ao desenvolvimento empresarial. A proposta aproxima aprendizado, liderança e execução cotidiana.",
    label: "CONHECIMENTO",
  },
  digital: {
    title: "Legacy Digital",
    intro: "Tecnologia aplicada a desafios reais.",
    body: "Soluções digitais, automação e inteligência artificial pensadas com direção estratégica para apoiar a evolução das empresas.",
    label: "TRANSFORMAÇÃO DIGITAL",
  },
  contato: {
    title: "Contato",
    intro: "Vamos conversar sobre o que vem a seguir.",
    body: "Conte-nos sobre o desafio da sua empresa. O canal de envio será ativado quando a integração comercial estiver disponível.",
    label: "CONVERSA COMERCIAL",
  },
  portal: {
    title: "Portal Legacy",
    intro: "Seu negócio. Seu ambiente.",
    body: "O Portal Legacy será o ponto de acesso aos sistemas contratados. A integração com o ambiente oficial está em preparação.",
    label: "ACESSO AOS SISTEMAS",
  },
  privacidade: {
    title: "Privacidade",
    intro: "Transparência desde o início.",
    body: "A política de privacidade definitiva será publicada antes da ativação dos canais de coleta e dos sistemas Legacy. Neste site, o formulário permanece sem envio enquanto não houver um endpoint configurado.",
    label: "INFORMAÇÕES",
  },
} as const;

type Slug = keyof typeof pages;
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) return {};
  return {
    title: page.title,
    description: page.body,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${page.title} | Legacy`,
      description: page.body,
      url: `/${slug}`,
    },
  };
}

export default async function InteriorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) notFound();
  const division = divisions.find((d) => d.slug === slug);
  return (
    <main id="conteudo" className="interior-main">
      <section className="interior-hero section-dark">
        <div className="container">
          <div className="section-index">
            <span>LEGACY / {page.label}</span>
            <span>INSTITUCIONAL</span>
          </div>
          <div className="interior-hero-grid">
            <div>
              <Kicker>{page.title}</Kicker>
              <h1>{page.intro}</h1>
            </div>
            <div className="interior-hero-side">
              <p>{page.body}</p>
              <span className="interior-orbit" aria-hidden="true">
                <i />
              </span>
            </div>
          </div>
        </div>
      </section>
      {slug === "sobre" && (
        <>
          <section className="interior-section section-light">
            <div className="container interior-split">
              <div>
                <Kicker>O que nos move</Kicker>
                <h2>
                  Conexões que criam <em>possibilidades.</em>
                </h2>
              </div>
              <div>
                <p>
                  A Legacy está sendo estruturada para reunir diferentes
                  competências em uma visão empresarial integrada. A tecnologia
                  oferece meios; educação amplia repertório; gestão transforma
                  informação em direção.
                </p>
                <p>
                  Nosso compromisso conceitual é criar soluções relevantes para
                  os desafios concretos das empresas, com atenção à experiência
                  de quem toma decisões e de quem faz a operação acontecer.
                </p>
                <TextLink href="/ecossistema">Explore o ecossistema</TextLink>
              </div>
            </div>
          </section>
          <div className="interior-photo">
            <Image
              src="/images/architecture.png"
              alt="Escadaria de arquitetura contemporânea iluminada pela luz do sol"
              fill
              sizes="100vw"
            />
          </div>
        </>
      )}
      {slug === "ecossistema" && (
        <section className="interior-section section-light">
          <div className="container">
            <Kicker>Arquitetura de marca</Kicker>
            <h2 className="interior-section-title">
              Uma visão integrada,
              <br />
              <em>frentes complementares.</em>
            </h2>
            <div className="division-list">
              {divisions.map((d) => (
                <Link href={`/${d.slug}`} key={d.slug}>
                  <span>{d.number}</span>
                  <div>
                    <h3>{d.name}</h3>
                    <p>{d.description}</p>
                  </div>
                  <ArrowUpRight size={25} />
                </Link>
              ))}
            </div>
            <p className="configuration-note">
              Os nomes das frentes representam uma arquitetura inicial de marca
              e podem evoluir.
            </p>
          </div>
        </section>
      )}
      {slug === "gestao" && (
        <>
          <section className="interior-section section-light">
            <div className="container">
              <Kicker>Visão do produto</Kicker>
              <div className="interior-split">
                <h2>
                  Uma operação visível.
                  <br />
                  <em>Decisões com contexto.</em>
                </h2>
                <p>
                  O Legacy Gestão parte de um objetivo claro: reunir informações
                  e pessoas para facilitar o acompanhamento de obras e
                  operações. A interface abaixo é conceitual e não representa um
                  produto lançado.
                </p>
              </div>
              <ProductPreview />
            </div>
          </section>
          <section className="interior-section section-dark">
            <div className="container">
              <Kicker>Possibilidades em desenvolvimento</Kicker>
              <div className="feature-lines">
                {[
                  "Gestão de obras",
                  "Equipes e colaboradores",
                  "Acompanhamento operacional",
                  "Informações centralizadas",
                  "Visibilidade de indicadores",
                  "Comunicação entre pessoas",
                ].map((feature, i) => (
                  <div key={feature}>
                    <span>0{i + 1}</span>
                    <h3>{feature}</h3>
                    <ArrowUpRight size={19} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      {(slug === "educacao" || slug === "digital") && (
        <section className="interior-section section-light">
          <div className="container interior-split">
            <div>
              <Kicker>{division?.name}</Kicker>
              <h2>{division?.descriptor}</h2>
            </div>
            <div>
              <p>{division?.description}</p>
              <p>
                {slug === "educacao"
                  ? "A proposta contempla conhecimento aplicado e experiências de aprendizagem para pessoas, equipes e lideranças. Os formatos e programas serão apresentados à medida que forem definidos."
                  : "A frente digital explora integração de sistemas, experiência do usuário, automação e inteligência artificial, sempre a partir do contexto e das prioridades de cada negócio."}
              </p>
              <TextLink href="/contato">
                Converse sobre sua necessidade
              </TextLink>
            </div>
          </div>
        </section>
      )}
      {slug === "contato" && (
        <section className="interior-section section-light">
          <div className="container contact-layout">
            <div>
              <Kicker>Inicie uma conversa</Kicker>
              <h2>
                Seu próximo passo começa com uma <em>boa pergunta.</em>
              </h2>
              <p>
                Descreva sua necessidade. Assim que o canal comercial estiver
                integrado, a equipe poderá receber sua mensagem por aqui.
              </p>
              {site.whatsappNumber && (
                <a
                  className="whatsapp-link"
                  href={`https://wa.me/${site.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conversar pelo WhatsApp <ArrowUpRight size={17} />
                </a>
              )}
            </div>
            <ContactForm endpoint={site.contactEndpoint} />
          </div>
        </section>
      )}
      {slug === "portal" && (
        <section className="interior-section section-light">
          <div className="container portal-page">
            <div className="portal-page-mark" aria-hidden="true">
              L<span>.</span>
            </div>
            <div>
              <Kicker>Entrada do ecossistema</Kicker>
              <h2>Um acesso para as soluções da sua empresa.</h2>
              <p>
                Quando estiver disponível, o portal oficial reunirá o acesso aos
                produtos contratados. Nenhuma credencial é solicitada nesta
                página.
              </p>
              <PortalAccess />
            </div>
          </div>
        </section>
      )}
      {slug === "privacidade" && (
        <section className="interior-section section-light">
          <div className="container interior-split">
            <div>
              <Kicker>Estado atual</Kicker>
              <h2>Informação clara, sem promessas antecipadas.</h2>
            </div>
            <div>
              <p>
                O site institucional utiliza apenas os recursos técnicos
                necessários para apresentar as páginas. Não há autenticação
                local nem envio de formulário sem a configuração de um endpoint
                de contato.
              </p>
              <p>
                A versão final desta página deverá ser revisada com as
                informações oficiais sobre tratamento de dados, canais de
                contato e direitos dos titulares antes da publicação comercial.
              </p>
              <TextLink href="/contato">Ir para contato</TextLink>
            </div>
          </div>
        </section>
      )}
      <section className="interior-cta section-dark">
        <div className="container">
          <div>
            <Kicker>Próximo passo</Kicker>
            <h2>
              Vamos construir o que vem <em>a seguir.</em>
            </h2>
          </div>
          <div>
            <ButtonLink href={slug === "contato" ? "/ecossistema" : "/contato"}>
              {slug === "contato"
                ? "Explore o ecossistema"
                : "Fale com a Legacy"}
            </ButtonLink>
            <Link className="back-home" href="/">
              Voltar ao início <MoveRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
