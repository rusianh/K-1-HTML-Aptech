/**Bài Tập HTML-7.5-String replaceAll
 * Viết chương trình JavaScript:
- Nhập vào một chuỗi kí tự có thật nhiều chữ Samsung
- Thay thế toàn bộ các từ Samsung thành các từ Apple
- In ra màn hình console hoặc alert nội dung của chuỗi mới.

Gợi Ý: dùng hàm replaceAll();
 */

var insert_string = "Samsung là Samsung hay Samsung";
var new_string_apple = insert_string.replaceAll('Samsung', 'Apple');
console.log("chuỗi mới là: "+ new_string_apple);

