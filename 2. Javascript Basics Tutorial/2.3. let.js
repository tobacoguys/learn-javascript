//Câu lệnh let trong JavaScript là gì?

//Câu lệnh let của JavaScript được sử dụng để khai báo một biến. Với câu lệnh let, chúng ta có thể khai báo một biến có phạm vi khối. 
//Điều này có nghĩa là một biến được khai báo bằng let chỉ có thể truy cập được trong khối mã mà nó được định nghĩa (hay còn gọi là block).


//Khai báo biến với câu lệnh let
let var_name = value;

//Ví dụ
let name = "John";
let age = 35;
let x = true;

//Sử dụng câu lệnh let, chúng ta có thể khai báo 1 biến có bất kì kiểu dữ liệu nào, ví dụ: số, chuỗi, boolean,...

//Phạm vi khối JavaScript so với phạm vi hàm
//Phạm vi của biến được khai báo bằng từ khóa let là phạm vi khối. Điều này có nghĩa là nếu bạn định nghĩa biến bằng từ khóa let trong khối cụ thể, bạn chỉ có thể truy cập biến bên trong khối cụ thể đó và nếu bạn cố gắng truy cập biến bên ngoài khối, nó sẽ đưa ra lỗi như "biến không được định nghĩa"

{
    let x = John; //x ở đây không thể truy cập được
}


//Từ khóa var có phạm vi hàm, nghĩa là nếu bạn định nghĩa biến bằng từ khóa var trong bất kì khối hàm nào, bạn có thể truy cập biến đó trong toàn bộ hàm.

function foo(){
    if (true){
        let x = 5
        var y = 10
    }
    //Ở đây x không thể truy cập được trong khi y có thể truy cập được ( x chỉ truy cập trong hàm if, còn y truy cập trong hàm foo)
}

//Đôi khi chúng ta cần định nghĩa biến có cùng tên trong các khối khác nhau của 1 hàm. Xung đột có thể xảy ra với giá trị biến nếu chúng sử dụng từ khóa var

//Ví dụ
//Trong ví dụ dưới đây, chúng tôi định nghĩa biến a bằng từ khóa let, biến b bằng từ khóa var.

let a = 10;
var b = 20;
function test(){ //Định nghĩa hàm test
    let a = 50;
    var b = 100;
    document.write("a = " + a + ", b = " + b + "<br/>"); //In các giá trị biến trên trong hàm và hàm sẽ in 50 và 100 vì nó ưu tiên các biến cụ bộ hơn các biến toàn cục
}
test();

//Ví dụ
//Trong ví dụ dưới đây, chúng tôi khởi tạo biến bool với giá trị 'true'. Sau đó, chúng tôi khai báo các biến c và d bằng cách sử dụng từ khóa let và var trong khối if