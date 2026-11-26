import Link from "next/link";
export default function NotFound() {
  return (
    <main id="conteudo" className="not-found">
      <div className="container">
        <span>404 / PÁGINA NÃO ENCONTRADA</span>
        <h1>Este caminho ainda não faz parte do nosso mapa.</h1>
        <p>Retorne ao início para explorar o ecossistema Legacy.</p>
        <Link className="button-link" href="/">
          Voltar ao início →
        </Link>
      </div>
    </main>
  );
}
