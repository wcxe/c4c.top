window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var BtnScrollTop = document.getElementById("BtnScrollTop");
    if (t >= 300) {
        BtnScrollTop.style.display = "flex";
        console.log("Btn-ScrollTop displayed.", " || ScrollToTop.js", 6)
        BtnScrollTop.setAttribute("class", "animate__animated animate__backInRight BtnScroll-top")
    } else {

        BtnScrollTop.setAttribute("class", "animate__animated animate__backOutRight BtnScroll-top")
        BtnScrollTop.style.display = "block";
        console.log("Btn-ScrollTop disappeared.", " || ScrollToTop.js", 9)
    }
}