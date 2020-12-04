var API_HOST = "https://dvmi.idemeum.com/api/";
var spId = "DVMISample";
var uaf = "yes";
var signinId = "";
var expires = "";
var interval_time = 5; // second
var interval;
$( document ).ready(function(){
    reset();
    getdata();
});

function getdata (){
    var url = API_HOST+"signin/challenge?spId="+spId+"&uaf="+uaf;
    $.ajax({
        type: "GET",
        url: url,
        cache: false,
        contentType: "application/json",
        processData: false,
        success: function (data) {
            if(data.notified){
                
            } else {
                $(".qrimage").attr("src", data.qrCodeBase64);
                spId = data.spId;
                signinId = data.signinId;
                notified = data.notified;
                expires = data.expires;
                did = data.did;
                interval = setInterval(pollrequest, interval_time*1000);
            }    
        },
    });
}

function pollrequest (){
    var url = API_HOST+"enterprise/signin/polling?signinId="+signinId+"&spId="+spId;
    $.ajax({
        type: "GET",
        url: url,
        cache: false,
        contentType: "application/json",
        processData: false,
        success: function (data) {
             debugger;   
        },
    });
}

function reset(){
    var about = $(".about");
    var home = $(".home");
    var privacypolicy = $(".privacy-policy");
    var howtoscan = $(".howtoscan");
    var loginscreen = $(".loginscreen");
    
    about.hide();
    privacypolicy.hide();
    howtoscan.hide();

    $(".a_privacy_policy").click(function() {
        show_privacy_policy();
    });

    $(".a_about").click(function() {
        show_about_us();
    });

    $(".a_login").click(function() {
        
        show_login_screen();
    });

    $(".a_howtoscan").click(function() {
        show_howtoscan();
    });
 
    $(".backbtn").click(function() {
        show_login_screen();
    });

    function show_privacy_policy (){
        about.hide();
        loginscreen.show();
        home.hide();
        privacypolicy.show();
        howtoscan.hide();
    }

    function show_about_us (){
        howtoscan.hide();
        loginscreen.show();
        privacypolicy.hide();
        home.hide();
        about.show();
    }

    function show_howtoscan (){
        howtoscan.show();
        loginscreen.hide();
		home.show();
    }
    
    function show_login_screen(){
        howtoscan.hide();
        loginscreen.show();
        privacypolicy.hide();
        home.show();
        about.hide();
    }

}