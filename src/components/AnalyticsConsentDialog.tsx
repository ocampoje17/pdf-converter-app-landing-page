import { useEffect, useRef, type KeyboardEvent } from 'react'
import type { AnalyticsConsent } from '../lib/analytics'

type AnalyticsConsentDialogProps = {
  onConsentChoice: (consent: AnalyticsConsent) => void
}

export default function AnalyticsConsentDialog({ onConsentChoice }: AnalyticsConsentDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const declineButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    declineButtonRef.current?.focus()
  }, [])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') {
      return
    }

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])')
    if (!focusableElements || focusableElements.length === 0) {
      return
    }

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/80 px-5 py-6 backdrop-blur-sm">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="analytics-consent-title"
        aria-describedby="analytics-consent-description"
        onKeyDown={handleKeyDown}
        className="feature-card w-full max-w-md p-6 shadow-2xl sm:p-8"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">Quyền riêng tư</p>
        <h2 id="analytics-consent-title" className="mb-4 text-2xl font-medium text-white">
          Giúp chúng tôi cải thiện PDF Converter
        </h2>
        <p id="analytics-consent-description" className="text-sm leading-relaxed text-gray-400">
          Chúng tôi muốn dùng Google Analytics để hiểu cách khách truy cập sử dụng website và cải thiện
          trải nghiệm. Analytics không thu thập hoặc tải lên nội dung tài liệu của bạn.
        </p>

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            ref={declineButtonRef}
            type="button"
            onClick={() => onConsentChoice('denied')}
            className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Không bật
          </button>
          <button
            type="button"
            onClick={() => onConsentChoice('granted')}
            className="btn-high-contrast rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Bật Analytics
          </button>
        </div>
      </div>
    </div>
  )
}
