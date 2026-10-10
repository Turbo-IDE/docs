---
title: Giao diện trình biên tập
sidebar_position: 1
---

Trình biên tập Turbo-IDE là nơi bạn xây dựng dự án. Nó chạy hoàn toàn trong trình duyệt của bạn (và trong ứng dụng desktop), và được phát hành từ cùng một bản build với trang cộng đồng. Trang này là bản đồ của cửa sổ trình biên tập: mỗi vùng là gì và đọc thêm ở đâu.

## Bố cục tổng quan

Trình biên tập được chia thành vài vùng cố định:

- **Thanh menu** ở trên cùng: logo Turbo-IDE (liên kết về trang chủ), các menu File / Edit / Tools / Bookmarks, Cài đặt, tiêu đề dự án, và ở bên phải là trạng thái lưu cùng tài khoản của bạn. Xem [thanh menu](/editor/menu-bar).
- **Sân khấu** ở một bên: dự án đang chạy, cờ xanh và nút dừng, các điều khiển kích thước sân khấu, và nút toàn màn hình. Xem [sân khấu](/editor/stage).
- **Bảng sprite** bên dưới sân khấu: danh sách sprite, các thuộc tính của sprite đang chọn (vị trí, kích thước, hướng, hiển thị), và bộ chọn sân khấu/phông nền. Xem [sprite](/editor/sprites).
- **Vùng chỉnh sửa** chiếm phần còn lại của cửa sổ, được điều khiển bởi ba tab ở góc trên bên trái:
  - **Code**: [bảng khối lệnh](/editor/blocks-palette) và [vùng làm việc khối](/editor/workspace).
  - **Costumes** (hoặc **Backdrops** khi đang chọn sân khấu): [trình vẽ](/editor/costumes).
  - **Sounds**: [trình chỉnh sửa âm thanh](/editor/sounds).

Ba tab chuyển nội dung mà vùng chỉnh sửa hiển thị cho sprite hoặc sân khấu đang chọn. Sân khấu, bảng sprite và thanh menu giữ nguyên khi bạn chuyển tab.

## Chế độ biên tập so với chế độ phát

Cùng một trang có thể hiển thị theo hai cách. Ở **chế độ biên tập**, bạn thấy mọi thứ ở trên. Ở **chế độ phát**, chỉ có sân khấu và các điều khiển của nó — đây là những gì khách truy cập thấy trên trang dự án được chia sẻ hoặc trong bản nhúng. Trang dự án cộng đồng nạp dự án vào trình phát nhúng thay vì trình biên tập đầy đủ.

## Điều làm nên khác biệt của trình biên tập Turbo-IDE

Ngoài bố cục Scratch tiêu chuẩn, trình biên tập Turbo-IDE bổ sung:

- Một [trình biên dịch](/blocks/overview) biến khối lệnh của bạn thành JavaScript để tăng tốc, cùng [FPS tùy chỉnh](/advanced/custom-fps), [kích thước sân khấu tùy chỉnh](/advanced/custom-stage-size), và các [cài đặt nâng cao](/editor/settings) khác.
- [Addon](/editor/addons) và [giao diện tùy chỉnh](/editor/themes) để thay đổi hình dạng và tạo kiểu cho trình biên tập.
- Công cụ lập trình: [trình gỡ lỗi](/editor/debugger), [trình quản lý biến](/editor/variable-manager), [điểm khôi phục](/editor/restore-points) và tự động lưu, [kiểm soát phiên bản bằng git](/editor/git) tích hợp sẵn, và [cộng tác trực tuyến](/editor/collaboration).
- [Thanh tìm kiếm](/editor/find-bar) và [dấu trang vùng làm việc](/editor/bookmarks) để di chuyển trong các dự án lớn.

## Xem thêm

- [Tham quan trình biên tập](/getting-started/editor-tour) cho một cái nhìn đầu tiên có hướng dẫn
- [Phím tắt](/editor/shortcuts)
- [Quản lý dự án](/editor/project-management): tạo mới, lưu, mở và chia sẻ
- [Cài đặt](/editor/settings) và [addon](/editor/addons)
