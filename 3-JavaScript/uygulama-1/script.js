
var ad=prompt("adinizi giriniz : ");
var ogrNo=prompt("ogrenci no giriniz : ");
var cinsiyet=prompt("cinsiyet giriniz : ");
var dersAd=prompt("ders adini giriniz : ");
var vize=prompt("vizenizi giriniz : ");
var final=prompt("finalinizi giriniz : ");;

var ortalama;

ortalama = (Number)(vize*0.4) + (Number)(final*0.6);

console.log('Adi : '+ad+' ogrenci numarasi : '+ogrNo+ ' cinsiyeti : '
	+cinsiyet+' ders adi : '+dersAd + ' ortalamasi : '+ortalama);
document.write('Adi : '+ad+' ogrenci numarasi : '+ogrNo+ ' cinsiyeti : '
	+cinsiyet+' ders adi : '+dersAd + ' ortalamasi : '+ortalama)