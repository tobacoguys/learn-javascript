
// SỬ DỤNG document.write()
// Trong Javascript sử dụng phương thức document.write() ghi và in nội dung( hay 1 chuỗi văn bản) trực tiếp vào HTML hoặc trang web

document.write("Hello World");
//Nên viết trong thẻ <script> và đặt trong <head> hoặc <body>


//SỬ DỤNG PHƯƠNG THỨC alert()
//Chúng ta có thể sử dụng phương thức trên để in "Hello World"
//alert() là phương thức cửa sổ hướng dẫn trình duyệt hiển thị hộp cảnh báo thông báo
alert("Hello World")
//có thể viết alert() hoặc window.alert()


// SỬ DỤNG console.log()
// Chúng ta sẽ đi chi tiết hơn ở phần sau


// SỬ DỤNG innerHTML
// Thuộc tính innerHTML của 1 phần tử HTML định nghĩa nội dung HTML của phần tử. Để hiển thị thông báo Hello World (hoặc thay đổi thuộc tính innerHTML của phần tử sẽ hiển thị thông báo đó)
// Để sử dụng thuộc innerHTML của phần tử, trước tiên cần truy cập, sử dụng phương thức document.getElementById() để truy cập

// Định nghĩa phần tử div có id là output. Sau đó truy cập phần tử. Sau đó thay đổi thuộc tính innerHTML và hiển thị thông báo
//<div id = "output"> </div>
document.getElementById("output").innerHTML = "Hello World";