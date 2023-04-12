

var elements = document.getElementsByClassName('value');
var hour = elements[0]
var minutes = elements[1]
var seconds = elements[2]



function changeTime()
{
    var today = new Date();

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    hour.innerHTML = h>=10?h.toString() : ('0' + h.toString());
    minutes.innerHTML = m>=10?m.toString() : ('0' + m.toString());
    seconds.innerHTML = s>=10?s.toString() : ('0' + s.toString());

}


let updateTime = setInterval(changeTime,1000);