---
title: Giới thiệu về tiện ích mở rộng tùy chỉnh
sidebar_position: 1
---

# Giới thiệu về tiện ích mở rộng tùy chỉnh

Tiện ích mở rộng tùy chỉnh thêm khối lệnh mới vào Turbo-IDE bằng JavaScript. Bộ hướng dẫn này đi dần từ tiện ích đơn giản nhất có thể đến các tiện ích đầy đủ tính năng, mỗi lần một khái niệm. Hãy đọc các trang theo thứ tự và làm các bài tập trước khi đi tiếp; mỗi trang đều giả định bạn đã hiểu trang trước đó.

Nếu bạn chỉ muốn dùng các khối có sẵn, bạn không cần bất cứ điều gì ở đây. Hãy mở trình biên tập, bấm nút "Add Extension" (dấu cộng bên cạnh hai khối lệnh ở góc dưới bên trái của bảng khối), và chọn một trong các tiện ích tích hợp sẵn. Hướng dẫn này dành cho những người muốn tự viết tiện ích của riêng mình.

## "Tiện ích mở rộng" có nghĩa là gì

Từ này được dùng cho một vài thứ khác nhau:

| | Truy cập được nội bộ Turbo-IDE | Nạp được từ URL |
|:-:|:-:|:-:|
| Tiện ích tích hợp sẵn (Pen, Music, v.v.) | Có | Không |
| Tiện ích tùy chỉnh sandboxed | Không | Có |
| Tiện ích tùy chỉnh unsandboxed | Có | Có |

Các trang này chỉ đề cập tới tiện ích mở rộng **tùy chỉnh** (các loại sandboxed và unsandboxed). Tiện ích tích hợp sẵn dùng chung định dạng mô tả khối nhưng được đóng gói vào chính bản build của trình biên tập, nên việc phát triển chúng là một quy trình khác, liên quan đến [mã nguồn scratch-vm](/contributing/project-structure). [Sự khác nhau giữa sandboxed và unsandboxed](/building-extensions/sandbox) sẽ được trình bày ở phần sau.

## Tính tương thích

Tiện ích mở rộng tùy chỉnh là tính năng của Turbo-IDE và TurboWarp. Các dự án dùng chúng không thể tải lên trang web Scratch. Chúng hoạt động trong trình biên tập Turbo-IDE và có thể được đóng gói thành ứng dụng hoặc trang web độc lập bằng [Trình đóng gói Turbo-IDE](/packager/overview), thứ luôn chạy tiện ích ở chế độ unsandboxed.

## Điều kiện tiên quyết

Viết tiện ích mở rộng đòi hỏi bạn biết JavaScript. Nếu bạn chưa phân biệt được `"1"` (một chuỗi) và `1` (một số), hãy học JavaScript trước đã; nếu không, việc phát triển tiện ích mở rộng sẽ rất khó khăn. Hướng dẫn này không dạy ngôn ngữ lập trình.

Bạn cũng cần công cụ nhà phát triển của trình duyệt. Chúng thường nằm ở chuột phải rồi "Kiểm tra" (Inspect), hoặc Ctrl+Shift+I (Option+Command+I trên macOS) trong ứng dụng desktop. Viết JavaScript mà không mở bảng điều khiển thật đau đớn, và phần lớn vấn đề bạn gặp phải chỉ hiện ra ở đó.

## Thiết lập môi trường phát triển

Có một vài cách để nạp một tiện ích mở rộng bạn đang viết.

### Nạp từ tệp hoặc mã dán trực tiếp (đơn giản nhất)

Trong trình biên tập, chọn "Add Extension", cuộn xuống cuối, rồi chọn "Custom Extension". Hộp thoại cho phép bạn dán JavaScript trực tiếp hoặc chọn một tệp cục bộ. Cách này dùng được trên mọi máy chỉ với một trình soạn thảo văn bản, nhưng bạn phải dán lại hoặc chọn lại tệp mỗi khi thay đổi nó.

### Máy chủ HTTP cục bộ (khuyên dùng)

Một máy chủ web cục bộ giúp Turbo-IDE nạp tiện ích của bạn qua URL, nên bạn chỉ cần tải lại trang sau mỗi thay đổi. Nếu bạn đã cài Python, bạn đã có sẵn một máy chủ:

```bash
cd duong-dan/toi/thu-muc/cua-ban
python3 -m http.server 8080
```

Lệnh đó phục vụ thư mục hiện tại tại địa chỉ `http://localhost:8080/`. Hãy đặt một tệp tên `hello-world.js` vào thư mục đó và xác nhận bạn mở được [http://localhost:8080/hello-world.js](http://localhost:8080/hello-world.js) trong trình duyệt trước khi đi tiếp.

Tạm thời hãy dùng một cổng **khác 8000**. Cổng 8000 là cổng đặc biệt: nó là một trong số các URL mà Turbo-IDE tin cậy để chạy [unsandboxed](/building-extensions/unsandboxed), kèm theo những trách nhiệm bổ sung mà chúng tôi chưa sẵn sàng tiếp nhận. Hãy bắt đầu ở chế độ sandboxed.

Về sau chúng tôi sẽ giới thiệu [một máy chủ phát triển chuyên dụng](/building-extensions/better-development-server), nhưng việc khởi đầu với thiết lập thô sơ nhất giúp bạn thấy rõ từng bộ phận đang hoạt động.

## Bước tiếp theo

Hãy cùng [viết tiện ích mở rộng đầu tiên](/building-extensions/hello-world).
