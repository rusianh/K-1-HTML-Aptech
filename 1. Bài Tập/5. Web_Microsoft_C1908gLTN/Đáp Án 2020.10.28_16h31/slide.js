var slide = 
{

    imgs : [
			"img/pic1.jpg", 
			"img/pic2.jpg", 
			"img/pic3.jpg", 
			"img/pic4.jpg"
	],		
	
	// style for img
	id: "photo",
	width: 900,
	height: 300,
	
	// display duration in seconds
	show_duration : 6,
	
	// thumbnail: width/height = 16/9
	thumb_width: 128, // 16 x 8
	thumb_height: 72, // 9 x 8
	
	thumb_style: 'border: 1px solid gray; margin: 1px',
	thumb_style_highlighted: 'border: solid gray 5px',
	
	/*
	 ☚ Left Pointing 
	 ☛ Right Pointing 
	 ← Left Arrow 
	 → Right Arrow 
	 < trai
	 > phai
	 */
	entity_previous: '←',
	entity_next: '→',
	img_previous: 'img/previous-icon.gif',
	img_next: 'img/next-icon.gif',
	
	// index of current image
	index: 0,
    showImg: function (j) {

		document.getElementById(this.id).src = this.imgs[j];			  
		
        // turn-off highlight on old thumbnails
		for(var i=0; i < this.imgs.length; i++)
		{
			document.getElementById("thumb"+i).style = this.thumb_style;
		}
		
        // highlights new thumbnail
		document.getElementById("thumb"+j).style = this.thumb_style_highlighted;
		
		this.index = j;
	},
	previous: function() {
			this.index--;
		
			// Make sure img index not out of range
			if(this.index < 0)
				this.index = this.imgs.length - 1;
	   
			this.showImg(this.index);
		
	 },
	 next: function() { 
			this.index++;

			// Make sure img index not out of range
			if(this.index > this.imgs.length - 1)
				this.index = 0;
		   
			this.showImg(this.index);
		
	 },

	previous_next_icons: function() {
			document.write('<br />');	// Xuống dòng
			
			document.write('<img src="'+this.img_previous+'" onClick="slide.previous();" /><img src="'+this.img_next+'" onClick="slide.next();" />');
			
			document.write('<br />');	// Xuống dòng
				
	},

	previous_next_entities: function() {
			document.write('<br />');	
			
			document.write('<span style="font-size: 32px; cursor: pointer;"><a onClick="slide.previous();">'+this.entity_previous+'</a> <a onClick="slide.next();">'+this.entity_next+'</a></span>');
			
			document.write('<br />');	
			
			// At the beginning, the first img is highlighted
			document.getElementById("thumb0").style = this.thumb_style_highlighted;
				
	},
	
	paging: function () {
			document.write('<br />');	
			
			for(var i=0; i < this.imgs.length; i++)
			{
				document.write('<a href="#'+this.id+'" onClick="slide.showImg('+i+');">[' + (i+1) + ']</a>  ');
			}
			
			document.write('<br />');	
	},
	
	thumbnails: function() {
			
			document.write('<br />');	
		
			for(var i=0; i < this.imgs.length; i++)
			{
				document.write('<a href="#'+this.id+'" onClick="slide.showImg('+i+');"><img class="thumbnail" id="thumb'+i+'" src="'+this.imgs[i]+'" width="'+this.thumb_width+'" height="'+this.thumb_height+'" style="'+this.thumb_style+'"/></a>  ');
			}

			
			document.write('<br />');	
	},
	
	automate: function() {
		document.getElementById("thumb0").style = this.thumb_style_highlighted;			
		
		var _slide = this;

		window.onload = setInterval(function(){ _slide.next(); },this.show_duration);			

	},
	run: function() {
		
		this.style =  "animation: fadeout "+this.show_duration+"s infinite;",
		
		document.write('<br />');	
		document.write('<img id="'+this.id+'" src="'+this.imgs[0]+'" style="'+this.style+'" width="'+this.width+'" height="'+this.height+'"/>');	
		document.write('<br />');	
		
		var first_thumbnail = document.getElementById("thumb0");
		if(first_thumbnail != null){
				first_thumbnail.style = this.thumb_style_highlighted;				
		}
		
		var _slide = this;
		window.onload = setInterval( function(){ _slide.next(); }, this.show_duration * 1000 );

	}
		
}	




		

		
		
		
		
