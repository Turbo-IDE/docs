---
title: Tham quan trình biên tập
sidebar_position: 4
---

# Tham quan trình biên tập

Đây là bản đồ của trình biên tập Turbo-IDE. Mỗi vùng đều liên kết tới trang tra cứu đầy đủ của nó. Để biết tổng quan cách các vùng ghép lại với nhau, xem [Giao diện trình biên tập](/editor/interface).

Trình biên tập được bố trí thành ba cột dưới một thanh trên cùng:

- **thanh menu** ở trên cùng,
- **bảng khối lệnh** và **vùng làm việc** ở bên trái và giữa (ở tab Code),
- **sân khấu** và **bảng sprite** ở bên phải.

## Thanh menu

Thanh trên cùng chứa các menu **File** và **Edit**, tiêu đề dự án, menu **Settings**, và khi bạn đã đăng nhập thì có thêm tài khoản và thông báo. Từ đây bạn tạo, lưu, mở, đóng gói và xuất bản dự án, đồng thời tiếp cận addon, điểm khôi phục, git và phần hướng dẫn.

- Menu File và Edit, lưu, xuất bản và đóng gói: [Thanh menu](/editor/menu-bar)
- Các tùy chọn riêng của trình biên tập: [Cài đặt](/editor/settings)

## Ba tab của trình biên tập

Phía trên bảng khối lệnh là ba tab chuyển nội dung hiển thị ở cột trái và giữa:

- **Code** hiển thị bảng khối lệnh và vùng làm việc (mô tả bên dưới).
- **Costumes** (hoặc **Backdrops** khi đang chọn sân khấu) mở trình vẽ cho trang phục của sprite đã chọn. Xem [Trang phục](/editor/costumes).
- **Sounds** mở trình chỉnh sửa âm thanh. Xem [Âm thanh](/editor/sounds).

## Bảng khối lệnh

Ở tab Code, cột bên trái liệt kê mọi khối lệnh, chia theo nhóm (Motion, Looks, Sound, Events, Control, Sensing, Operators, Variables, My Blocks) với các tiện ích mở rộng nằm bên dưới. Hãy kéo khối từ đây vào vùng làm việc.

- Bản thân bảng khối: [Bảng khối lệnh](/editor/blocks-palette)
- Từng nhóm khối làm gì: [Tổng quan khối lệnh](/blocks/overview)
- Thêm khối từ tiện ích mở rộng: [Tổng quan tiện ích mở rộng](/extensions/overview)

## Vùng làm việc

Vùng giữa là nơi bạn ghép khối thành kịch bản. Nó hỗ trợ menu chuột phải, chú thích và dọn dẹp, cùng các công cụ riêng của Turbo-IDE để tìm và sắp xếp mã.

- Bản thân vùng làm việc: [Vùng làm việc](/editor/workspace)
- Nhảy tới bất kỳ khối hoặc biến nào: [Thanh tìm kiếm](/editor/find-bar)
- Lưu và nhảy tới vị trí trong dự án lớn: [Dấu trang](/editor/bookmarks)
- Tự định nghĩa khối của bạn: [Khối tự tạo](/editor/custom-blocks)

## Sân khấu

Góc trên bên phải là sân khấu, nơi dự án chạy, với cờ xanh và biển dừng ở phía trên. Bên dưới sân khấu là **bộ chọn sân khấu** để chọn và chỉnh sửa phông nền.

- Sân khấu và các điều khiển của nó: [Sân khấu](/editor/stage)
- Giới hạn chạy và tuỳ chọn kết xuất: [Kích thước sân khấu tùy chỉnh](/advanced/custom-stage-size) và [FPS tùy chỉnh](/advanced/custom-fps)

## Bảng sprite

Bên dưới sân khấu ở bên phải là danh sách sprite, với các điều khiển thông tin sprite (tên, vị trí, kích thước, hiển thị) ở phía trên và nút thêm sprite ở góc.

- Quản lý sprite: [Sprite](/editor/sprites)
- Tái sử dụng sprite, trang phục, âm thanh và kịch bản giữa các dự án: [Ba lô](/editor/backpack)

## Biến và dữ liệu

Biến và danh sách được tạo từ nhóm **Variables** trong bảng khối và hiển thị dưới dạng theo dõi trên sân khấu. Turbo-IDE bổ sung một trình quản lý để làm việc với nhiều biến cùng lúc.

- Làm việc với biến và danh sách: [Biến](/editor/variables)
- Chỉnh sửa hàng loạt và kiểm tra: [Trình quản lý biến](/editor/variable-manager)

## Các công cụ của Turbo-IDE

Đây là những tính năng Turbo-IDE bổ sung ngoài trình biên tập tiêu chuẩn, truy cập từ menu và cài đặt:

- Tính năng tuỳ chọn cho trình biên tập và trình phát: [Addon](/editor/addons)
- Bộ màu và chế độ tối: [Giao diện](/editor/themes)
- Chạy từng bước qua một dự án đang chạy: [Trình gỡ lỗi](/editor/debugger)
- Tự động lưu và ảnh chụp thủ công: [Điểm khôi phục](/editor/restore-points)
- Kiểm soát phiên bản: [Git](/editor/git)
- Cùng làm một dự án theo thời gian thực: [Cộng tác](/editor/collaboration)
- Xây dựng bản độc lập: [Đóng gói](/editor/packaging)
- Gán lại phím tắt: [Phím tắt](/editor/shortcuts)

## Xem thêm

- [Giao diện trình biên tập](/editor/interface)
- [Bắt đầu nhanh](/getting-started/quick-start)
- [Quản lý dự án](/editor/project-management)
