

// PHƯƠNG THỨC console.log() của JavaScript
//console.log() là 1 trong những phương thức quan trọng nhất trong JavaScript. Sử dụng để in thông báo trong bảng điều khiển web
// Có thể sử dụng phương thức console.log() để gỡ lỗi mã bằng cách in đầu ra trong console. Ví dụ, nếu nhà phát triển yêu cầu API và muốn kiếm tra dữ liệu nhận được dưới dạng phản hồi, có thể sử dụng phương thức console.log()

// Cú pháp
console.log(msg1, msg2, msgN);

// Ví dụ 1
// in thông báo "Hello World" bằng phương thức console.log()
// Ngoài ra định nghĩa 2 biến số nguyên và sử dụng console.log() để in tổng 2 biến. Cũng có thể sử dụng cộng, trừ, nhân...

console.log("Hello World!");
var num1 = 30;
var num2 = 20;
console.log("Tong cua", num1, "va ", num2, "la ", num1 + num2);

//Nó sẽ in kết quả trong console
// Hello World!
// Tong cua 30 va 20 la 50

// Ví dụ 2
// Tạo ra 1 đối tượng chứa thuộc tính name, domain, description. In đối tượng đó trong bảng console.log()
var obj = {
    website: "JavaScript",
    domain: "www.Javascript.com",
    description: "Đây là web học JavaScript"
};
console.log(obj); //In thuộc tính của biến obj


// console.log() với JavaScript phía máy chủ
