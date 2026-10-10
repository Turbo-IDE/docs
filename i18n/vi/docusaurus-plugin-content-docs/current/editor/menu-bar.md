---
title: Thanh menu
sidebar_position: 2
---

Thanh menu chạy ngang trên cùng của trình biên tập. Nó chứa các menu thả xuống (File, Edit, Project, Bookmarks), nút Cài đặt, tiêu đề dự án, và ở bên phải là trạng thái lưu cùng tài khoản của bạn. Trang này liệt kê mọi menu và mục.

Logo **Turbo-IDE** ở tận cùng bên trái là liên kết về trang chủ. Ở cửa sổ hẹp, các menu thu gọn sau nút **More** (☰); các mục vẫn nguyên như cũ.

Các phím tắt ghi dưới đây dùng `Ctrl` trên Windows/Linux và `⌘` trên macOS. Danh sách đầy đủ nằm ở [phím tắt](/editor/shortcuts).

## File

- **New** tạo một dự án mới. Nếu dự án hiện tại có thay đổi chưa lưu, bạn sẽ được cảnh báo trước.
- **New window** (chỉ ứng dụng desktop) mở một cửa sổ biên tập thứ hai.
- **Save now** (`Ctrl+S`) lưu vào nơi dự án hiện đang lưu. Khi bạn đã đăng nhập và dự án thuộc về bạn, thao tác này tải lên Turbo-IDE. Xem [quản lý dự án](/editor/project-management).
- **Save as a copy** (`Ctrl+Shift+S`) lưu một bản sao mới, độc lập.
- **Remix** tạo một dự án mới dựa trên dự án hiện tại.
- **Save to Turbo-IDE** / **Remix to Turbo-IDE** tải dự án lên tài khoản của bạn. Nút này bị tắt kèm chú giải **No new changes** khi bản đã lưu vẫn đang là mới nhất. Việc tải lên không tự động xuất bản dự án; chia sẻ là thao tác riêng trên trang web.
- **See project page** mở trang dự án này trên trang cộng đồng (hiện ra khi dự án đã tồn tại trên Turbo-IDE).
- **Load from your computer** (`Ctrl+O`) mở một tệp `.sb3` từ đĩa.
- **Save to (tên tệp)** và **Save as...** lưu tệp `.sb3` về máy bạn. Trên các trình duyệt hỗ trợ File System Access API, bạn có thể lưu đè lại chính tệp đó; nếu không, bạn sẽ nhận một bản tải xuống thông thường.
- **Export** chứa xuất bản `.sb3` cho Scratch và **Package project** (`Ctrl+P`).
- **Restore points** (`Alt+R`) mở trình quản lý [điểm khôi phục](/editor/restore-points); **Create restore point** tạo một điểm ngay lập tức.

## Edit

- **Restore Sprite / Sound / Costume** đưa lại thứ bạn vừa xoá gần nhất (bị tắt khi không có gì để khôi phục).
- **Undo** (`Ctrl+Z`) và **Redo** (`Ctrl+Shift+Z`) tác động lên [vùng làm việc](/editor/workspace) khối.
- **Addons** mở [cài đặt addon](/editor/addons).
- **Desktop settings** (chỉ ứng dụng desktop) mở các tuỳ chọn cấp ứng dụng.
- **Change Username** đặt tên người dùng được báo cáo cho dự án và biến đám mây.
- **Enable / Disable Cloud Variables** bật/tắt [biến đám mây](/advanced/cloud-variables) cho phiên này (bị tắt khi chúng không khả dụng).
- **Help** mở cửa sổ Trợ giúp trong trình biên tập, một tài liệu tra cứu có thể tìm kiếm về trình biên tập, khối lệnh và tiện ích mở rộng.
- **Products** mở danh mục sản phẩm: các vật phẩm người chơi có thể mua, kèm quyền sở hữu thử nghiệm và xuất bản thật.
- **Game Items** mở cửa sổ vật phẩm sưu tầm: các vật phẩm bền vững xuyên dự án mà người chơi giữ lại. Vật phẩm không bao giờ được bán trực tiếp; hãy trao chúng bằng khối lệnh.

## Mode

Menu **Mode** chỉ xuất hiện trong trạng thái cá tháng Tư thỉnh thoảng của trình biên tập. Nó có **Normal mode** và **Caturday mode** (các khối theo chủ đề mèo). Nó không ảnh hưởng đến cách dự án chạy và bị tắt trong suốt phần còn lại của năm.

## Project

- **Project metadata** hiển thị tác giả, các mốc thời gian và nội dung của dự án đang mở.

- **Version history** mở các phiên bản đã lưu, nhánh và kết nối kho mã.
- **Live Collaboration** mở [cộng tác trực tuyến](/editor/collaboration).
- **Debugger** và **Variable Manager** xuất hiện khi các công cụ đó khả dụng, mở [trình gỡ lỗi](/editor/debugger) và [trình quản lý biến](/editor/variable-manager).
- **Add Extension** (`Ctrl+.`) mở [thư viện tiện ích mở rộng](/extensions/overview) để thêm hoặc nhập một tiện ích.
- **Manage Extensions** (`Ctrl+Alt+E`) liệt kê các tiện ích đã nạp trong dự án.

## Bookmarks

Menu Bookmarks quản lý [dấu trang vùng làm việc](/editor/bookmarks): các vị trí camera đã lưu trong vùng làm việc khối để bạn nhảy ngay về một kịch bản. Từ đây bạn có thể thêm, chuyển tới, đổi tên, xoá, xuất, nhập và xoá sạch dấu trang, đồng thời sắp xếp chúng thành các nhóm. Dấu trang được lưu cùng dự án.

Phím tắt: `Ctrl+Alt+T` thêm dấu trang tại vị trí hiện tại; `Ctrl+Alt+1` đến `Ctrl+Alt+0` chuyển tới mười dấu trang đầu tiên.

## Settings

Nút **Settings** mở [cửa sổ cài đặt](/editor/settings): giao diện, ngôn ngữ, các tuỳ chọn trình biên dịch và runtime, [FPS tùy chỉnh](/advanced/custom-fps), [kích thước sân khấu tùy chỉnh](/advanced/custom-stage-size), và nhiều thứ khác.

## Phần bên phải

Vùng tài khoản ở bên phải thanh menu hiển thị:

- **Trạng thái lưu**, cho biết dự án có thay đổi chưa lưu hay không.
- Chỉ báo hiện diện của **cộng tác trực tuyến** khi một phiên đang hoạt động.
- Điều hướng tới phần còn lại của trang Turbo-IDE.
- **Tài khoản Rotur** của bạn, hoặc lời nhắc đăng nhập. Đăng nhập sẽ bật Save to Turbo-IDE, chia sẻ và đồng bộ đám mây cho cài đặt của bạn.

Ô **tiêu đề dự án** nằm ở giữa khi bạn sở hữu dự án. Trên các trang dự án, bạn cũng có thể thấy bộ đếm lượt xem, nút **Share**, nút **Remix**, và nút **See community**, tuỳ thuộc vào dự án và việc bạn có đăng nhập hay không. Liên kết **Feedback** luôn có sẵn.

## Xem thêm

- [Phím tắt](/editor/shortcuts)
- [Quản lý dự án](/editor/project-management)
- [Cài đặt](/editor/settings) và [addon](/editor/addons)
