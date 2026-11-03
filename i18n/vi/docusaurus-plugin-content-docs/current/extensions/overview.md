---
title: Tổng quan tiện ích mở rộng
sidebar_position: 1
---

# Tổng quan tiện ích mở rộng

Tiện ích mở rộng thêm khối lệnh mới vào bảng khối, những khối không thuộc các nhóm khối cốt lõi. Một tiện ích mở rộng có thể thêm cả một bộ nhạc cụ mới, điều khiển một robot thật qua Bluetooth, đọc webcam, hoặc chèn JavaScript thô vào dự án đã biên dịch của bạn. Một khi đã nạp, các khối của nó xuất hiện dưới dạng một nhóm mới ở cuối bảng khối.

## Thêm một tiện ích mở rộng

Bấm nút **Add Extension** ở góc dưới bên trái của trình biên tập (biểu tượng bên dưới bảng khối). Thư viện tiện ích mở rộng sẽ mở ra. Bấm vào bất kỳ tiện ích nào để nạp nó. Các khối của nó được thêm vào dự án ngay lập tức và được lưu cùng dự án, nên bất cứ ai mở lại dự án sau đó cũng sẽ có đúng các khối đó.

Một số tiện ích mở rộng làm nhiều hơn việc thêm khối:

- **Tiện ích phần cứng** (micro:bit, LEGO, cảm biến Vernier) mở hộp thoại kết nối để bạn ghép đôi thiết bị qua Bluetooth trước khi các khối hoạt động.
- **Tiện ích camera** (Video Sensing, Face Sensing) xin trình duyệt cấp quyền webcam ở lần chạy đầu tiên.

## Tiện ích tích hợp so với tiện ích từ xa

Turbo-IDE cung cấp hai loại tiện ích trong thư viện:

- Tiện ích **tích hợp** được đóng gói cùng trình biên tập và nạp tức thì, kể cả ngoại tuyến. Chúng gồm Turbo-IDE Blocks, Patching, Music, Pen, Video Sensing, Text to Speech, Translate, Makey Makey, và các tiện ích phần cứng.
- Tiện ích **từ xa** được tải từ một URL ở lần đầu bạn nạp, nên cần kết nối internet để nạp. Face Sensing là một trong các tiện ích như vậy. Thư viện cũng liên kết ra toàn bộ kho tiện ích mở rộng cộng đồng của Turbo-IDE tại [extensions.mistium.com](https://extensions.mistium.com/), nơi lưu trữ hàng trăm tiện ích do cộng đồng tạo ra.

Một số tiện ích tích hợp cũng cần internet để thực sự hoạt động (không chỉ để nạp): Text to Speech và Translate gọi một dịch vụ trực tuyến mỗi lần bạn dùng, và các tiện ích phần cứng có thể tải firmware hoặc tài nguyên kết nối.

## Gửi tiện ích mở rộng

Mở **Extensions Store** trong menu công cụ của trình biên tập để duyệt tiện ích cộng đồng ở một cửa sổ riêng. Chọn **Publish an extension** để gửi tệp JavaScript cùng ID, tên tác giả công khai, phiên bản, mô tả và ảnh bìa PNG, JPEG hoặc WebP tùy chọn (tối đa 2 MB). Gửi extension không cần và không gửi session token tài khoản; Worker giới hạn số lần gửi theo IP và giữ mọi bản gửi để admin duyệt. Metadata của catalog được lưu trong tab Google Sheets `Extensions`; mã nguồn và ảnh bìa được Worker quản lý và phục vụ qua Store sau khi được duyệt.

Quản trị viên xem xét mã JavaScript trong admin panel của main-page. Khi được duyệt, phiên bản sẽ tự động xuất hiện trong Store. Quản trị viên có thể cập nhật thông tin, ảnh bìa hoặc mã nguồn của phiên bản đã duyệt, hoặc gỡ tất cả phiên bản của tiện ích khỏi Store. Bản gửi và cập nhật đang chờ duyệt sẽ chưa được liệt kê. Nếu muốn tự dùng mà không công khai, hãy chọn **Custom Extension**.

Worker của main-page trực tiếp xử lý mọi API route của Extensions Store. Tài khoản dịch vụ Google cần có quyền đọc/ghi tab `Extensions`. Tab trống sẽ được khởi tạo tự động; nếu đã có dữ liệu, hàng đầu tiên phải có đúng thứ tự tiêu đề: `hash`, `extensionId`, `name`, `author`, `description`, `version`, `status`, `sourceFileId`, `coverFileId`, `coverMime`, `submittedAt`, `updatedAt`. Binding D1 hiện có chỉ dùng để giới hạn tần suất gửi. Không cần deploy riêng API MistWarp hay cấu hình `EXTENSION_REVIEW_WORKER_KEY`.

## Nạp một tiện ích mở rộng tùy chỉnh

Nếu một tiện ích không có trong thư viện, bạn có thể tự nạp nó từ một URL, một tệp cục bộ, hoặc mã JavaScript dán trực tiếp. Mở thư viện tiện ích mở rộng và chọn **Custom Extension**. Xem [Tiện ích tùy chỉnh](/extensions/custom-extension) để biết chi tiết, kể cả sự khác nhau giữa tiện ích sandboxed và unsandboxed, cùng dấu hiệu bảo mật bạn sẽ thấy.

## Tính tương thích với Scratch

Một số tiện ích được đánh dấu là không tương thích với Scratch (Turbo-IDE Blocks, Patching, và phần lớn tiện ích tùy chỉnh). Các dự án dùng chúng sẽ không chạy trên scratch.mit.edu. Thư viện sẽ cảnh báo bạn trước khi nạp một trong các tiện ích này. Các tiện ích xuất phát từ chính Scratch (Music, Pen, Video Sensing, Text to Speech, Translate, Makey Makey, và các tiện ích phần cứng LEGO / micro:bit / Vernier) vẫn tương thích với Scratch.

## Tự viết tiện ích của bạn

Nếu bạn muốn xây dựng một tiện ích mở rộng thay vì chỉ dùng tiện ích có sẵn, hãy bắt đầu với [Xây dựng tiện ích mở rộng: Giới thiệu](/building-extensions/introduction).

## Xem thêm

- [Tiện ích tùy chỉnh](/extensions/custom-extension)
- [Turbo-IDE Blocks](/extensions/turbo-ide-blocks)
- [Patching](/extensions/patching)
- [Xây dựng tiện ích mở rộng: Giới thiệu](/building-extensions/introduction)
