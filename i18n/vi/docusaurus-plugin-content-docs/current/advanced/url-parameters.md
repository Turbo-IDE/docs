---
title: Tham số URL
sidebar_position: 3
---

# Tham số URL

Bạn có thể điều khiển cách Turbo-IDE nạp và chạy một dự án bằng cách thêm tham số vào URL. Điều này hữu ích khi muốn chia sẻ một thiết lập có thể tái hiện, nhúng một dự án với các tuỳ chọn cụ thể, hoặc tự động hoá việc kiểm thử.

Các tham số dùng cú pháp chuỗi truy vấn tiêu chuẩn: một dấu `?` sau URL, rồi các cặp `tên=giá_trị` nối với nhau bằng `&`. Các thăm số chỉ là công tắc thì không cần giá trị:

```
https://editor.turboshare.org.uk/123456789?turbo&fps=60&username=alice
```

:::note
Turbo-IDE đã tự lưu các cài đặt thông dụng (chế độ turbo, FPS, bút vẽ chất lượng cao, kích thước sân khấu, nội suy) vào URL cho bạn khi bạn thay đổi chúng trong trình biên tập. Các tham số bên dưới phần lớn là các tham số "nâng cao" mà bạn sẽ tự đặt bằng tay, cộng thêm các tham số thông dụng để bạn đối chiếu.
:::

## Nạp một dự án

| Tham số | Giá trị | Tác dụng |
|-----------|-------|--------------|
| (đường dẫn) | ID dự án | `editor.turboshare.org.uk/123456789` nạp dự án đó |
| `project_url` | URL trực tiếp | Nạp một tệp `.sb3` (hoặc `project.json`) từ bất kỳ URL nào hỗ trợ CORS. Đừng dùng kết hợp với ID dự án. |
| `clone` | URL kho git | Nhân bản một dự án từ một kho git của Turbo-IDE (xem [Tích hợp Git](/editor/git)). |

`project_url` cần một bản tải trực tiếp có hỗ trợ [CORS](/advanced/cors) (`Access-Control-Allow-Origin: *`). Nếu bạn bỏ qua giao thức thì `https://` được mặc định áp dụng; các URL `http://` thường sẽ không hoạt động. [GitHub Pages](https://pages.github.com/) hoạt động tốt cho mục đích này.

```
https://editor.turboshare.org.uk/?project_url=https://example.com/project.sb3
```

## Hiệu năng và runtime

| Tham số | Giá trị | Tác dụng |
|-----------|-------|--------------|
| `fps` | số | Đặt [tốc độ khung hình](/advanced/custom-fps). `0` chạy theo tốc độ làm mới của màn hình. |
| `turbo` | công tắc | Bật [chế độ turbo](/advanced/warp-timer) (không giới hạn mỗi khung). |
| `interpolate` | công tắc | Bật [nội suy](/advanced/interpolation) để chuyển động mượt hơn. |
| `hqpen` | công tắc | Bật [bút vẽ chất lượng cao](/advanced/high-quality-pen). |
| `limitless` | công tắc | Loại bỏ [các giới hạn lặt vặt](/advanced/remove-limits). |
| `offscreen` | công tắc | [Bỏ hàng rào](/advanced/remove-fencing) để sprite có thể ra ngoài sân khấu. |
| `clones` | số | Đặt số clone tối đa (xem [Clone vô hạn](/advanced/infinite-clones)). |
| `stuck` | công tắc | Bật [bộ đếm thời gian warp](/advanced/warp-timer). Cũng nhận dạng dưới dạng `warp_timer`. |
| `nocompile` | công tắc | [Tắt trình biên dịch](/advanced/disable-compiler). Bạn hầu như không bao giờ cần điều này. |

## Hiển thị

| Tham số | Giá trị | Tác dụng |
|-----------|-------|--------------|
| `size` | `RỘNGxCAO` | Đặt [kích thước sân khấu tùy chỉnh](/advanced/custom-stage-size), ví dụ `size=640x360`. |
| `scale` | số | Giới hạn mức phóng to của sân khấu. `scale=1` giữ nguyên độ phân giải gốc. |
| `fullscreen-background` | màu CSS | Màu nền hiển thị khi toàn màn hình. Viết dấu `#` thành `%23`, ví dụ `%23abc123`. |

## Tài khoản và đám mây {#accounts-and-cloud}

| Tham số | Giá trị | Tác dụng |
|-----------|-------|--------------|
| `username` | chuỗi | Đặt giá trị mà khối `username` trả về và khối [biến đám mây](/advanced/cloud-variables) dùng. Tên người dùng đặt theo cách này sẽ không được lưu. |
| `cloud_host` | URL `wss://...` | Trỏ [biến đám mây](/advanced/cloud-variables#cloud-host) sang một máy chủ khác. Mặc định là `wss://clouddata.turbowarp.org`. |

## Cộng tác

| Tham số | Giá trị | Tác dụng |
|-----------|-------|--------------|
| `room` | mã phòng | Tự động vào một phòng [cộng tác](/editor/collaboration) trực tuyến khi đã có tên người dùng. Tham số bị xoá khỏi URL sau khi được đọc. |

## Tiện ích mở rộng {#extension}

| Tham số | Giá trị | Tác dụng |
|-----------|-------|--------------|
| `extension` | URL | Nạp một tiện ích mở rộng tùy chỉnh. Có thể lặp lại để nạp nhiều tiện ích. |

```
https://editor.turboshare.org.uk/?extension=https://example.com/a.js&extension=https://example.com/b.js
```

Xem [Xây dựng tiện ích mở rộng](/building-extensions/introduction) để biết chúng hoạt động thế nào.

## Tham số chỉ dành cho bản nhúng

Chúng chỉ áp dụng cho [trình phát nhúng](/advanced/embedding):

| Tham số | Giá trị | Tác dụng |
|-----------|-------|--------------|
| `autoplay` | công tắc | Tự động bấm cờ xanh khi dự án đã nạp xong. |
| `addons` | danh sách phân cách bằng dấy phẩy | Bật các addon cụ thể trong bản nhúng, ví dụ `addons=pause,gamepad`. |
| `settings-button` | công tắc | Hiện nút cài đặt nâng cao trong bản nhúng. |

## Xem thêm

- [Nhúng dự án](/advanced/embedding)
- [Biến đám mây](/advanced/cloud-variables)
- [CORS](/advanced/cors)
- [Cài đặt trình biên tập](/editor/settings)
