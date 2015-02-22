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

function reload(){
    location.reload();
}

function error(){
    $('#container').empty().css("text-align", "center");
    html = "<img src='img/sad.png' width='120px'><br><br><h4>Parece que tenemos un problema en el servidor!</h4><br><br><button class='btn btn-primary' id='reload' onclick='reload()'>Reload <i class='fa fa-refresh'></i></button>";
    $(html).appendTo('#container');
    done();
}

function timeout(){
    $('#container').empty().css("text-align", "center");
    html = "<img src='img/sad.png' width='120px'><br><br><h4>Parece que no hay conexión a internet!</h4><br><br><button class='btn btn-primary' id='reload' onclick='reload()'>Reload <i class='fa fa-refresh'></i></button>";
    $(html).appendTo('#container');
    done();
}

function done(){
    $.unblockUI();
}