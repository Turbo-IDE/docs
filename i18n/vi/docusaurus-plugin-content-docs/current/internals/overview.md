---
title: Tổng quan về nội bộ
sidebar_position: 1
---

# Nội bộ

Mục này giải thích cách trình biên tập Turbo-IDE được xây dựng: kiến trúc React và Redux của scratch-gui, cách thành phần cấp cao nhất được ghép lại, cách ứng dụng nói chuyện với máy ảo, cách trạng thái được quản lý, cách giao diện được áp dụng, và cách hệ thống addon vận hành.

Đây là phần đi kèm với [Đóng góp](/contributing/overview). Mục Đóng góp cho bạn biết cách tải mã về, build và thay đổi code. Mục Nội bộ cho bạn biết cách code được ghép lại để những thay đổi đó có nghĩa.

Đây là nội dung dành cho lập trình viên. Nếu bạn chỉ muốn dùng trình biên tập, bạn không cần đến nó.

## Phạm vi

Gần như mọi thứ ở đây đều nói về **scratch-gui**, vì đó là nơi chứa giao diện, kho Redux, bộ máy giao diện và khung addon. Runtime và trình biên dịch nằm ở scratch-vm và được trình bày riêng trong [Tra cứu API](/api-reference/overview). Ở những chỗ scratch-gui nói chuyện với VM, ranh giới đó được mô tả trong [Kiến trúc](/internals/architecture).

Turbo-IDE là một bản fork của TurboWarp, mà TurboWarp lại là bản fork của Scratch. Phần lớn cấu trúc ở đây được kế thừa từ Scratch và TurboWarp. Các trang sẽ chỉ ra những chỗ Turbo-IDE đi khác.

## Các trang

1. [Kiến trúc](/internals/architecture) trình bày bức tranh toàn cảnh: React cộng Redux, cách `gui.jsx` được ghép từ các higher-order component, và cầu nối tới VM.
2. [Các thành phần](/internals/components) mô tả các thành phần trình bày và sự phân chia container/component.
3. [Container](/internals/containers) giải thích mẫu container nối các thành phần với Redux.
4. [Quản lý trạng thái](/internals/state) liệt kê các reducer thật sự có trong kho và cách selector, action creator và middleware ghép lại với nhau.
5. [Giao diện](/internals/theming) trình bày cách giao diện biến thành các thuộc tính CSS tuỳ chỉnh trên tài liệu và cách màu khối được áp dụng.
6. [Hệ thống Addon](/internals/addons-system) đề cập kho cài đặt addon và hệ thống cửa sổ.

## Xem thêm

- [Tổng quan về đóng góp](/contributing/overview)
- [Cấu trúc dự án](/contributing/project-structure)
- [Tra cứu API](/api-reference/overview)
