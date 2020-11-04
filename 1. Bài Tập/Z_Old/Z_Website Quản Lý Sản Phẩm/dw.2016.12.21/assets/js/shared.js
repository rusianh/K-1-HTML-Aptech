/*
 File:      shared.js
 Tác Giả:   Vũ Hữu Phương <phuonghuuvu@gmail.com> <https://www.facebook.com/phuongonface>
 Cập Nhật:  2016.10.02
 Mô Tả:     Thư viện JavaScript trình diễn các tác vụ chung giữa các trang trong website.
			Ví dụ: Nút cuộn lên xuống (Scroll To Top)
 		    Ẩn hiện nội dung Điều Khoản Sử Dụng		
 Tham khảo: 
		    https://paulund.co.uk/playground/demo/jquery_scroll_to_top/
 */
var terms_is_visible = false;

$(document).ready(function(){
	
		/* KỊCH BẢN CUỘN LÊN-XUỐNG CỬA SỔ TRÌNH DUYỆT WEB */
	//Check to see if the window is top if not then display button
	// Kiểm tra xem có phải đang ở trên cùng cửa sổ,
	// nếu không phải thì hiển thị nút cuộn lên-xuống.
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	// Ngay sau khi nhấp chuột vào nút thì cuộn lên.
	// quá trình cuộn lên diễn ra trong khoảng 800 mili giây.
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	
	
	/* KỊCH BẢN ẨN HIỆN ĐIỀU KHOẢN SỬ DỤNG */
	$('.terms_link').click(function(event){
		
		event.preventDefault();
		
		if (terms_is_visible)
		{
			$(this).html('[Show &darr;]');
			
			$('.terms_text').slideUp(3000);
			terms_is_visible = false;			
		} else {
			$(this).html('[Hide &uarr;]');
			$('.terms_text').slideDown(3000);
			terms_is_visible = true;			
		}
		
	});
}); // end jQuery document ready.