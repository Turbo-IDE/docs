---
title: Bắt đầu nhanh
sidebar_position: 3
---

# Bắt đầu nhanh

Trang này xây dựng một dự án nhỏ có thể chạy được từ trình biên tập trống. Bạn chỉ mất vài phút và không cần biết trước gì về Turbo-IDE. Nếu bạn cũng chưa từng dùng Scratch, hệ thống khối lệnh cũng giống hệt Scratch; xem [Chuyển từ Scratch](/getting-started/migrating-from-scratch) để nắm các khái niệm.

## Mở trình biên tập

Truy cập [editor.turboshare.org.uk](https://editor.turboshare.org.uk/). Một dự án mới sẽ mở với sprite mặc định **Misty** đã nằm sẵn trên sân khấu. Bạn không cần tài khoản cho bất cứ thao tác nào trong trang này.

## Thêm mã

Trình biên tập mở sẵn ở tab **Code**. [Bảng khối lệnh](/editor/blocks-palette) nằm bên trái, chia theo nhóm; [vùng làm việc](/editor/workspace) nơi bạn ghép mã nằm ở giữa.

1. Từ nhóm **Events**, kéo khối `when green flag clicked` vào vùng làm việc. Đây là khối mũ: nó bắt đầu một kịch bản khi dự án chạy.
2. Từ **Looks**, kéo khối `say [Hello!] for (2) seconds` và gắn vào dưới khối mũ.
3. Từ **Motion**, kéo khối `move (10) steps` gắn tiếp vào bên dưới.
4. Từ **Control**, kéo khối `forever` và ôm lấy khối `move` để sprite cứ di chuyển liên tục.

Các khối tự gắn vào nhau khi các rãnh của chúng khớp nhau. Để tách một khối ra, hãy kéo nó đi; để xoá một khối, hãy kéo nó trả lại về bảng khối.

## Chạy thử

Phía trên [sân khấu](/editor/stage) ở bên phải là cờ xanh và biển dừng. Bấm **cờ xanh** để chạy kịch bản của bạn; Misty sẽ chào và bắt đầu di chuyển. Bấm **biển dừng** để dừng. Nhấn phím cách cũng bật/tắt trạng thái chạy.

Nếu sprite đi ra ngoài mép màn hình, hãy thêm khối `if on edge, bounce` từ **Motion** vào bên trong vòng lặp `forever`.

## Thay đổi ngoại hình

- Tab **Costumes** cho phép bạn vẽ hoặc chỉnh sửa ngoại hình của sprite. Xem [Trang phục](/editor/costumes).
- Tab **Sounds** quản lý âm thanh. Xem [Âm thanh](/editor/sounds).
- Thêm sprite bằng nút hình sprite ở góc dưới bên phải của [bảng sprite](/editor/sprites), và đổi phông nền từ [bộ chọn sân khấu](/editor/stage) ngay cạnh đó.

## Lưu lại

- **File rồi Save to your computer** tải về một tệp `.sb3`. Thao tác này không cần tài khoản, và tệp cũng mở được trong Scratch lẫn TurboWarp.
- **File rồi Load from your computer** mở lại tệp `.sb3` sau này.
- Với tài khoản Rotur, **File rồi Save to Turbo-IDE** xuất bản dự án lên tài khoản và cộng đồng của bạn. Xem [Quản lý dự án](/editor/project-management).

Turbo-IDE cũng tự động lưu [điểm khôi phục](/editor/restore-points) và các bản tự động lưu nền, nên sự cố hoặc việc tải lại trang lỡ tay sẽ không làm mất công sức của bạn.

## Đi đâu tiếp theo

- [Tham quan trình biên tập](/getting-started/editor-tour) nêu tên từng vùng của giao diện.
- [Tổng quan khối lệnh](/blocks/overview) là tài liệu tra cứu cho từng nhóm khối.
- [Tổng quan tiện ích mở rộng](/extensions/overview) bổ sung khối cho bút vẽ, âm nhạc, dịch thuật, phần cứng và nhiều thứ khác.
- [Cài đặt nâng cao](/advanced/custom-fps) mở khoá tốc độ khung hình cao hơn, kích thước sân khấu tùy chỉnh và nhiều giới hạn khác.
