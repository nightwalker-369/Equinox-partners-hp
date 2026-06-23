import SectionHead from './SectionHead.jsx'

// CaseStudyCards — case study teasers
const cases = [
  {
    tag: 'CASE STUDY 01',
    typeChip: '事業推進 · 業務提携',
    title: 'スタートアップ × 大手の業務提携',
    body: '将来的なM&A・資本提携を見据えた業務提携の実現を、推進役不足で停滞しがちな現場で中立PMOがリード。',
  },
  {
    tag: 'CASE STUDY 02',
    typeChip: '座組設計 · コンソーシアム',
    title: '業界80%シェア3社のデータ統合',
    body: 'Databricks + Unity Catalog + メダリオンアーキテクチャでガバナンスを担保しつつ、業界ビッグデータを構築。',
  },
]

export default function CaseStudyCards() {
  return (
    <section className="ep-section ep-section--paper" id="cases" data-screen-label="cases">
      <SectionHead en="Case Studies" jp="CASE STUDIES · 実績">
        中立な座組と推進が、事業を動かす。
      </SectionHead>
      <div className="ep-case-grid">
        {cases.map((c) => (
          <article className="ep-case" key={c.tag}>
            <span className="ep-eyebrow ep-eyebrow--sm">{c.tag}</span>
            <h3 className="ep-case__h">{c.title}</h3>
            <hr className="ep-rule--gold" />
            <p className="ep-case__b">{c.body}</p>
            <div className="ep-case__meta">
              <span className="ep-chip ep-chip--neutral">{c.typeChip}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
