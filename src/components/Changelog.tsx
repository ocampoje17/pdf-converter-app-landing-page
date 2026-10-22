interface Release {
  version: string
  date: string
  title: string
  details: string[]
}

const releases: Release[] = [
  {
    version: '1.2.2',
    date: '2026-10-22',
    title: 'Bổ sung chức năng sắp xếp thứ tự lưu file',
    details: [
      'Bổ sung khả năng sắp xếp thứ tự file đầu vào.',
      'Cho phép đánh số thứ tự trong tên file xuất ra.',
    ],
  },
  {
    version: '1.2.1',
    date: '2026-10-17',
    title: 'Sửa lỗi timeout',
    details: [
      'Khắc phục lỗi timeout gây gián đoạn hoặc thất bại khi chuyển đổi các tệp có số trang lớn.',
      'Bổ sung tính năng hiển thị tiến độ chuyển đổi của từng tệp, giúp người dùng dễ dàng theo dõi quá trình xử lý.',
    ],
  },
  {
    version: '1.2.0',
    date: '2026-10-08',
    title: 'Bổ sung định dạng file xuất ra',
    details: [
      'Bổ sung tuỳ chọn xuất file Text (.txt), Markdown (.md) bên cạnh định dạng Word (.docx) mặc định.',
    ],
  },
  {
    version: '1.1.9',
    date: '2026-09-05',
    title: 'Cập nhật cải thiện độ ổn định của App',
    details: [
      'Khắc phục lỗi ứng dụng bị crash khi danh sách file nguồn chứa file PDF bị hỏng hoặc file không đúng định dạng PDF.',
      'Cải thiện một số chi tiết giao diện, giúp trải nghiệm sử dụng trực quan và thuận tiện hơn.',
    ],
  },
  {
    version: '1.1.8',
    date: '2026-05-09',
    title: 'Bổ sung tuỳ chọn gộp kết quả thành 1 file',
    details: [
      'Bổ sung tuỳ chọn cho phép gộp toàn bộ kết quả thành 1 file duy nhất.',
      'Cho phép sắp xếp các file nguồn để xác định thứ tự nội dung khi gộp file.',
      'Bổ sung ngôn ngữ hiển thị tiếng Anh.',
    ],
  },
]

const recentReleases = [...releases]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 5)

function formatReleaseDate(date: string) {
  const [year, month, day] = date.split('-').map(Number)
  return `${day} thg ${month}, ${year}`
}

export default function Changelog() {
  return (
    <section
      id="changelog"
      aria-labelledby="changelog-heading"
      className="section-darker py-24 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-medium tracking-widest text-gray-500 uppercase mb-3">
            Qua từng phiên bản
          </p>
          <h2
            id="changelog-heading"
            className="text-3xl md:text-5xl font-normal text-white"
            style={{ letterSpacing: '-0.03em' }}
          >
            Lịch sử thay đổi
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-5">
            Những cải tiến mới nhất giúp bạn chuyển đổi tài liệu thuận tiện hơn.
          </p>
        </div>

        <ol className="changelog-timeline">
          {recentReleases.map((release, index) => (
            <li
              key={release.version}
              className={`changelog-entry${index === 0 ? ' changelog-entry-latest' : ''}`}
            >
              <span className="changelog-dot" aria-hidden="true" />
              <div className="changelog-meta reveal">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xl font-medium tracking-tight text-white">
                    {release.version}
                  </span>
                  {index === 0 && (
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white">
                      Mới nhất
                    </span>
                  )}
                </div>
                <time dateTime={release.date} className="block mt-2 text-sm text-gray-400">
                  {formatReleaseDate(release.date)}
                </time>
              </div>
              <div className="feature-card changelog-card p-6 md:p-7 reveal">
                <h3 className="text-lg font-medium text-white mb-4">
                  {release.title}
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-400 leading-relaxed marker:text-gray-600">
                  {release.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
