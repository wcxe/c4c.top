
function SubmitReport() {
    var AlertSubmit = document.getElementById("AlertSubmit")
    var InputContent = document.getElementById("ReportContent")
    var InputEmail = document.getElementById("InputEmail")
    var valueIEM = InputEmail.value

    if ( valueIEM = "" || InputContent.value == "") {
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