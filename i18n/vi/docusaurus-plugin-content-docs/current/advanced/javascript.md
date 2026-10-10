---
title: JavaScript và trình biên dịch
sidebar_position: 2
---

# JavaScript và trình biên dịch

JavaScript xuất hiện trong Turbo-IDE theo ba cách: một **trình biên dịch** tự động biến khối lệnh của bạn thành JavaScript để tăng tốc, **tiện ích Patching** cung cấp các khối `js (...)` để bạn chạy JavaScript của chính mình ngay trong dự án, và **hệ thống tiện ích mở rộng** để bạn viết trọn vẹn các khối của riêng mình bằng JavaScript. Trang này đề cập cả ba.

## Trình biên dịch

Mỗi khi một dự án chạy, Turbo-IDE biên dịch các kịch bản của bạn thành JavaScript mà trình duyệt chạy trực tiếp được, thay vì thông dịch từng khối một. Đây là lý do chính khiến dự án chạy nhanh hơn nhiều trong Turbo-IDE so với Scratch gốc. Việc này diễn ra tự động, không có gì phải bật, và kết quả tương đương với cách các khối sẽ hành xử trong Scratch (ngoài việc nhanh hơn).

Một kịch bản được biên dịch ở lần đầu tiên nó chạy. Nếu một dự án có vẻ khựng lại một chút khi một kịch bản chạy lần đầu, đó là quá trình biên dịch diễn ra một lần; nó không lặp lại.

Bạn hầu như không bao giờ cần nghĩ đến trình biên dịch. Chỉ có hai lúc bạn có thể cần:

- **Gỡ lỗi một lỗi của trình biên dịch.** Nếu một kịch bản hành xử khác trong Turbo-IDE so với trong Scratch, bạn có thể tắt trình biên dịch để kiểm tra xem lỗi có do trình biên dịch gây ra không. Xem [Tắt trình biên dịch](/advanced/disable-compiler).
- **Xem mã được sinh ra** (xem bên dưới).

## Chạy JavaScript từ bên trong dự án

[**Tiện ích Patching**](/extensions/patching) bổ sung các khối chạy JavaScript bạn viết trực tiếp ngay trong dự án:

- một khối **báo cáo** `js (...)` trả về giá trị của một biểu thức JavaScript,
- một khối **logic** `js (...)` cho các điều kiện, và
- một khối **lệnh** `js (...)` chạy một câu lệnh.

Vì JavaScript được chèn vào đầu ra đã biên dịch, các khối này chỉ hoạt động khi trình biên dịch đang bật; khi trình biên dịch bị tắt, chúng sẽ báo lỗi "Patching blocks require the compiler". Đây là cách trực tiếp để "dán một đoạn JavaScript", và giống như mọi đoạn mã chạy trên trang, hãy chỉ chạy JavaScript mà bạn hiểu rõ.

## Tự viết khối bằng JavaScript

Nếu bạn cần nhiều hơn một biểu thức nhúng (để gọi một API web, dùng một tính năng của trình duyệt, hoặc thêm các khối tái sử dụng của riêng bạn), hãy viết một **tiện ích unsandboxed**. Tiện ích unsandboxed chạy trong cùng ngữ cảnh với trình biên tập và có toàn quyền truy cập vào VM, bộ kết xuất, và các API trình duyệt thông thường như `fetch` và `localStorage`.

Đây là một nhiệm vụ lập trình thật sự, không phải một khối lệnh. Hướng dẫn đầy đủ nằm ở [Xây dựng tiện ích mở rộng](/building-extensions/introduction), và chi tiết về môi trường unsandboxed nằm ở [Tiện ích unsandboxed](/building-extensions/unsandboxed). Bạn có thể nạp một tiện ích từ URL bằng [tham số URL `extension`](/advanced/url-parameters#extension):

```
https://turbo-ide.org/?extension=https://example.com/extension.js
```

:::warning
Tiện ích unsandboxed chạy với toàn quyền truy cập vào trang. Chỉ nạp tiện ích từ các nguồn bạn tin tưởng. Một tiện ích độc hại có thể làm mọi thứ trình duyệt của bạn làm được.
:::

## Xem JavaScript được sinh ra

JavaScript do Turbo-IDE sinh ra **không nhằm để con người đọc hoặc sửa**. Nó được tối ưu cho tốc độ và khả năng tương thích, không nhằm cho dễ đọc. Ví dụ, việc đọc một mục trong danh sách có thể được biên dịch thành `(b1.value[(b0.value | 0) - 1] ?? "")`, trong đó `b0` và `b1` là tên biến nội bộ. Không có định dạng và cũng không có chú thích.

Nếu bạn vẫn muốn xem nó, hãy mở bảng điều khiển JavaScript của trình duyệt và chạy lệnh sau trước khi khởi động dự án:

```js
vm.enableDebug();
```

JavaScript đã biên dịch của từng kịch bản sau đó sẽ được ghi ra bảng điều khiển trong lúc biên dịch. Để tắt việc ghi nhật ký:

```js
vm.disableDebug();
```

Nếu mục đích của bạn là **học** cách một dự án Scratch trông như thế nào dưới dạng JavaScript, đầu ra của trình biên dịch là công cụ không phù hợp. Hãy dùng một bộ chuyển đổi dự án sang JavaScript như [Leopard](https://leopardjs.com/), thứ tạo ra mã sạch, dễ đọc.

## Đóng gói cùng mã tùy chỉnh

Để phát hành một dự án dưới dạng tệp HTML hoặc ứng dụng độc lập, hãy dùng [Trình đóng gói Turbo-IDE](/packager/overview). Trình đóng gói gói gọn runtime đã biên dịch cùng dự án của bạn để nó chạy ở bất cứ đâu, không cần trình biên tập.

## Xem thêm

- [Tiện ích Patching](/extensions/patching)
- [Tắt trình biên dịch](/advanced/disable-compiler)
- [Xây dựng tiện ích mở rộng](/building-extensions/introduction)
- [Tham số URL](/advanced/url-parameters)
