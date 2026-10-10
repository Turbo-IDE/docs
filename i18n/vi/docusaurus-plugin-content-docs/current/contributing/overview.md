---
title: Tổng quan về đóng góp
sidebar_position: 1
---

# Đóng góp cho Turbo-IDE

Turbo-IDE là một bản sửa đổi của Scratch, được xây dựng trên nền TurboWarp, mà bản thân nó lại được xây dựng trên Scratch. Dòng dõi đó quan trọng với người đóng góp: phần lớn mã bạn sẽ đọc là mã Scratch/TurboWarp thông thường, còn các phần riêng của Turbo-IDE nằm phía trên nó. Nếu bạn từng đóng góp cho Scratch hoặc TurboWarp, bạn đã biết sẵn gần như mọi thứ cần thiết.

Phần này dành cho những người muốn làm việc trực tiếp trên Turbo-IDE: sửa lỗi trong trình biên tập, thêm khối vào VM, viết addon, hoặc tự chạy bản build của riêng mình. Nếu bạn chỉ muốn xây dựng một tiện ích mở rộng tùy chỉnh cho dự án của mình, hãy đọc [Xây dựng tiện ích mở rộng](/building-extensions/introduction) thay thế, thứ không đòi hỏi phải tải mã nguồn về.

## Cái gì nằm ở đâu

Turbo-IDE không phải là một kho mã duy nhất. Nó là một tập hợp nhỏ các gói Scratch đã fork cộng thêm một vài dịch vụ riêng của Turbo-IDE, được đặt cạnh nhau. Trang [Cấu trúc dự án](/contributing/project-structure) mô tả bố cục đầy đủ, nhưng bản tóm tắt là:

- **scratch-gui** là trình biên tập và trang cộng đồng, được build cùng nhau trong một bản build Vite. Đây là nơi bạn dành phần lớn thời gian.
- **scratch-vm** chạy các dự án và chứa trình biên dịch. Các khối lệnh được định nghĩa tại đây.
- **scratch-render**, **scratch-blocks**, **scratch-paint** và **scratch-audio** là các gói engine đã fork còn lại.
- **packager** biến dự án thành tệp HTML/tệp thực thi độc lập.
- **Turbo-IDE-api** là backend của nền tảng cộng đồng.
- **docs** là trang bạn đang đọc.

## Trước khi bắt đầu

- Turbo-IDE là một ứng dụng lớn. Build trình biên tập có thể tốn vài gigabyte dung lượng đĩa và bộ nhớ.
- Bạn cần [Git](https://git-scm.com/) và [Node.js](https://nodejs.org/) 22 (tối thiểu 20.19).
- scratch-gui dùng [pnpm](https://pnpm.io/) làm trình quản lý gói, không phải npm. Xem [Build và chạy](/contributing/building-running).

## Cách đọc phần còn lại của mục này

1. [Cấu trúc dự án](/contributing/project-structure) giải thích bố cục đa kho mã và cách các gói liên kết với nhau.
2. [Build và chạy](/contributing/building-running) là phần thực hành: clone, cài đặt, chạy và liên kết các gói bạn thay đổi.
3. [Kiểm thử](/contributing/testing) đề cập các bộ thử nghiệm trong scratch-gui và scratch-vm.
4. [Đóng góp](/contributing/guidelines) trình bày quy trình làm việc: nhánh, quy tắc code style và pull request.
5. [Triển khai](/contributing/deploying) giải thích cách một bản build được phát hành, phòng khi bạn tự chạy một bản riêng.

Nếu bạn muốn hiểu cách trình biên tập được ghép lại trước khi thay đổi nó, mục [Nội bộ](/internals/overview) là phần đi kèm với mục này.

## Xem thêm

- [Tổng quan nội bộ](/internals/overview)
- [Xây dựng tiện ích mở rộng](/building-extensions/introduction)
