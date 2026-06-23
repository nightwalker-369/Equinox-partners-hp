// WhyEquinox — typographic brand-meaning moment.
// Written as explicit literal markup (not a .map() over data) so the section
// reads as plain JSX.
export default function WhyEquinox() {
  return (
    <section className="ep-why ep-section--dark" data-screen-label="why-equinox">
      <div className="ep-why__head">
        <span className="ep-section__en ep-section__en--white">Why Equinox</span>
        <span className="ep-eyebrow ep-eyebrow--gold">社名に込めた、3つの意味</span>
      </div>
      <ol className="ep-why__list">
        <li className="ep-why__row">
          <span className="ep-why__n ep-figure">01</span>
          <div className="ep-why__word">
            <span className="ep-why__en">Balance</span>
            <span className="ep-why__jp">均衡</span>
          </div>
          <p className="ep-why__b">どの事業者にもよらず、外部資本も入れない。構造から中立を保つ第三者として動く。</p>
        </li>
        <li className="ep-why__row">
          <span className="ep-why__n ep-figure">02</span>
          <div className="ep-why__word">
            <span className="ep-why__en">Daybreak</span>
            <span className="ep-why__jp">夜明け</span>
          </div>
          <p className="ep-why__b">停滞した共同事業に、最初の一歩を。意思決定を前に進めるきっかけをつくる。</p>
        </li>
        <li className="ep-why__row">
          <span className="ep-why__n ep-figure">03</span>
          <div className="ep-why__word">
            <span className="ep-why__en">Partners</span>
            <span className="ep-why__jp">伴走</span>
          </div>
          <p className="ep-why__b">設計して終わりにしない。専任PMOとして、全員が勝つまで隣で推進する。</p>
        </li>
      </ol>
    </section>
  )
}
