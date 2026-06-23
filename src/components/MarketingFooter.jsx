// MarketingFooter — site footer (editorial, page-matched)
export default function MarketingFooter() {
  return (
    <footer className="ep-footer ep-section--dark">
      <div className="ep-footer__top">
        <div className="ep-footer__brandblock">
          <span className="ep-footer__wordmark">Equinox&nbsp;Partners</span>
          <p className="ep-footer__tag">共同事業の、均衡点をつくる。</p>
          <a href="#contact" className="ep-footer__cta">
            お問い合わせ <span className="ep-arrow">→</span>
          </a>
        </div>
        <div className="ep-footer__cols">
          <div>
            <h5 className="ep-footer__h">Service</h5>
            <a href="#services">座組設計</a>
            <a href="#services">事業推進PMO</a>
          </div>
          <div>
            <h5 className="ep-footer__h">Company</h5>
            <a href="#about">事業概要</a>
            <a href="#cases">事例</a>
            <a href="#profile">代表紹介</a>
          </div>
          <div>
            <h5 className="ep-footer__h">Contact</h5>
            <p className="ep-footer__addr">
              〒251-0025<br />
              神奈川県藤沢市鵠沼石上2-5-1<br />
              湘南鵠沼BLD3C
            </p>
          </div>
        </div>
      </div>
      <div className="ep-footer__legal">
        <span>© 2026 Equinox Partners 株式会社</span>
        <span className="ep-footer__legalmark">
          EQUINOX <em>·</em> PARTNERS
        </span>
      </div>
    </footer>
  )
}
