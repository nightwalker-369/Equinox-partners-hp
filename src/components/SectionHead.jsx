// SectionHead — GRIT-style editorial header: big EN label → JP sublabel → JP statement
export default function SectionHead({ en, jp, white, children }) {
  return (
    <div className="ep-section__head">
      <span className={`ep-section__en ${white ? 'ep-section__en--white' : ''}`}>{en}</span>
      <span className={`ep-eyebrow ${white ? 'ep-eyebrow--gold' : ''}`}>{jp}</span>
      {children ? (
        <p className={`ep-section__statement ${white ? 'ep-section__statement--white' : ''}`}>
          {children}
        </p>
      ) : null}
    </div>
  )
}
