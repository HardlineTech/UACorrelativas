var Script = function () {
//    tool tips
    $('.tooltips').tooltip();
//    popovers
    $('.popovers').popover();
//    bxslider
    $('.bxslider').show();
    $('.bxslider').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 276,
        slideMargin: 20
    });
}();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function error(){
    alert("Hola! UACorrelativas necesita una conexion a internet. Asegurate de estar conectado y vuelve a intentarlo.");
    done();
}

function timeout(){
    alert("Hola! UACorrelativas necesita una conexion a internet. Asegurate de estar conectado y vuelve a intentarlo.");
    done();
}

function done(){
    $.unblockUI();
}