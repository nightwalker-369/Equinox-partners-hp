import SectionHead from './SectionHead.jsx'
import araiPhoto from '../assets/arai.png'

// Profile — 代表紹介 (CEO profile)
const career = [
  '株式会社エアトリに新卒一期生として入社、入社1年半でチーフ職を飛級しマネージャーに就任。GREE社や電通社との合弁会社設立や業務連携、DeNAハノイ社のM&A後のPMI含む複数の共同事業や事業提携、M&Aに関わる。',
  '2019年当時連結子会社であった株式会社ハイブリッドテクノロジーズへ転籍。',
  '2021年、役員として東証マザーズ上場を経験。',
  '営業、開発、プロジェクトマネージメント、サービスデザイン、UXデザインなど幅広い部門の責任者を歴任。',
  '電通社との合弁会社の吸収合併、サークレイス社との合弁会社推進を経験。',
  '2025年5月に独立、2026年6月にEquinox Partners株式会社を設立し代表取締役社長に就任（創業は2021年12月）。',
]

export default function Profile() {
  return (
    <section id="profile" className="ep-section ep-section--white" data-screen-label="profile">
      <SectionHead en="Profile" jp="PROFILE · 代表紹介" />
      <div className="ep-profile">
        <aside className="ep-profile__aside">
          <img className="ep-profile__photo" src={araiPhoto} alt="新井 康太" />
          <div className="ep-profile__id">
            <span className="ep-profile__role">代表取締役社長</span>
            <h3 className="ep-profile__name">
              新井 康太<span className="ep-profile__name-en">Kota Arai</span>
            </h3>
            <hr className="ep-rule--gold" style={{ margin: '16px 0 0' }} />
          </div>
        </aside>
        <ol className="ep-timeline">
          {career.map((t, i) => (
            <li key={i} className="ep-timeline__row">
              <p className="ep-timeline__t">{t}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
