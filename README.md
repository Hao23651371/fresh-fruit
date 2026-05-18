# Nhom9 - Website Bán Trái Cây

Website thương mại điện tử bán trái cây sạch, được xây dựng bằng HTML5, Bootstrap 5 và JavaScript thuần.

## Giới thiệu

Đây là đồ án môn học của **Nhóm 9**, xây dựng một website bán trái cây trực tuyến với đầy đủ các chức năng cơ bản: duyệt sản phẩm, đăng ký / đăng nhập, giỏ hàng và thanh toán.

## Tính năng

- Trang chủ với banner, danh sách sản phẩm nổi bật và thống kê
- **16 trang chi tiết sản phẩm**: cam, bưởi, dứa, dừa, đu đủ, khế, lựu, măng cụt, mít, sầu riêng, táo, thanh long, chôm chôm, dâu tây, vú sữa, v.v.
- Đăng ký / Đăng nhập (lưu thông tin với `localStorage`)
- Giỏ hàng và trang thanh toán
- Trang khuyến mãi với bộ đếm ngược thời gian
- Trang tin tức / blog
- Tìm kiếm sản phẩm
- Giao diện responsive — tương thích máy tính, máy tính bảng và điện thoại
- Header / Footer dùng chung qua `layout.js`

## Công nghệ sử dụng

| Thành phần              | Chi tiết                            |
| ------------------------- | ------------------------------------ |
| HTML5                     | Cấu trúc trang semantic            |
| CSS3 + Bootstrap 5        | Giao diện responsive                |
| JavaScript + jQuery 3.7.1 | Xử lý logic phía client           |
| Font Awesome 6.7.2        | Bộ icon                             |
| localStorage              | Lưu trữ tài khoản và giỏ hàng |

## Cấu trúc thư mục

```
Nhom9_WebBanTraiCay/
├── html/                    # Toàn bộ các trang HTML
│   ├── bai5ghep.html        # Trang chủ
│   ├── gioithieudau.html    # Giới thiệu
│   ├── khuyenmai.html       # Khuyến mãi
│   ├── tintuc.html          # Tin tức
│   ├── bai11.html           # Giỏ hàng
│   ├── thanhtoan.html       # Thanh toán
│   ├── xacnhan.html         # Xác nhận đơn hàng
│   ├── timkiem.html         # Kết quả tìm kiếm
│   ├── sitemap.html         # Sơ đồ trang
│   ├── cam.html             # Chi tiết: Cam Sành
│   ├── chomchom.html        # Chi tiết: Chôm Chôm
│   ├── chondautay.html      # Chi tiết: Dâu Tây
│   ├── dau.html             # Chi tiết: Dứa
│   ├── dua.html             # Chi tiết: Dừa
│   ├── dudu.html            # Chi tiết: Đu Đủ
│   ├── khe.html             # Chi tiết: Khế
│   ├── luu.html             # Chi tiết: Lựu
│   ├── mangcut.html         # Chi tiết: Măng Cụt
│   ├── mit.html             # Chi tiết: Mít
│   ├── saurieng.html        # Chi tiết: Sầu Riêng
│   ├── tao.html             # Chi tiết: Táo
│   ├── thanhlong.html       # Chi tiết: Thanh Long
│   └── vusua.html           # Chi tiết: Vú Sữa
├── css/
│   ├── style.css            # Stylesheet chính
│   ├── foooter.css          # Stylesheet footer
│   └── bootstrap.css        # Bootstrap framework
├── js/
│   ├── layout.js            # Header & Footer dùng chung
│   ├── dangNhap.js          # Xử lý đăng nhập
│   ├── dangKy.js            # Xử lý đăng ký
│   ├── jquery-3.7.1.js      # jQuery
│   ├── bootstrap.bundle.js  # Bootstrap JS
│   └── fontawesome-free-6.7.2-web/
└── images/                  # Hình ảnh sản phẩm và banner (40+ file)
```

## Hướng dẫn chạy

Đây là website tĩnh, **không cần cài đặt hay build**. Chỉ cần mở file HTML trong trình duyệt:

1. Clone hoặc tải source code về máy.
2. Mở thư mục `html/`.
3. Mở file `bai5ghep.html` bằng trình duyệt (Chrome, Edge, Firefox, ...).

> Khuyến nghị dùng extension **Live Server** trong VS Code để tránh lỗi CORS khi tải tài nguyên cục bộ.

## Thành viên nhóm

| 1 | Trần Thế Hào | thiết kế web |
| :- | --------------- | -------------- |

## Lưu ý

- Dữ liệu đăng ký / đăng nhập và giỏ hàng được lưu trong `localStorage` của trình duyệt, không có backend hay cơ sở dữ liệu thực.
- Chức năng thanh toán chỉ mang tính demo, không xử lý giao dịch thật.
