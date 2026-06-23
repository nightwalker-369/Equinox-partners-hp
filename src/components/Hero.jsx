// Hero — landing hero for EP marketing site (EN-led editorial, GRIT-style)
export default function Hero() {
  return (
    <section className="ep-hero" data-screen-label="hero">
      <div className="ep-grad-bg" aria-hidden="true">
        <span className="ep-blob ep-blob--gold"></span>
        <span className="ep-blob ep-blob--blue"></span>
        <span className="ep-blob ep-blob--navy"></span>
      </div>
      <div className="ep-hero__inner">
        <span className="ep-eyebrow">EQUINOX PARTNERS &middot; 共同事業の専門会社</span>
        <h1 className="ep-display ep-display--en">
          <span className="ep-reveal-line"><span className="ep-grad-text">Designing</span></span>
          <span className="ep-reveal-line"><span className="ep-grad-text">win-win.</span></span>
        </h1>
        <p className="ep-hero__sub">共同事業の、均衡点をつくる。</p>
        <hr className="ep-rule--gold ep-rule--hero" />
        <p className="ep-lead">
          複数社による共同事業を、座組設計から推進まで一気通貫で担う。<br />
          どこにも肩入れしない、中立な第三者として共同事業を推進します。
        </p>
        <div className="ep-hero__cta">
          <a href="#contact" className="ep-btn ep-btn--primary">
            お問い合わせ <span className="ep-arrow">→</span>
          </a>
          <a href="#services" className="ep-btn ep-btn--secondary">
            サービス概要を見る
          </a>
        </div>
      </div>
      <a href="#about" className="ep-scroll" aria-label="スクロール">
        <span className="ep-scroll__t">Scroll</span>
        <span className="ep-scroll__line" aria-hidden="true"></span>
      </a>
    </section>
  )
}
