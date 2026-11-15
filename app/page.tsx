import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./ui";

const GOOGLE_PLAY_URL = "";

const features = [
  {
    number: "01",
    symbol: "◌",
    title: "Fale com liberdade",
    copy: "Compartilhe ideias e desabafos em uma comunidade onde você pode se expressar com mais leveza.",
    tint: "blue",
  },
  {
    number: "02",
    symbol: "↗",
    title: "Conexões de verdade",
    copy: "Conheça pessoas, acompanhe conversas e crie amizades no seu próprio ritmo.",
    tint: "gold",
  },
  {
    number: "03",
    symbol: "✧",
    title: "Histórias que aproximam",
    copy: "Leia histórias da comunidade ou comece a escrever as suas, capítulo por capítulo.",
    tint: "lavender",
  },
];

function PlayButton({ className = "" }: { className?: string }) {
  const buttonContent = (
    <>
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.6 2.7c-.36.38-.6.98-.6 1.77v15.06c0 .8.24 1.4.61 1.78l.1.09 8.44-9.3v-.22L3.7 2.62l-.1.08Zm9.85 10.48-2.62 2.9-6.1 6.72c.5.25 1.13.21 1.82-.18l10.9-6.2-4-3.24Zm5.38-4.8-3.65-2.08-4.35-2.47-6.1-3.46C4.04.03 3.38.02 2.86.3l8.4 9.25 2.66 2.92 4.91-3.98Zm2.02 2.1c0-.83-.28-1.4-.81-1.7l-3.16-1.8-4.2 3.42v.22l4.27 3.47 3.09-1.75c.53-.3.81-.88.81-1.71v-.15Z" />
      </svg>
      <span><small>EM BREVE NA</small><strong>Google Play</strong></span>
      <span className="play-arrow" aria-hidden="true">↗</span>
    </>
  );
  return (
    <div className={`download-action ${className}`}>
      {GOOGLE_PLAY_URL ? (
        <a className="play-button" href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer">{buttonContent}</a>
      ) : (
        <button disabled className="play-button" type="button">{buttonContent}</button>
      )}
      {!GOOGLE_PLAY_URL && <span className="availability">O link de download será adicionado em breve.</span>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="universo">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-star">✦</span> LUMEN — DESABAFOS E AMIZADES</span>
            <h1>Um lugar para<br />ser <span className="ser-voce">você.</span></h1>
            <p className="hero-description">O Lumen é uma comunidade para conversar, compartilhar o que sente e encontrar pessoas que entendem você — com espaço para se expressar do seu jeito.</p>
            <PlayButton className="hero-download" />
            <div className="hero-footnote"><span className="online-dot" /> Um espaço feito para boas conexões</div>
          </div>
          <div className="hero-art" aria-label="Prévia da comunidade Lumen no celular">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="spark spark-two">✧</div>
            <div className="moon-glow" />
            <Image className="app-preview" src="/images/lumen-community.png" alt="Prévia do aplicativo Lumen em um celular, exibindo a comunidade e publicações" width={394} height={858} priority unoptimized />
          </div>
          <a className="scroll-cue" href="#manifesto"><span /> ROLE PARA DESCOBRIR</a>
        </section>

        <section className="manifesto" id="manifesto">
          <div className="manifesto-mark">✦</div>
          <p className="eyebrow">MAIS PERTO, MESMO À DISTÂNCIA</p>
          <h2>Às vezes, tudo começa<br />com um <span>“oi”.</span></h2>
          <p className="manifesto-copy">Tem coisa que fica mais fácil quando a gente encontra um espaço para falar. No Lumen, cada conversa abre uma possibilidade: dividir o dia, ouvir uma nova perspectiva ou encontrar uma amizade inesperada.</p>
        </section>

        <section className="features-section" id="recursos">
          <div className="section-heading">
            <div><span className="eyebrow">O SEU PRÓXIMO CAPÍTULO</span><h2>Um universo inteiro<br />para descobrir.</h2></div>
            <p>Encontre novas formas de se expressar e de se aproximar de quem está por aí.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className={`feature-card ${feature.tint}`} key={feature.number}>
                <div className="feature-top"><span>{feature.number} / LUMEN</span><span className="feature-symbol">{feature.symbol}</span></div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
                <span className="feature-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="community-strip">
          <div className="strip-emblem"><Image src="/images/lumen-emblem.png" alt="" width={116} height={116} /></div>
          <div><span className="eyebrow">UMA COMUNIDADE COM ESPAÇO PARA TODO MUNDO</span><h2>Chegue como você é.</h2><p>Converse com respeito, cuide dos seus limites e ajude a fazer do Lumen um lugar acolhedor.</p></div>
          <Link href="/privacy" className="text-link">Conheça nosso compromisso <span>↗</span></Link>
        </section>

        <section className="download-section" id="download">
          <div className="download-stars" aria-hidden="true">✦　·　✧　　·　✦</div>
          <span className="eyebrow">SUA PRÓXIMA CONVERSA ESTÁ A UM TOQUE</span>
          <h2>Vamos acender<br />essa conexão?</h2>
          <p>Baixe o aplicativo Lumen e faça parte da comunidade.</p>
          <PlayButton className="download-centered" />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
