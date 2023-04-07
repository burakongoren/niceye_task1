//geri sayım kodu başlangıcı
const countdown = () => {
    const countDate = new Date("April 26, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //saatin nasıl çalışacağı
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24

    //hesaplama
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //html classla eşleştirme
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

};

setInterval(countdown, 1000);
// geri sayım js kodu sonu


// container-2 div değiştirme
var btn_diva = document.getElementById("btn_diva");
var btn_divb = document.getElementById("btn_divb");
var diva = document.getElementById("diva");
var divb = document.getElementById("divb");

btn_diva.addEventListener("click", () => {
    diva.style.display = "flex";
    divb.style.display = "none";
    btn_diva.style.color = "white";
    btn_diva.style.background = "#232B76";
    btn_divb.style.color = "#232B76";
    btn_divb.style.background = "white";
});
btn_divb.addEventListener('click', () => {
    diva.style.display = "none";
    divb.style.display = "flex";
    btn_divb.style.color = "white";
    btn_divb.style.background = "#232B76";
    btn_diva.style.color = "#232B76";
    btn_diva.style.background = "white";
});
//container-2 div değiştirme sonu
// takvime ekleme
function addToCalendar() {
    // etkinlik bilgileri
    var event = {
      title: "etkinlik adı",
      start: "2023-05-22T00:00:00",
      end: "2023-05-22T00:00:00",
      location: "Vistream Webinar",
      description: "etkinlik açıklaması"
    };
    
    // google takvim linki
    var googleLink = "https://www.google.com/calendar/render?action=TEMPLATE";
    googleLink += "&text=" + event.title;
    googleLink += "&dates=" + event.start + "/" + event.end;
    googleLink += "&details=" + event.description;
    googleLink += "&location=" + event.location;
    
    // outlook linki
    var outlookLink = "https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent";
    outlookLink += "&subject=" + event.title;
    outlookLink += "&startdt=" + encodeURIComponent(event.start);
    outlookLink += "&enddt=" + encodeURIComponent(event.end);
    outlookLink += "&location=" + encodeURIComponent(event.location);
    outlookLink += "&body=" + encodeURIComponent(event.description);
    
    // linklere yönlendir
    window.open(googleLink);
    window.open(outlookLink);
}


  
