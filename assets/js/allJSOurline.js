/*
    File Location//assets/js/allJSOurline.js

    Author: Wu Chenghsüan
    JavaScript: Wu Chenghsüan

     EuphoriaHsüan Studio All Rights Reserved. ©2023
*/

// File://OnloadScript.js
window.onload = function () {
    RightNavTextDisplay()
    BottomFooter()
    TopNavBarDisplay()
};

// File://ScriptNavOptions.js
function TopNavBarDisplay() {
    var LogoConsoleOutPut = document.getElementById("Logo").innerHTML = "EuphoriaHsüan Studio"
    console.log(LogoConsoleOutPut, " || ScriptNavOptions.js")
}

function GetOptions() {
    var RightNavDisplay = document.getElementById("RightNav").style
    var BtnNavExpandDisplay = document.getElementById("BtnNavExpand").style
    var BtnNavCollapseDisplay = document.getElementById("BtnNavCollapse").style

    RightNavDisplay.display = "block"
    BtnNavExpandDisplay.display = "none"
    BtnNavCollapseDisplay.display = "inline"

    var RightNav = document.getElementById("RightNav")
    RightNav.setAttribute("class", "animate__animated animate__slideInRight right-nav")
    // Set Animation to Id:RightNav

    console.log("Options displayed.", " || ScriptNavOptions.js")
}

function CloseOptions() {
    var RightNavDisplay = document.getElementById("RightNav").style
    var BtnNavExpandDisplay = document.getElementById("BtnNavExpand").style
    var BtnNavCollapseDisplay = document.getElementById("BtnNavCollapse").style

    RightNavDisplay.display = "block"
    BtnNavExpandDisplay.display = "inline"
    BtnNavCollapseDisplay.display = "none"

    var RightNav = document.getElementById("RightNav")
    RightNav.setAttribute("class", "animate__animated animate__slideOutRight right-nav")

    console.log("Options disappeared.", " || ScriptNavOptions.js")
}

function RightNavTextDisplay() {
    var NavBarAbout = document.getElementById("NavBarAbout")
    var NavBarProjects = document.getElementById("NavBarProjects")
    var NavBarContact = document.getElementById("NavBarContact")
    var NavBarReport = document.getElementById("NavBarReport")
    var NavBarJoin = document.getElementById("NavBarJoin")
    var NavBarMore = document.getElementById("NavBarMore")

    NavBarAbout.innerHTML = "About"
    NavBarProjects.innerHTML = "Projects"
    NavBarContact.innerHTML = "Contact"
    NavBarReport.innerHTML = "Comment"
    NavBarJoin.innerHTML = "Join"
    NavBarMore.innerHTML = "Bottom"

    console.log("Right Nav Bar Options is loaded.", " || ScriptNavOptions.js")
}

function BottomFooter() {
    var CopyrightInfoBottom = document.getElementById("CopyrightBottom")
    var SupriseContentHead = document.getElementById("SupirseContent")
    var FriendlyLinkLinkOne = document.getElementById("FriendlyLinkOne")
    var FriendlyLinkLinkTwo = document.getElementById("FriendlyLinkTwo")
    var FriendlyLinkLinkThree = document.getElementById("FriendlyLinkThree")
    CopyrightInfoBottom.innerHTML = "EuphoriaHsüan Studio All Rights Reserved. || ©2023<br>2023© || Coded & Designed by Wu Chenghsüan"
    SupriseContentHead.innerHTML = "Hello! Dear Suprise~"
    FriendlyLinkLinkOne.innerHTML = "Animete.css"
    FriendlyLinkLinkOne.setAttribute("href","https://animate.style/")
    FriendlyLinkLinkOne.setAttribute("target","_blank")
    FriendlyLinkLinkTwo.innerHTML = "Uiverse.io"
    FriendlyLinkLinkTwo.setAttribute("href","https://uiverse.io/")
    FriendlyLinkLinkTwo.setAttribute("target","_blank")
    FriendlyLinkLinkThree.innerHTML = "Bootstrap Icons"
    FriendlyLinkLinkThree.setAttribute("href","https://icons.getbootstrap.com/")
    FriendlyLinkLinkThree.setAttribute("target","_blank")

    console.log(CopyrightInfoBottom.innerHTML, " || ScriptNavOptions.js")
}

// File://ScrollToTop.js
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var BtnScrollTop = document.getElementById("BtnScrollTop");
    if (t >= 300) {
        BtnScrollTop.style.display = "flex";
        console.log("Btn-ScrollTop displayed.", " || ScrollToTop.js")
        BtnScrollTop.setAttribute("class", "animate__animated animate__backInRight BtnScroll-top")
    } else {
        BtnScrollTop.setAttribute("class", "animate__animated animate__backOutRight BtnScroll-top")
        BtnScrollTop.style.display = "block";
        console.log("Btn-ScrollTop disappeared.", " || ScrollToTop.js")
    }
}

//File://submitReport.js
function SubmitReport() {
    var AlertSubmit = document.getElementById("AlertSubmit")
    var InputContent = document.getElementById("ReportContent")
    var InputEmail = document.getElementById("InputEmail")
    var valueIEM = InputEmail.value

    if (valueIEM == "" || InputContent.value == "") {
        AlertSubmit.style.color = "rgb(230,230,230)"
        AlertSubmit.innerHTML = "Loading<span class='dot'>...</span>"
        console.log("Report upload failed. || submitReport.js")
        setTimeout(() => {
            AlertSubmit.innerHTML = "Upload Failed! Please try again later."
            AlertSubmit.style.color = "red"
        }, 300);
    } else {
        AlertSubmit.innerHTML = "Loading<span class='dot'>...</span>"
        AlertSubmit.style.color = "rgb(230,230,230)"
        console.log("Report uploaded successfully. || submitReport.js")
        setTimeout(() => {
            AlertSubmit.innerHTML = "Your report is submited!"
            AlertSubmit.style.color = "green"
            InputContent.value = ""
            InputEmail.value = ""
            setTimeout(() => {
                location.reload();
                console.log("Web Reloaded || submitReport.js")
            }, 700);
        }, 1500);
    }

}

//File://JoinUs.js
function JoinUsNow() {
    var GetBtnJoin = document.getElementById("btnJoin")
    GetBtnJoin.style.display = "flex"
}