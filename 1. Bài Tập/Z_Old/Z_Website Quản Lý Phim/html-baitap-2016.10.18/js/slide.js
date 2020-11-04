/*
 Bài học rút ra là: lập trình hướng đối tượng vẫn hơn hẳn lập trình hướng thủ tục,
 đặc biệt là khi viết các chương trình dịch vụ để cho chương trình khách sử dụng.
 
 Các hàm chỉ nên viết ở chương trình khách, còn chương trình dịch vụ nên viết theo
 kiểu thuần túy hướng đối tượng.
 
 Nếu chương trình dịch vụ viết theo kiểu hướng thủ thục, thì đến khi thay đổi các tham số
 sẽ rất bất tiện và gây rối.
 
 Cú pháp hướng đối tượng <object>.<class_member> làm cho mọi thứ dễ dàng và rõ ràng hơn.
 */
var slide = 
{
	// Mảng chứa các đường dẫn tương đối của ảnh trong slideshow
    imgs : [
			"assets/img/logo-firefox-256.jpg", 
			"assets/img/logo-chrome-256.png", 
			"assets/img/logo-safari-256.jpg", 
			"assets/img/logo-ie-256.jpg"
	],		
	
	// Phần tử html chứa ảnh hiện tại (thường là thẻ <img />)
	id: "photo",
	width: 750,
	style: "animation: fadeout 6s infinite;",
	
	// thời gian hiển thị của mỗi ảnh trên slide (milli giây)
	show_duration : 6000,
	
	// Ảnh đại diện (thường lấy theo tỉ lệ width/height = 16/9
	thumb_width: 96, /* 16x6 */
	
	thumb_height: 54, /* 9x6 */
	thumb_style: 'border: 1px solid gray; margin: 1px',
	thumb_style_highlighted: 'border: solid gray 5px',
	
	/*
	 ☚ Left Pointing (Chỉ tay sang trái)
	 ☛ Right Pointing (Chỉ tay sang phải)
	 ← Left Arrow (Mũi tên sang trái)
	 → Right Arrow (Mũi tên sang phải)
	 < trai
	 > phai
	 */
    entity_previous: '☚',
    entity_next:  '☛',
	img_previous: 'assets/img/previous-icon.gif',
	img_next: 'assets/img/next-icon.gif',
	
	// Biến đếm trỏ đến ảnh hiện tại
	index: 0,
    showImg: function (j) {
		document.getElementById(this.id).src = this.imgs[j];			  
		
		// Không làm nổi bật thumbnail cũ
		for(var i=0; i < this.imgs.length; i++)
		{
			document.getElementById("thumb"+i).style = this.thumb_style;
		}
		
		// Làm nổi bật thumbnail mới
		document.getElementById("thumb"+j).style = this.thumb_style_highlighted;
		
		this.index = j;
	},
	previous: function() {
			// Giảm chỉ số xuống phần tử trước đó trong mảng.
			this.index--;
		
			// Đảm bảo số thứ tự của ảnh không được nằm ngoài phạm vi của mảng
			// và các ảnh được hiển thị lần lượt theo vòng tròn
			if(this.index < 0)
				this.index = this.imgs.length - 1;
	   
			// Hiển thị ảnh 
			this.showImg(this.index);
		
	 },
	 next: function() { 
			// Tăng chỉ số lên phần tử sau đó trong mảng.
			this.index++;

			// Đảm bảo số thứ tự của ảnh không được nằm ngoài phạm vi của mảng
			// và các ảnh được hiển thị lần lượt theo vòng tròn
			if(this.index > this.imgs.length - 1)
				this.index = 0;
		   
			// Hiển thị ảnh 
			this.showImg(this.index);
		
	 },
	/*
		Điều hướng trước(previous)-sau(next) bằng ảnh
	 */
	previous_next_icons: function() {
			document.write('<br />');	// Xuống dòng
			
			document.write('<img src="../assets/js/'+this.img_previous+'" onClick="slide.previous();" /><img src="../assets/js/'+this.img_next+'" onClick="slide.next();" />');
			
			document.write('<br />');	// Xuống dòng
				
	},
	/*
		Điều hướng trước(previous)-sau(next) bằng thực thể html
		Tham khảo mã thực thể html:
		http://www.sabinanore.com/design/html-special-symbols/
	 */
	previous_next_entities: function() {
			document.write('<br />');	// Xuống dòng
			
			document.write('<span style="font-size: 32px; cursor: pointer;"><a onClick="slide.previous();">'+this.entity_previous+'</a> <a onClick="slide.next();">'+this.entity_next+'</a></span>');
			
			document.write('<br />');	// Xuống dòng
			
			// Ban đầu thì ảnh đại diện đầu tiên sẽ được làm nổi bật.
			document.getElementById("thumb0").style = this.thumb_style_highlighted;
				
	},
	// Phân trang các phần tử trên Slide Ảnh
	paging: function () {
			document.write('<br />');	// Xuống dòng
			
			// Hiển thị các đường link điều hướng slideshow ảnh.
			// đoạn mã javascript này phải nằm bên dưới mã html chứa slideshow ảnh.
			for(var i=0; i < this.imgs.length; i++)
			{
				document.write('<a href="#'+this.id+'" onClick="slide.showImg('+i+');">[' + (i+1) + ']</a>  ');
			}
			
			document.write('<br />');	// Xuống dòng
	},
	// Ảnh đại diện của các phần tử trong slide ảnh
	thumbnails: function() {
			
			document.write('<br />');	// Xuống dòng
		
			for(var i=0; i < this.imgs.length; i++)
			{
				document.write('<a href="#'+this.id+'" onClick="slide.showImg('+i+');"><img class="thumbnail" id="thumb'+i+'" src="'+this.imgs[i]+'" width="'+this.thumb_width+'" height="'+this.thumb_height+'" style="'+this.thumb_style+'"/></a>  ');
			}

			
			document.write('<br />');	// Xuống dòng
	},
	//automate: setInterval(this.next,this.show_duration) // không chạy.
	automate: function() {
		document.getElementById("thumb0").style = this.thumb_style_highlighted;			
		
		var _slide = this;
			
			// Nếu muốn chạy slideshow tự động theo chu kì 3s
			//setInterval(function(){ _slide.next(); },this.show_duration); // okay !
		window.onload = setInterval(function(){ _slide.next(); },this.show_duration);
			
			
			// Không chạy:
			// setInterval(slide.next,this.show_duration);
			
			// Cách dùng sai:
			// vì như vậy 'this' trỏ tới Windows object
			// setInterval(this.next,this.show_duration);
			

	},
	run: function() {
		
		document.write('<br />');	// Xuống dòng
		document.write('<img id="'+this.id+'" src="'+this.imgs[0]+'" width="'+this.width+'" style="'+this.style+'"/>');	
		document.write('<br />');	// Xuống dòng
			
		// Đề phòng tình huống không sử dụng thumbnail mà vẫn chạy slide show ảnh.	
		var first_thumbnail = document.getElementById("thumb0");
		if(first_thumbnail != null){
				first_thumbnail.style = this.thumb_style_highlighted;				
		}		
		
		var _slide = this;
		window.onload = setInterval( function(){ _slide.next(); }, this.show_duration );
	}
		
}	// end object




		

		
		
		
		
