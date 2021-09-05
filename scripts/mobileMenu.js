
$(document).ready(function() {

    $("h1").animate({
        marginTop : "150px"
    })

    $("#hamburger").click(function() {
        $("#header").show(500)
    })
    $("#close").click(() => {
        $("#header").hide(500);
    })
})