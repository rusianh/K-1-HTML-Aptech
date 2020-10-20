/**ài Tập HTML-7.6-Regex-Email
 * Viết chương trình JavaScript:
- Nhập vào một email từ màn hình Alert của Web
- Nhận diện xem đó có phải email không ?
- Nếu đúng thì in ra màn hình: Email hợp lệ, Nếu sai thì in ra màn hình: Email không hợp lệ.

Gợi Ý: dùng biểu thức chính quy: pat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
và hàm kiểm tra: pat.test(chuỗi_đầu_vào)
 */

 var email_name = prompt("Vui lòng điền email: ");
//  https://gokisoft.com/javascript-regular-expressions-bieu-thuc-chinh-quy-javascript.html


pat=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // email phải hợp lệ, ví dụ: you@where.com
re = pat.test(email_name);
console.log(re);
