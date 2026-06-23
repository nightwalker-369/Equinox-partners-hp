import { useState, useEffect } from 'react'
import SectionHead from './SectionHead.jsx'

// SolutionSection — two solutions (座組設計 + 事業推進) as an auto-advancing carousel
const order = ['zagumi', 'pmo']
const solutions = {
  zagumi: {
    eye: 'SOLUTION 01',
    title: '座組設計',
    lead: '出資比率・ガバナンス・利益分配を、全社が納得できる形で公平に設計する。',
    steps: [
      { n: '01', h: 'ニーズ × シーズの探索', b: '業界横断ネットワークで潜在パートナーを特定' },
      { n: '02', h: '当事者スクリーニング', b: '相性・利害・リソース適合性を多面的に評価' },
      { n: '03', h: '事業スキーム設計', b: '出資比率・ガバナンス・利益分配を公平に設計' },
      { n: '04', h: '条件交渉 & 契約締結', b: '全社の納得を引き出す合意形成をファシリテート' },
    ],
  },
  pmo: {
    eye: 'SOLUTION 02',
    title: '事業推進',
    lead: '座組完了後、専任PMOとして常駐。中立な調整役として、事業を結果まで推進する。',
    steps: [
      { n: '01', h: '戦略・施策立案と実行', b: '中立PMOとして、戦略と施策を立案・実行する' },
      { n: '02', h: 'パートナー間調整', b: '各社の窓口となり、利害を中立的に調整' },
      { n: '03', h: 'KPI設計と進捗管理', b: '週次定例ファシリ、全社共通KPIで透明性を担保' },
      { n: '04', h: '進化・出口設計', b: '事業フェーズの転換・拡張・解消をサポート' },
    ],
  },
}

export default function SolutionSection() {
  const [tab, setTab] = useState('zagumi')
  const [paused, setPaused] = useState(false)
  const s = solutions[tab]
  const idx = order.indexOf(tab)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setTab(order[(idx + 1) % order.length]), 6000)
    return () => clearTimeout(t)
  }, [tab, paused, idx])

  return (
    <section className="ep-section ep-section--white" id="services" data-screen-label="solution">
      <SectionHead en="Our Service" jp="SOLUTION · 座組と推進の一気通貫">
        設計だけで終わらせず、推進まで担う。
      </SectionHead>

      <div className="ep-solution__index">
        <span className="ep-solution__index-n">
          <b>0{idx + 1}</b> / 0{order.length}
        </span>
        <span className="ep-solution__track">
          <i style={{ width: ((idx + 1) / order.length) * 100 + '%' }} />
        </span>
      </div>

      <div
        className="ep-tabs"
        role="tablist"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {Object.entries(solutions).map(([k, v]) => (
          <button
            key={k}
            role="tab"
            aria-selected={tab === k}
            className={`ep-tab ${tab === k ? 'is-active' : ''}`}
            onClick={() => setTab(k)}
          >
            <span className="ep-tab__eye">{v.eye}</span>
            <span className="ep-tab__name">{v.title}</span>
          </button>
        ))}
      </div>

      <div
        className="ep-solution ep-solution__panel"
        key={tab}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="ep-solution__lead">{s.lead}</p>
        <ol className="ep-steps">
          {s.steps.map((step) => (
            <li key={step.n} className="ep-step">
              <span className="ep-step__n ep-figure">{step.n}</span>
              <div>
                <h4 className="ep-step__h">{step.h}</h4>
                <p className="ep-step__b">{step.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
