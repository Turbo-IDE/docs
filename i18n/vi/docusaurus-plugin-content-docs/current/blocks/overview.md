---
title: Tổng quan khối lệnh
sidebar_position: 1
---

Khối lệnh là những mảnh ghép bạn lắp lại với nhau để xây dựng một dự án. Mỗi khối là một lệnh; một chồng khối là một kịch bản. Turbo-IDE dùng cùng ngôn ngữ khối với Scratch, nên mọi thứ bạn biết từ Scratch đều dùng được ở đây, và Turbo-IDE bổ sung thêm một số khối phụ (xem [các khối bổ sung của Turbo-IDE](/blocks/turbo-ide-extras)).

## Hình dạng khối

Hình dạng của khối cho bạn biết nó nối với nhau thế nào và làm gì.

- **Khối mũ** có đầu bo tròn và đáy phẳng. Chúng khởi động một kịch bản để phản ứng lại một sự kiện, ví dụ `when green flag clicked`. Bạn không thể đặt gì phía trên một khối mũ.
- **Khối xếp chồng** là hình chữ nhật có rãnh ở trên và chốt ở dưới. Chúng làm một việc rồi chuyển điều khiển cho khối bên dưới, ví dụ `move 10 steps`. Phần lớn các khối có dạng này.
- **Khối logic** là hình lục giác nhọn, trả về `true` hoặc `false`, ví dụ `mouse down?`. Chúng cắm vào các ô hình lục giác của khối khác.
- **Khối báo cáo** là hình oval bo tròn, trả về một giá trị (một số hoặc đoạn văn bản), ví dụ `x position` hoặc `answer`. Chúng cắm vào các ô bo tròn của khối khác.
- **Khối C** (còn gọi là khối bọc) bọc quanh các khối khác, ví dụ `repeat 10` hoặc `if ... then`. Các khối bạn thả vào bên trong chạy theo quy tắc của khối C.
- **Khối đậy** có rãnh ở trên nhưng đáy phẳng, nên không thể có khối nào nối tiếp sau chúng. `stop all` và `delete this clone` là các khối đậy.

## Bảng khối và các nhóm

Bảng khối chạy dọc ở bên trái [vùng làm việc trình biên tập](/editor/workspace). Nó được tổ chức thành các nhóm phân biệt bằng màu, và bấm vào tên nhóm (hoặc dấu chấm của nó) sẽ cuộn bảng khối tới phần đó. Các nhóm tích hợp sẵn là:

- [Motion](/blocks/motion) (xanh dương) di chuyển và xoay sprite.
- [Looks](/blocks/looks) (tím) đổi trang phục, kích thước, hiệu ứng và bong bóng thoại.
- [Sound](/blocks/sound) (hồng cánh sen) phát âm thanh và đặt âm lượng.
- [Events](/blocks/events) (vàng) khởi động kịch bản và gửi quảng bá.
- [Control](/blocks/control) (vàng kim) xử lý vòng lặp, điều kiện, chờ và clone.
- [Sensing](/blocks/sensing) (xanh nhạt) đọc chuột, bàn phím, bộ đếm thời gian và các sprite khác.
- [Operators](/blocks/operators) (xanh lá) làm toán, xử lý văn bản và logic.
- [Variables](/blocks/variables) (cam) lưu giá trị và danh sách (dữ liệu).
- [My Blocks](/blocks/my-blocks) (hồng/đỏ) chứa các khối tự tạo do bạn định nghĩa.

Bên dưới các nhóm đó, mỗi [tiện ích mở rộng](/extensions/overview) đã nạp (Pen, Music, v.v.) sẽ thêm nhóm riêng của nó. Xem trang [bảng khối lệnh](/editor/blocks-palette) để biết cách tìm kiếm và kéo khối.

## Các khối bổ sung của Turbo-IDE và TurboWarp

Turbo-IDE kế thừa các bổ sung của TurboWarp và tự thêm của riêng mình, nên sẽ xuất hiện một số khối mà Scratch gốc không có, trải rác trên nhiều nhóm: khối chuyển động, điều khiển, toán tử, cảm biến và dữ liệu bổ sung, cùng một khối `return` cho khối tự tạo. Chúng được tài liệu hóa theo từng nhóm và tập hợp lại tại một trang duy nhất: [các khối bổ sung của Turbo-IDE](/blocks/turbo-ide-extras).

## Xem thêm

- [Bảng khối lệnh](/editor/blocks-palette)
- [Vùng làm việc](/editor/workspace)
- [Tổng quan tiện ích mở rộng](/extensions/overview)
- [Các khối bổ sung của Turbo-IDE](/blocks/turbo-ide-extras)
