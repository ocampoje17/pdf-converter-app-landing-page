export const MEASUREMENT_ID = 'G-QL0RJ8863V'
export const ANALYTICS_CONSENT_STORAGE_KEY = 'pdf-converter.analytics-consent.v1'

export type AnalyticsConsent = 'granted' | 'denied'

declare global {
  interface Window {
    dataLayer?: IArguments[]
    gtag?: (...args: unknown[]) => void
    __pdfConverterAnalyticsInitialized?: boolean
  }
}

export function readAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

export function saveAnalyticsConsent(consent: AnalyticsConsent): boolean {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent)
    return true
  } catch {
    return false
  }
}

export function initializeAnalytics(): void {
  if (window.__pdfConverterAnalyticsInitialized) {
    return
  }

  window.__pdfConverterAnalyticsInitialized = true
  window.dataLayer = window.dataLayer ?? []

  const gtag = window.gtag ?? function gtag(...args: unknown[]): void {
    // Google gtag.js reads its command queue as native arguments objects.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
    void args
  }

  window.gtag = gtag

  const existingScript = document.querySelector<HTMLScriptElement>(
    'script[data-pdf-converter-analytics="true"]',
  )
  if (existingScript) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  script.dataset.pdfConverterAnalytics = 'true'
  document.head.append(script)

  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID)
}
