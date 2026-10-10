---
title: Tổng quan
sidebar_position: 1
---

# Trình đóng gói Turbo-IDE

Trình đóng gói Turbo-IDE biến một dự án Scratch hoặc Turbo-IDE thành chương trình độc lập: một tệp HTML duy nhất, một tệp zip, hoặc một tệp thực thi native cho Windows, macOS hoặc Linux. Đầu ra không cần trình biên tập hay kết nối internet để chạy, và nó gói gọn cả runtime đã biên dịch siêu nhanh của Turbo-IDE.

Hãy mở trình đóng gói trong trình biên tập bằng **File, Export, Package project**. Trình đóng gói là một phần của GUI và dùng chung giao diện và điều khiển cửa sổ của trình biên tập.

Nó đóng cùng vai trò với HTMLifier hoặc trình đóng gói forkphorus, nhưng với nhiều định dạng đầu ra hơn và nhiều quyền kiểm soát hơn đối với màn hình nạp, các điều khiển và cài đặt runtime.

## Bạn có thể làm gì với nó

- **Chia sẻ một dự án dưới dạng một tệp.** Gửi cho ai đó một tệp HTML mà họ có thể mở bằng bất kỳ trình duyệt nào, không có thương hiệu Turbo-IDE bao quanh.
- **Phát hành một ứng dụng desktop.** Đóng gói thành tệp thực thi Electron, NW.js hoặc WKWebView chạy như một chương trình native.
- **Nhúng một dự án bạn kiểm soát hoàn toàn.** [Nhúng tệp đã đóng gói](/packager/embedding) thay vì phụ thuộc vào bản nhúng được lưu trữ.
- **Chạy ngoại tuyến hoặc trên mạng bị hạn chế.** Xem [trình đóng gói offline](/packager/offline).

## Đưa một dự án vào trình đóng gói

Mở dự án của bạn trong trình biên tập, rồi chọn **File, Export, Package project**. Các tuỳ chọn sẽ mở ra ngay lập tức. Mỗi thao tác Package hoặc Preview đều đọc dự án hiện tại, kể cả các thay đổi chưa lưu.

Với một dự án nằm trên máy bạn, hãy nạp tệp `.sb3` của nó vào trình biên tập trước. Xem [Tích hợp với trình biên tập](/packager/editor-integration).

## Các cài đặt thông dụng

Trình đóng gói phơi bày phần lớn các tuỳ chọn runtime giống như trình biên tập, gồm [FPS tùy chỉnh](/advanced/custom-fps), [nội suy](/advanced/interpolation), [bút vẽ chất lượng cao](/advanced/high-quality-pen), và [kích thước sân khấu tùy chỉnh](/advanced/custom-stage-size). Nó cũng bổ sung các tính năng riêng của trình đóng gói:

- [Thay đổi kích thước sân khấu động](/packager/dynamic-stage-resize) để sân khấu bám theo kích thước cửa sổ hoặc toàn màn hình.
- [Hành vi đám mây đặc biệt](/packager/special-cloud-behaviors) cho các biến đám mây có tên đặc biệt.

## Xem thêm

- [Nhúng dự án đã đóng gói](/packager/embedding)
- [Tích hợp với trình biên tập](/packager/editor-integration)
- [Trình đóng gói offline](/packager/offline)
- [Tôi có thể bán dự án đã đóng gói không?](/packager/commercial-use)
