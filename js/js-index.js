window.onload = function() {
    var box = document.getElementById('box');
    var lis = document.getElementsByClassName('navli');
    var lists = document.getElementsByClassName('list');
    box.style.transform = "scale(0.1)";
    setTimeout(function() {
        box.style.transitionDelay = "0";
        box.style.transitionDuration = "800ms";
        box.style.transform = "scale(1)";
        box.style.opacity = "0.9";
    }, 500);
    lis[0].style.background = "#16d069";
    lists[0].style.display = "block";
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function() {
            for (var s = 0; s < lis.length; s++) {
                lis[s].style.background = "";
                lists[s].style.display = "none";
            }
            var a = this.index;
            lis[a].style.background = "#16d069";
            lists[a].style.display = "block";
            lists[a].style.transform = "scale(1.2)";
            lists[a].style.opacity = "0";
            setTimeout(function() {
                lis[a].style.background = "#16d069";
                lists[a].style.display = "block";
                lists[a].style.transitionDelay = "0";
                lists[a].style.transitionDuration = "800ms";
                lists[a].style.transform = "scale(1)";
                lists[a].style.opacity = "1";
            }, 500);
        }
    }
}