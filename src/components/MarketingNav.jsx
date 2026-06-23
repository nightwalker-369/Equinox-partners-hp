import logoHorizontal from '../assets/logo-horizontal-v2.png'

const links = [
  { id: 'about', label: '事業概要' },
  { id: 'services', label: 'サービス' },
  { id: 'cases', label: '事例' },
  { id: 'profile', label: '代表紹介' },
  { id: 'company', label: '会社概要' },
]

export default function MarketingNav({ active = 'home' }) {
  return (
    <header className="ep-nav">
      <a href="#" className="ep-nav__brand">
        <img src={logoHorizontal} alt="Equinox Partners" />
      </a>
      <nav className="ep-nav__links">
        {links.map((l) => (
          <a
            key={l.id}
            className={`ep-nav__link ${active === l.id ? 'is-active' : ''}`}
            href={`#${l.id}`}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="ep-btn ep-btn--primary ep-btn--sm">
          お問い合わせ <span className="ep-arrow">→</span>
        </a>
      </nav>
    </header>
  )
}
