import { useEffect, useRef } from 'react'
import AnimatedHeading from './components/AnimatedHeading'
import FadeIn from './components/FadeIn'
import './index.css'

// ── Feature data ──────────────────────────────────────────────────────────────
const features = [
  {
    icon: '🔍',
    title: 'OCR Siêu Tốc & Chính Xác',
    desc: 'Trích xuất văn bản từ hình ảnh và tài liệu PDF scan cực chuẩn xác với công nghệ OCR, tối ưu đặc biệt cho ngôn ngữ Tiếng Việt.',
  },
  {
    icon: '⚡',
    title: 'Xử Lý Hàng Loạt',
    desc: 'Kéo thả hàng trăm hình ảnh hay tệp PDF cùng lúc. Chuyển đổi và trích xuất mọi thứ chỉ trong một thao tác duy nhất.',
  },
  {
    icon: '🔒',
    title: 'An Toàn Tuyệt Đối',
    desc: 'Bảo mật 100% dữ liệu. Phần mềm hoạt động hoàn toàn offline trên máy tính của bạn, không tải tệp lên bất kỳ đám mây nào.',
  },
]

const stats = [
  { value: '2', label: 'Định dạng hỗ trợ (PDF & Ảnh)' },
  { value: '100%', label: 'Offline & Riêng tư' },
  { value: '1 Click', label: 'Thao tác kéo thả' },
  { value: '∞', label: 'Không giới hạn tệp' },
]

// ── Scroll reveal hook ────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ══════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen flex flex-col overflow-hidden">
        {/* Background video — raw, no overlay */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* ── Navbar ── */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-6">
          <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
            {/* Logo */}
            <span className="text-2xl font-semibold tracking-tight text-white select-none">
              PDF Converter
            </span>

            {/* Center links */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Tính năng', href: '#features' },
                { label: 'Tải xuống', href: '#download' },
                { label: 'Riêng tư', href: '#privacy' },
                { label: 'Liên hệ', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-gray-300 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#download"
              id="nav-download-btn"
              className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Tải Xuống Ngay
            </a>
          </nav>
        </div>

        {/* ── Hero content (bottom) ── */}
        <div className="relative z-10 px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            {/* Left — main copy */}
            <div>
              <AnimatedHeading
                text={"Trích xuất văn bản\nmột cách dễ dàng."}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 text-white"
                style={{ letterSpacing: '-0.04em' }}
                initialDelay={200}
                charDelay={30}
              />

              <FadeIn delay={800} duration={1000} className="mb-5">
                <p className="text-base md:text-lg text-gray-300">
                  Phần mềm chuyển đổi ảnh và PDF thành văn bản. Sở hữu sức mạnh thông minh ẩn sau giao diện tối giản. 100% offline, miễn phí trọn đời.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#download"
                    id="hero-download-btn"
                    className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                  >
                    Tải Xuống Miễn Phí
                  </a>
                  <a
                    href="#features"
                    id="hero-explore-btn"
                    className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-200"
                  >
                    Khám Phá Tính Năng
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right — tag */}
            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  Hình ảnh. PDF. OCR.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-dark border-y border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-number text-white mb-1">{s.value}</div>
                <div className="text-sm text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FEATURES SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section id="features" className="section-darker py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-3">
              Mọi thứ bạn cần
            </p>
            <h2
              className="text-3xl md:text-5xl font-normal text-white"
              style={{ letterSpacing: '-0.03em' }}
            >
              Công cụ trích xuất mạnh mẽ,<br />
              <span className="text-gray-400">không cần kết nối mạng.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                id={`feature-card-${i + 1}`}
                className="feature-card p-7 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-medium text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SCREENSHOT / APP MOCKUP SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="section-dark py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-3">
              ĐƯỢC THIẾT KẾ CHO WINDOWS
            </p>
            <h2
              className="text-3xl md:text-5xl font-normal text-white"
              style={{ letterSpacing: '-0.03em' }}
            >
              Tối giản và Native.
            </h2>
          </div>

          {/* App mockup card */}
          <div className="reveal">
            <div className="screenshot-frame glow-accent">
              {/* Titlebar */}
              <div className="bg-[#1c1c1e] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-white/10 block" />
                  <span className="w-3 h-3 rounded-full bg-white/10 block" />
                  <span className="w-3 h-3 rounded-full bg-white/10 block" />
                </div>
                <span className="ml-3 text-xs text-gray-500">PDF Converter</span>
              </div>

              {/* App body */}
              <div className="bg-[#111] p-6 min-h-[360px] flex gap-6">
                {/* Sidebar */}
                <div className="w-48 shrink-0 flex flex-col gap-2">
                  {['Chuyển Đổi', 'Cài Đặt'].map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                        i === 0
                          ? 'bg-white/10 text-white'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main area */}
                <div className="flex-1 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-4 text-center">
                  <div className="text-4xl opacity-40">📄</div>
                  <p className="text-sm text-gray-500">Kéo thả Ảnh / PDF vào đây hoặc bấm để chọn tệp</p>
                  <div className="flex gap-2">
                    <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-1.5 text-xs text-gray-400">
                      Chọn Tệp
                    </div>
                    <div className="bg-white text-black rounded-lg px-4 py-1.5 text-xs font-medium">
                      Bắt Đầu Chuyển Đổi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PRIVACY SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section id="privacy" className="section-darker py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="text-5xl mb-6">🔒</div>
          <h2
            className="text-3xl md:text-5xl font-normal text-white mb-6"
            style={{ letterSpacing: '-0.03em' }}
          >
            Tài liệu của bạn ở lại thiết bị của bạn.
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-12">
            Mọi thao tác xử lý hoàn toàn diễn ra trên máy PC của bạn. Không tải lên, không thu thập dữ liệu gốc. 
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🚫', label: 'Không Tải Lên', desc: 'File của bạn không bao giờ rời khỏi PC.' },
              { icon: '🌐', label: 'Không Cần Mạng', desc: 'Phần mềm hoạt động hoàn toàn offline.' },
              { icon: '💳', label: 'Hoàn Toàn Miễn Phí', desc: 'Sử dụng miễn phí, không yêu cầu trả phí.' },
            ].map((item) => (
              <div key={item.label} className="feature-card p-6">
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-medium text-white mb-1">{item.label}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          DOWNLOAD SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section id="download" className="section-dark py-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-4">
            Tải Ngay
          </p>
          <h2
            className="text-4xl md:text-6xl font-normal text-white mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Sẵn sàng để chuyển đổi?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Ứng dụng có sẵn cho Windows 10 &amp; 11. Hoàn toàn miễn phí.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              id="main-download-btn"
              href="#"
              className="btn-download px-10 py-4 rounded-xl text-base font-semibold"
            >
              ⬇&nbsp;&nbsp;Tải về cho Windows
            </a>
            <a
              id="github-link"
              href="#"
              className="liquid-glass border border-white/20 text-white px-10 py-4 rounded-xl text-base font-medium hover:bg-white hover:text-black transition-all duration-200"
            >
              Mã nguồn GitHub
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-600">
            Hỗ trợ Windows 10 / 11 · 64-bit
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FOOTER & CONTACT
      ══════════════════════════════════════════════════════════════ */}
      <footer id="contact" className="border-t border-white/5 py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-sm font-semibold tracking-tight text-white/90">
              PDF Converter
            </span>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} PDF Converter. Được phát triển bởi namhnz.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-400">
            <span className="font-medium text-gray-300">Thông tin liên hệ:</span>
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-end">
              <a href="mailto:namqhong@gmail.com" className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                <span className="opacity-70">✉</span> namqhong@gmail.com
              </a>
              <a href="https://t.me/namhnz" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
                <span className="opacity-70">✈</span> @namhnz
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
