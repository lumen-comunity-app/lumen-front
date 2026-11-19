import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link aria-label="Lumen, página inicial" className="brand" href="/">
        <Image src="/images/lumen-logo.png?v=2" alt="" width={1024} height={1024} priority unoptimized />
      </Link>
      <nav aria-label="Navegação principal" className="header-nav">
        <Link href="/#universo">O universo</Link>
        <Link href="/#recursos">O que você encontra</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link aria-label="Lumen, página inicial" className="footer-brand" href="/">
        <Image src="/images/lumen-logo.png?v=2" alt="" width={1024} height={1024} unoptimized />
        <span>Um lugar para ser você.</span>
      </Link>
      <div className="footer-links">
        <Link href="/privacy">Privacidade</Link>
        <Link href="/delete">Excluir conta</Link>
        <Link href="/terms">Termos de serviço</Link>
      </div>
      <p className="copyright">© 2026 Lumen. Feito para conectar.</p>
    </footer>
  );
}

export function PolicyPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="policy-main">
        <Link className="back-link" href="/">← Voltar para o início</Link>
        <div className="policy-heading">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <span className="policy-date">Versão inicial · 14 de novembro de 2026</span>
        </div>
        <article className="policy-content">{children}</article>
        <div className="policy-note">
          <span aria-hidden="true">✦</span>
          <p>Este é um texto inicial de apresentação. Entre em contato com a equipe Lumen para dúvidas sobre este documento.</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
