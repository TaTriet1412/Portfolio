---
Mục tiêu chủ đạo: Bộ quy tắc hướng dẫn thiết kế giao diện và trải nghiệm người dùng (UI/UX) cho dự án Portfolio cá nhân. Áp dụng khi thêm tính năng, chỉnh sửa layout, hiệu ứng hoặc nội dung text. Mục tiêu cốt lõi: Giữ vững bản sắc thiết kế dark mode, mang âm hưởng không gian làm việc của một Kỹ sư Backend/Hệ thống.
---

# 🎨 UI/UX & Frontend Design Guidelines

Tiếp cận dự án này dưới góc độ tinh chỉnh và hoàn thiện một hệ thống đã có sẵn, tuyệt đối không đập đi xây lại trừ khi có yêu cầu cụ thể. Mọi quyết định về khoảng cách (spacing), phân cấp thông tin (hierarchy), hiệu ứng (motion) và cấu trúc component phải tuân thủ nghiêm ngặt ngôn ngữ thiết kế: **nền tối (dark slate), điểm nhấn màu xanh lơ (cyan/sky accents), giao diện mang hơi hướng dòng lệnh (terminal) và chuyển động có tiết chế.**

## 1. Định vị phong cách thiết kế (Design Persona)
Trang web này là bộ mặt của một Sinh viên/Kỹ sư Software Engineering thiên về Backend (hỗ trợ song ngữ Anh/Việt). 
- Ưu tiên các ẩn dụ thị giác liên quan đến kỹ thuật phần mềm: Cửa sổ terminal, trạng thái server, luồng dữ liệu (data flow), sơ đồ hệ thống và tài liệu API.
- Nếu một yêu cầu thiết kế không rõ ràng, hãy chọn giải pháp mang tính "hệ thống" nhất: làm cho thẻ dự án dễ đọc (scan) hơn, làm UI trên mobile gọn gàng hơn, hoặc làm cho nút Call-to-Action (CTA) nổi bật một cách tinh tế.

## 2. Ánh xạ Kiến trúc Dự án (Architecture Fit)
Khi triển khai UI, bắt buộc phải tuân thủ cấu trúc thư mục hiện tại:
- **Tính năng theo vùng (Section):** Đặt tại `src/app/features/` (ví dụ: `about`, `projects`, `skills`). Mỗi section tự quản lý layout cục bộ của nó.
- **Thành phần tái sử dụng (UI Primitives):** Nằm ở `src/app/shared/components/`. Bất kỳ UI nào dùng từ 2 lần trở lên (như `project-card/`, `tech-badge/`, `section-title/`) phải được trừu tượng hóa và đặt ở đây.
- **Nội dung & Dữ liệu:** Không hard-code text vào HTML. Toàn bộ nội dung portfolio phải được lấy từ `src/app/data/mock-data.ts`. Cấu trúc dữ liệu phải tuân thủ các interface trong `src/app/models/`.
- **Global Services:** Việc đổi màu theme (Dark/Light) hoặc theo dõi trạng thái cuộn trang (Scroll/SEO) thuộc về `src/app/core/services/`.

## 3. Nguyên tắc Thị giác & Tương tác (Visual Principles)
- **Hero Section là Lời tuyên ngôn:** Khu vực `features/home` phải truyền đạt ngay lập tức bạn là ai, làm vị trí gì và định hướng kỹ thuật ra sao. Sử dụng thông tin súc tích thay vì các pattern màu mè của landing page thương mại.
- **Nghệ thuật Typography:** Sự chuyên nghiệp nằm ở font chữ. Dùng font Sans-serif nét đậm cho tiêu đề và font Monospace (như chữ code) cho các nhãn phụ, tech-badge hoặc thông số. Phân cấp thông tin thông qua `font-weight`, `kích thước` và `line-height` thay vì dùng quá nhiều màu sắc.
- **Cấu trúc mang tính Thông tin:** Các component như `timeline-item` hay `project-card` phải phản ánh tính logic của dữ liệu. Chỉ dùng số thứ tự khi trình bày quy trình hoặc luồng dự án.
- **Tiết chế Hiệu ứng (Restrained Motion):** Áp dụng hiệu ứng mờ ảo (glassy), viền sáng (glow) khi hover và hiệu ứng gõ chữ (typewriter). Tuy nhiên, chỉ thêm motion khi nó giúp người dùng nhận biết tiêu điểm hoặc tiến trình. Giữ cho trải nghiệm trên Mobile tĩnh lặng và nhẹ nhàng.

## 4. Quy trình Code UI (Implementation Process)
Làm việc theo 2 bước nhẹ nhàng:
1. Xác định component cần sửa (ví dụ: `project-card`), mục tiêu UX là gì và tìm ra sự can thiệp *nhỏ nhất* về mặt thị giác để đạt được điều đó.
2. Thiết kế chi tiết nổi bật (signature detail) nhưng phải đảm bảo nó không phá vỡ tổng thể. Nếu một section trông như bị lạc sang website khác, hãy giảm độ tương phản của nó xuống.

**Tiêu chuẩn Code:** Tận dụng tối đa các utility classes của **Tailwind CSS** ngay trong template HTML. Hạn chế tối đa việc viết CSS selector phức tạp vào các file `.scss` global, trừ khi đó là các animation đặc thù không thể làm bằng Tailwind.

## 5. Kỷ luật & Tự đánh giá (Restraint & QA)
- **Tiêu xài "sự nổi bật" đúng chỗ:** Hãy để một chi tiết thật ấn tượng (như thẻ card sáng lên khi hover), nhưng giữ phần nền xung quanh thật kỷ luật và chìm xuống.
- **Đảm bảo chất lượng cơ bản:** Responsive hoàn hảo trên mobile, trạng thái `focus` cho bàn phím phải rõ ràng, độ tương phản chữ/nền dễ đọc, và tuyệt đối không có hiện tượng giật/nhảy layout (Layout Shift) khi load trang.
- Sau khi code xong, hãy tự kiểm tra: Chữ có bị cắt mép không? Card có bị dính chùm vào nhau trên mobile không? Hiệu ứng glow có bị lóa mắt không?

## 6. UX Writing (Ngôn từ trong Thiết kế)
Văn bản hiển thị là một phần của UI, không phải là đồ trang trí.
- Viết dưới góc nhìn của khách truy cập. Gọi tên sự vật bằng danh từ phổ quát: Projects, Experience, Skills, Resume, Contact.
- Dùng **Active Voice (Câu chủ động)** cho các nút bấm. Nút bấm phải nói rõ nó sẽ làm gì: "Xem dự án", "Tải CV", "Đến mã nguồn", "Gửi tin nhắn".
- Đồng bộ sắc thái ngôn ngữ (Bilingual Parity): Dữ liệu tiếng Việt và tiếng Anh trong `mock-data.ts` phải mang ý nghĩa tương đương và có cùng độ chuyên nghiệp. Không để một ngôn ngữ được trau chuốt hơn ngôn ngữ kia.
- Khi có lỗi hoặc trạng thái loading (Empty/Loading states), hãy dùng giọng văn điềm tĩnh của một kỹ sư để thông báo hệ thống đang xử lý, hoặc hướng dẫn người dùng bước tiếp theo.