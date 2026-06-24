import { useState } from 'react'

// Contact form submission endpoint.
// Replace YOUR_FORM_ID with the Formspree form URL once created (https://formspree.io).
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

// ContactBlock — dark CTA block + contact form (wired to a form-mail endpoint)
export default function ContactBlock() {
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const submit = async (e) => {
    e.preventDefault()
    if (!FORM_ENDPOINT || FORM_ENDPOINT.indexOf('YOUR_FORM_ID') !== -1) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="ep-section ep-section--dark" id="contact">
      <div className="ep-contact">
        <div>
          <span className="ep-section__en ep-section__en--white">Contact</span>
          <span className="ep-eyebrow ep-eyebrow--gold">CONTACT · お問い合わせ</span>
          <h2 className="ep-h2 ep-h2--white">
            共同事業の構想は、<br />
            初期の壁打ちから。
          </h2>
          <p className="ep-lead ep-lead--muted">
            座組検討の前段階でも構いません。<br />
            初回相談は無料、守秘で対応します。
          </p>
        </div>
        <form className="ep-form" onSubmit={submit}>
          {status === 'done' ? (
            <div className="ep-form__thanks">
              <span className="ep-eyebrow ep-eyebrow--gold">RECEIVED</span>
              <h3 className="ep-form__thanks-h">ありがとうございます。</h3>
              <p>3営業日以内に折り返しご返信いたします。</p>
            </div>
          ) : (
            <>
              <div className="ep-field">
                <label htmlFor="n">お名前</label>
                <input id="n" name="お名前" required placeholder="山田 太郎" />
              </div>
              <div className="ep-field">
                <label htmlFor="c">会社名</label>
                <input id="c" name="会社名" required placeholder="貴社名" />
              </div>
              <div className="ep-field">
                <label htmlFor="e">メールアドレス</label>
                <input id="e" name="email" type="email" required placeholder="name@example.co.jp" />
              </div>
              <div className="ep-field">
                <label htmlFor="m">ご相談内容</label>
                <textarea id="m" name="ご相談内容" rows="3" placeholder="共同事業の検討段階など、現状を簡単にご記入ください。" />
              </div>
              <button type="submit" className="ep-btn ep-btn--gold ep-btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? '送信中…' : <>送信する <span className="ep-arrow">→</span></>}
              </button>
              {status === 'error' && (
                <p className="ep-form__error" role="alert">
                  送信に失敗しました。時間をおいて再度お試しいただくか、お手数ですがメールにてご連絡ください。
                </p>
              )}
            </>
          )}
        </form>
      </div>
    </section>
  )
}
