/**
 * Bài Tập HTML-7.3-String Split
Phuong Vu Huu
•
Oct 19
10 points
Due Tomorrow
Viết chương trình JavaScript:
- Nhập vào một chuỗi kí tự: chứa tên các câu lạc bộ bóng đá cách nhau bởi dấu phảy, ví dụ: Real, Barca, MU, PSG
- Hãy phân tách chuỗi này ra thành nhiều phần tử chứa trong mảng, ví dụ: 0->Real, 1->Barca, 2->MU, ...
- In ra màn hình console hoặc alert nội dung của mảng

Gợi Ý: dùng hàm split(kí tự phân cách);
 */

var insert_string = prompt("Nhap chuoi ky tu: ");

console.log(insert_string.split(','));
