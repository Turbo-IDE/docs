---
title: Nhúng dự án
sidebar_position: 4
---

# Nhúng dự án

Bạn có thể nhúng một dự án Turbo-IDE vào bất kỳ trang web nào bằng một `<iframe>` tiêu chuẩn. Bản nhúng chỉ hiển thị sân khấu và các điều khiển, không có phần trình biên tập bao quanh.

```html
<iframe
  src="https://turbo-ide.org/414716080/embed"
  width="482"
  height="412"
  frameborder="0"
  scrolling="no"
  allowfullscreen
></iframe>
```

Hãy thay `414716080` bằng ID dự án của bạn. Bạn có thể chọn chiều rộng và cao bất kỳ; trình phát sẽ tự co giãn cho vừa. Một iframe `482x412` sẽ hiển thị sân khấu ở đúng tỷ lệ `480x360` (52 pixel còn lại chừa chỗ cho thanh điều khiển). Bản nhúng có nền trong suốt và một nút toàn màn hình ở những nơi trình duyệt cho phép.

## Dự án Scratch và dự án Turbo-IDE

ID trong URL có thể thuộc một trong hai loại dự án:

- **ID dự án Scratch** (toàn là chữ số, ví dụ `414716080`) nhúng một dự án được chia sẻ trên Scratch.
- **ID dự án cộng đồng Turbo-IDE** (ví dụ `p1784079025833421000VYnQRa`) nhúng một dự án được chia sẻ trên trang cộng đồng Turbo-IDE. Đây là ID có trong URL trang dự án, `https://turbo-ide.org/project/p1784079025833421000VYnQRa`.

```html
<iframe src="https://turbo-ide.org/p1784079025833421000VYnQRa/embed"></iframe>
```

Cả hai đều dùng cùng một đường dẫn `/embed`, cùng các tham số và cùng API postMessage được mô tả bên dưới.

:::note
Dự án chưa chia sẻ thì không thể nhúng được. Hãy chia sẻ dự án trước, hoặc đóng gói nó bằng [Trình đóng gói Turbo-IDE](/packager/overview) rồi [nhúng tệp đã đóng gói](/packager/embedding). Xem [Dự án chưa chia sẻ](/advanced/unshared-projects).
:::

## Tham số URL

Mọi [tham số URL tiêu chuẩn](/advanced/url-parameters) đều hoạt động với bản nhúng, cộng thêm một vài tham số chỉ dành riêng cho bản nhúng.

| Tham số | Tác dụng |
|-----------|--------------|
| `autoplay` | Tự động bấm cờ xanh khi dự án đã nạp xong. |
| `settings-button` | Thêm nút cài đặt nâng cao vào bản nhúng. |
| `fullscreen-background` | Đặt màu nền khi toàn màn hình. Viết dấu `#` thành `%23`. |
| `addons` | Bật các addon cụ thể (xem bên dưới). |

```html
<iframe src="https://turbo-ide.org/15832807/embed?autoplay&settings-button"></iframe>
```

Các khối âm thanh có thể không phát cho tới khi người dùng tương tác với dự án (một cú bấm chuột chẳng hạn). Đây là giới hạn của trình duyệt, không phải thứ Turbo-IDE có thể vượt qua, nên autoplay không thể buộc âm thanh phát ngay khi tải.

### Addon trong bản nhúng

Bản nhúng khởi động với tất cả addon đều tắt. Tham số `addons` nhận một danh sách ID addon phân cách bằng dấy phẩy:

```
https://turbo-ide.org/15832807/embed?addons=pause,gamepad,mute-project
```

Các addon hữu ích cho bản nhúng gồm:

- `pause` (nút tạm dừng)
- `mute-project` (trình phát tắt tiếng)
- `remove-curved-stage-border`
- `drag-drop` (kéo thả tệp)
- `gamepad` (hỗ trợ tay cầm game)
- `clones` (bộ đếm clone)

Các addon chỉ ảnh hưởng đến trình biên tập thì không có tác dụng ở đây.

## Bản nhúng co giãn theo khung

Để bản nhúng thay đổi kích thước theo vùng chứa của nó, hãy bọc nó trong một hộp có đệm:

```html
<div style="position: relative; padding-bottom: 75%; height: 0;">
  <iframe
    src="https://turbo-ide.org/123456789/embed"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>
```

Đệm `75%` tạo một khung tỷ lệ 4:3 cho khớp với sân khấu mặc định. Hãy điều chỉnh nếu bạn dùng [kích thước sân khấu tùy chỉnh](/advanced/custom-stage-size).

## Nạp dự án lúc chạy bằng postMessage

Thay vì đặt ID dự án vào URL, trang chủ có thể gửi một tệp SB3 cho bản nhúng sau khi nó đã nạp xong. Điều này hữu ích cho các bộ nạp tùy chỉnh hoặc khi dự án đến từ nơi khác chứ không phải từ một ID dự án.

Hãy gửi một thông điệp `LOAD_SB3`:

```js
const iframe = document.getElementById('Turbo-IDE-embed');
iframe.contentWindow.postMessage({
  type: 'LOAD_SB3',
  data: 'https://example.com/project.sb3', // chuỗi URL, ArrayBuffer hoặc Uint8Array
  title: 'Tiêu đề tuỳ chọn'
}, '*');
```

`data` có thể là:

- một **chuỗi URL** mà bản nhúng sẽ tự tải (phải hỗ trợ [CORS](/advanced/cors)),
- một **ArrayBuffer** chứa các byte thô của SB3, hoặc
- một **Uint8Array** chứa các byte thô của SB3.

Bản nhúng sẽ trả lời bằng một thông điệp `LOAD_SB3_RESPONSE`:

```js
window.addEventListener('message', (event) => {
  const msg = event.data;
  if (msg && msg.type === 'LOAD_SB3_RESPONSE') {
    // msg.status:  'success' hoặc 'error'
    // msg.message: thông tin chi tiết đọc được
    // msg.title:   tiêu đề bạn đã truyền vào
    // msg.timestamp: mili giây
    console.log(msg.status, msg.message);
  }
});
```

Khi thành công, VM sẽ khởi động lại và nạp dự án mới. Hãy thêm `autoplay` vào URL bản nhúng nếu bạn muốn nó tự chạy sau khi nạp xong.

Vì lý do bảo mật, bản nhúng chỉ nhận `LOAD_SB3` từ các nguồn tin cậy: các trang cùng nguồn, các trang cha `https://`, `file://` để thử nghiệm cục bộ, và các cổng phát triển cục bộ `3000`, `8080` và `8601`. Các thông điệp từ nguồn khác sẽ bị bỏ qua.

## Bảo mật

Nếu bạn xây dựng liên kết nhúng từ dữ liệu do người dùng cung cấp, hãy làm sạch các đầu vào. Một người dùng có thể chèn được tham số URL tuỳ ý thì có thể thay đổi cách bản nhúng hành xử. Bạn cũng có thể thêm thuộc tính `sandbox` cho iframe để phòng thủ nhiều lớp:

```html
<iframe
  src="https://turbo-ide.org/123456789/embed"
  sandbox="allow-scripts allow-same-origin allow-fullscreen"
></iframe>
```

## Khi bạn cần nhiều quyền điều khiển hơn

Để kiểm soát màn hình nạp, các điều khiển, và việc đóng gói thành một tệp duy nhất, hãy dùng [Trình đóng gói Turbo-IDE](/packager/overview). Các dự án đã đóng gói cũng có thể được [nhúng](/packager/embedding).

## Xem thêm

- [Tham số URL](/advanced/url-parameters)
- [Dự án chưa chia sẻ](/advanced/unshared-projects)
- [Trình đóng gói: Nhúng](/packager/embedding)
- [CORS](/advanced/cors)
