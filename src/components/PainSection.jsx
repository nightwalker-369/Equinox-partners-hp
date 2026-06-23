import SectionHead from './SectionHead.jsx'

// PainSection — three-pain teaser
const pains = [
  { n: '01', h: '推進役のリソース不足', b: '経営層や担当者は自社ビジネスに忙殺されがち。共同事業への投資は後回しになり、調整や意思決定が遅延する。' },
  { n: '02', h: '中立的な推進役の不在', b: '特に競合同士の連携では利害が複雑化する。中立的な調整役がいないと成り立たないスキームがある。' },
  { n: '03', h: '公平性と利益配分の歪み', b: '各社の投資規模や期待値のズレが公平性の欠如を生む。不公平感はコミットメント低下を招く最大のリスク要因。' },
]

export default function PainSection() {
  return (
    <section className="ep-section ep-section--paper" data-screen-label="pain">
      <SectionHead en="The Challenge" jp="PAIN · 構造的な3つの壁">
        <span className="ep-nobreak">共同事業はイノベーションの強力な手段。</span>
        <span className="ep-nobreak">ただし、構造的な壁が存在する。</span>
      </SectionHead>
      <div className="ep-pain-grid">
        {pains.map((p) => (
          <article key={p.n} className="ep-pain">
            <span className="ep-pain__n ep-figure">{p.n}</span>
            <hr className="ep-rule--gold ep-rule--gold-tight" />
            <h3 className="ep-pain__h">{p.h}</h3>
            <p className="ep-pain__b">{p.b}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
