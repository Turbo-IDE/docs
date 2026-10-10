---
title: Biến đám mây
sidebar_position: 1
---

# Biến đám mây

Biến đám mây là các biến có giá trị được chia sẻ, theo thời gian thực, giữa mọi người đang mở cùng một dự án. Một biến là biến đám mây khi tên của nó bắt đầu bằng biểu tượng đám mây (`☁`). Bạn tạo biến như vậy bằng cách tích chọn "Cloud variable" trong hộp thoại "Make a Variable", y như trong Scratch.

Biến đám mây là cách các dự án xây dựng bảng xếp hạng, bộ đếm khách truy cập, nhiều người chơi đơn giản và các trạng thái chia sẻ khác.

## Những điều cơ bản

- **Chỉ có số.** Biến đám mây chỉ lưu được số. Để chia sẻ văn bản, hãy mã hoá nó thành các chữ số và giải mã ở đầu bên kia.
- **Được chia sẻ khi đang kết nối.** Giá trị chỉ tồn tại trên một máy chủ đám mây khi có người đang ở trong dự án. Không có lịch sử dài hạn, và giá trị có thể bị đặt lại khi máy chủ khởi động lại hoặc khi dự án trống một thời gian. Đừng coi biến đám mây là nơi lưu trữ vĩnh viễn.
- **Mọi người xem đều thấy thay đổi.** Khi một người chơi thay đổi biến đám mây, mọi người khác đang kết nối tới cùng dự án đều thấy giá trị mới ngay sau đó.

Theo mặc định, Turbo-IDE kết nối tới một máy chủ đám mây dùng chung (`wss://clouddata.turbowarp.org`), chính là máy chủ mà TurboWarp cũng dùng. Không có giới hạn số biến đám mây mà một dự án có thể tạo (Scratch giới hạn ở con số 10).

## Khi biến đám mây không kết nối được

Biến đám mây cần tất cả các điều sau đây đồng thời đúng:

- Dự án có ít nhất một biến đám mây.
- Bạn đang xem dự án ở chế độ phát, không phải đang chỉnh sửa. Biến đám mây bị tắt trong lúc bạn chỉnh sửa một dự án không thể lưu, để việc chỉnh sửa không can thiệp vào dữ liệu trực tiếp.
- Dự án không dùng tiện ích [cảm biến video](/extensions/video-sensing). Vì lý do riêng tư, biến đám mây bị tắt bất cứ khi nào cảm biến video đang hoạt động, để một dự án không thể lặng lẽ phát dữ liệu webcam qua mạng.

## Chọn một máy chủ khác {#cloud-host}

Bạn có thể trỏ một dự án tới một máy chủ đám mây khác bằng [tham số URL `cloud_host`](/advanced/url-parameters#accounts-and-cloud):

```
https://turbo-ide.org/12785898?cloud_host=wss://clouddata.turbowarp.org
```

Hãy dùng URL `wss://` (bảo mật). Các máy chủ `ws://` không bảo mật thường thất bại vì Turbo-IDE được phục vụ qua HTTPS. Bạn không thể kết nối tới máy chủ đám mây của chính Scratch theo cách này, vì điều đó đòi hỏi thông tin đăng nhập tài khoản Scratch mà Turbo-IDE không có.

## Làm việc với nhiều hơn là các con số

Vì chỉ cho phép số, các dự án cần danh sách, văn bản hoặc dữ liệu có cấu trúc thường mã hoá mọi thứ vào một con số rất dài hoặc một chuỗi số có dấu phân cách rồi giải mã khi đọc. Đây là một kỹ thuật bình thường của Scratch và hoạt động y như vậy trong Turbo-IDE. Hãy cập nhật với tần suất thưa (xem bên dưới) và giữ giá trị ở mức vừa phải.

## Dành cho lập trình viên bot và thư viện {#advanced}

Giao thức đám mây [giống hệt của Scratch](https://github.com/TurboWarp/cloud-server/blob/master/doc/protocol.md), nên bạn có thể tự viết client hoặc bot của riêng mình. Đây là một dịch vụ miễn phí do tình nguyện viên vận hành, nên một vài quy tắc giúp nó khả dụng cho mọi người:

- **Gửi `User-Agent`** kèm thông tin liên hệ (liên kết trang cá nhân, email hoặc trang theo dõi lỗi) và, nếu có, tên và phiên bản thư viện của bạn. Các client trình duyệt không thể đặt trường này, điều đó không sao cả vì trình duyệt gửi header `Origin` thay thế. Đừng giả vờ mình là trình duyệt.
- **Dùng ID dự án dạng chuỗi.** ID không bị giới hạn ở dạng số. Với một dự án không nằm trên trang công khai, hãy dùng thứ dễ nhận biết như `example.com/my-project`.
- **Mở một kết nối và giữ nó.** Hãy dùng WebSocket hướng sự kiện để nhận các cập nhật ngay khi chúng xảy ra. Đừng mở rồi đóng kết nối trong một vòng lặp để thăm dò giá trị.
- **Đừng gửi cập nhật ồ ạt.** Máy chủ sẽ đệm các cập nhật, có thể sắp xếp lại thứ tự chúng và có thể bỏ qua một số. Gửi nhiều hơn khoảng 10 cập nhật mỗi giây là vô ích.
- **Hãy trả lời ping.** Máy chủ gửi các khung ping WebSocket; client của bạn phải đáp lại bằng pong nếu không kết nối sẽ bị ngắt.
- **Hãy ghi lại mã đóng kết nối và các thông điệp thô từ máy chủ.** Các mã đóng 4xxx được mô tả trong [tài liệu giao thức](https://github.com/TurboWarp/cloud-server/blob/master/doc/protocol.md); việc ghi lại chúng giúp việc chẩn đoán sự cố khả thi hơn.

Đừng dùng biến đám mây để xây dựng phòng chat không được kiểm duyệt, và đừng lạm dụng dịch vụ này.

## Xem thêm

- [Tham số URL](/advanced/url-parameters) để biết `cloud_host` và các tuỳ chọn khác
- [Hành vi đám mây đặc biệt](/packager/special-cloud-behaviors) cho các tính năng đám mây bổ sung trong dự án đã đóng gói
- [Các khối biến](/blocks/variables)
