// CompanyOverview — 会社概要 (formal corporate information table)
import SectionHead from './SectionHead.jsx'

const COMPANY_ROWS = [
  { en: 'Company',       ja: '商号',     value: <>Equinox Partners 株式会社</> },
  { en: 'Founded',       ja: '設立',     value: <>2021年12月16日</> },
  { en: 'Operations',    ja: '事業開始', value: <>2026年5月1日</> },
  { en: 'Representative', ja: '代表者',   value: <>代表取締役社長　新井 康太</> },
  { en: 'Head Office',   ja: '所在地',   value: <>〒251-0025<br />神奈川県藤沢市鵠沼石上2-5-1<br />湘南鵠沼BLD3C</> },
  { en: 'Services',      ja: '事業内容', value: <>共同事業の座組設計（座組デザイン）<br />事業推進PMO（伴走推進）</> },
]

export default function CompanyOverview() {
  return (
    <section id="company" className="ep-section ep-section--paper" data-screen-label="company">
      <SectionHead en="Company" jp="COMPANY · 会社概要" />
      <dl className="ep-company">
        {COMPANY_ROWS.map((r) => (
          <div className="ep-company__row" key={r.ja}>
            <dt className="ep-company__term">
              <span className="ep-company__term-en">{r.en}</span>
              <span className="ep-company__term-ja">{r.ja}</span>
            </dt>
            <dd className="ep-company__desc">{r.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
