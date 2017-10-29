var link = document.querySelector(".address_btn");
var feedbackPopup = document.querySelector(".modal_feedback");
var modalClose = document.querySelector(".button_close");
var form = feedbackPopup.querySelector("form");
var login = feedbackPopup.querySelector("[name=name]");
var mail = feedbackPopup.querySelector("[name=mail]");
var text = feedbackPopup.querySelector("textarea");
var storageName = localStorage.getItem("name");
var storageMail = localStorage.getItem("mail");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("modal_show");

	if (storageName) {
		login.value = storageName;
		mail.focus();
		if (storageMail) {
			mail.value = storageMail;
			text.focus();
		} else {
			mail.focus();
		}
	} else {
		login.focus();
	}
});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("modal_show");
	feedbackPopup.classList.remove("modal_error");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !mail.value || !text.value) {
		evt.preventDefault();
		feedbackPopup.classList.remove("modal_error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("modal_error");
	} else {
		localStorage.setItem("name", login.value);
		localStorage.setItem("mail", mail.value);
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (feedbackPopup.classList.contains("modal_show")) {
			feedbackPopup.classList.remove("modal_show");
		}
	}
});

// Карта
var latitude = 59.939122, 
longitude =  30.321530,
map_zoom = 17;

var marker_url = 'img/map-marker.png';

var map_options = {
 center: new google.maps.LatLng(latitude, longitude),
 zoom: map_zoom
			}
		//Инициализация карты
		var map = new google.maps.Map(document.getElementById('map'), map_options);
	//Добавляем свой маркер местонахождения на карту (свою иконку)			
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(59.938758, 30.323757),
		map: map,
		visible: true,
		icon: marker_url,
	});


