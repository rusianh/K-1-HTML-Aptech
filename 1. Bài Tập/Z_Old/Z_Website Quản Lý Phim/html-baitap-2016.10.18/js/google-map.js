// 285 Doi Can Lieu Giai Ba Dinh Vietnam
var myCenter=new google.maps.LatLng(21.035672,105.818939);
var marker;

/* Hàm xử lý sự kiện */
function initialize()
{
	var mapProp = {
    	center:myCenter,
  		zoom:15,			// zoom scale: [0 5 10 15 20]
  		mapTypeId:google.maps.MapTypeId.ROADMAP		// SATELLITE 
    };

	var map=new google.maps.Map(document.getElementById("google_map"),mapProp);

	marker=new google.maps.Marker({
    	position:myCenter,
  		animation:google.maps.Animation.BOUNCE
  	});

	marker.setMap(map);
}

/* Đăng ký xử lý sự kiện:
Ngay sau khi mã nguồn HTML được tải về cửa sổ của trình duyệt,
thì thực thi hàm xử lý.
*/
google.maps.event.addDomListener(window, 'load', initialize);
