---
title: Dự án chưa chia sẻ
sidebar_position: 5
---

# Dự án chưa chia sẻ

Dự án chưa được chia sẻ trên Scratch thì không mở được trong Turbo-IDE, trình đóng gói, hay bất kỳ trang bên thứ ba nào khác. Đây là giới hạn của Scratch, không phải của Turbo-IDE, và không có cách nào đi vòng qua nó mà vẫn giữ an toàn cho tài khoản của bạn.

:::warning
Bất kỳ trang web nào khác scratch.mit.edu hỏi bạn mật khẩu Scratch đều là lừa đảo, dù chúng có tuyên bố cho bạn mở dự án chưa chia sẻ. Tài khoản của bạn sẽ bị đánh cắp. Không có ngoại lệ cho quy tắc này.
:::

## Vì sao lại như vậy

Việc tải một dự án từ API của Scratch đòi hỏi một "project token" tạm thời. Với các dự án chưa chia sẻ, token đó chỉ có thể lấy được bởi chủ sở hữu dự án, và nó hết hạn sau vài phút. Dù bạn có đang đăng nhập Scratch trên cùng trình duyệt, Turbo-IDE cũng không đọc được token đó, nên không tải được dữ liệu dự án.

Đây là thay đổi có chủ đích của Scratch Team nhằm làm cho dự án chưa chia sẻ thật sự riêng tư. Trước đó, dự án "chưa chia sẻ" trên thực tế vẫn công khai với bất cứ ai biết ID, một vấn đề riêng tư nghiêm trọng khi biết bao dự án trong số đó chứa thông tin cá nhân. Việc bảo mật chúng là quyết định đúng đắn.

## Cần làm gì thay vào đó

**Thử dự án của chính bạn.** Trong trình biên tập Scratch, hãy dùng File rồi Save to your computer để tải tệp `.sb3` về, sau đó mở tệp đó trong Turbo-IDE bằng File rồi Load from your computer. Nhiều người làm việc chủ yếu trong Turbo-IDE rồi tải bản `.sb3` hoàn chỉnh ngược trở lại Scratch. Khi làm vậy, hãy giữ các bản sao dự phòng.

**Hợp tác.** Hãy chia sẻ dự án trên Scratch. Chia sẻ dự án chưa hoàn thiện cũng không sao. Nếu bạn muốn cùng người khác chỉnh sửa trực tiếp, Turbo-IDE cũng có [cộng tác](/editor/collaboration) tích hợp sẵn mà không phụ thuộc vào Scratch.

**Nhúng.** Hãy chia sẻ dự án trên Scratch, hoặc tải tệp `.sb3` về và dùng [Trình đóng gói Turbo-IDE](/packager/overview) để biến nó thành một tệp độc lập mà bạn [có thể nhúng](/packager/embedding).

## Dành cho lập trình viên công cụ

Phần này dành cho những người xây dựng công cụ liên quan đến Scratch của riêng họ. Để tải một dự án đã chia sẻ, trước hết bạn lấy metadata của nó để nhận project token, rồi dùng token đó để lấy dữ liệu:

1. `GET https://api.scratch.mit.edu/projects/<id>` và đọc trường `project_token`.
2. `GET https://projects.scratch.mit.edu/<id>?token=<token>` để lấy JSON hoặc SB3 của dự án.

Trình duyệt không thể gọi trực tiếp `api.scratch.mit.edu` vì nó không gửi header [CORS](/advanced/cors), nên mã phía trình duyệt cần một CORS proxy; mã phía máy chủ (Node.js) thì không bị CORS ràng buộc và có thể gọi trực tiếp. Để có sẵn một bộ tải xuống xử lý toàn bộ việc này, xem [sb-downloader](https://github.com/forkphorus/sb-downloader).

## Xem thêm

- [Cộng tác](/editor/collaboration)
- [Trình đóng gói Turbo-IDE](/packager/overview)
- [CORS](/advanced/cors)
