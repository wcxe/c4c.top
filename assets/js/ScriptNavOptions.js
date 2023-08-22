
function TopNavBarDisplay() {
    var LogoConsoleOutPut = document.getElementById("Logo").innerHTML = "EuphoriaHsüan Studio"
    console.log( LogoConsoleOutPut," || ScriptNavOptions.js")
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

    console.log("Options displayed."," || ScriptNavOptions.js")
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

    console.log("Options disappeared."," || ScriptNavOptions.js")
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
    NavBarReport.innerHTML = "Report"
    NavBarJoin.innerHTML = "Join"
    NavBarMore.innerHTML = "More"

    console.log("Right Nav Bar Options is loaded."," || ScriptNavOptions.js")
}

function BottomFooter() {
    var CopyrightInfoBottom = document.getElementById("CopyrightBottom")
    var SupriseContentHead = document.getElementById("SupirseContent")

    CopyrightInfoBottom.innerHTML = "EuphoriaHsüan Studio All Rights Reserved©2023<br>2023©丨Coded & Designed by Wu Chenghsüan"
    SupriseContentHead.innerHTML = "Hello! Dear Suprise~"

    console.log(CopyrightInfoBottom.innerHTML," || ScriptNavOptions.js" )
}