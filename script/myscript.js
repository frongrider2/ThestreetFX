var top_submenu=$(".top-submenu-contain");

$(".user-toggle").on( "click", function( event ) {
  top_submenu.toggleClass("top-submenu-contain-show");
});


// depoisit section
var depositrate=31.64;
var withdrawrate=31.00;

var depositamount=$(".deposit-rate-cal input");
var depositbath=$("#deposit-cal-number");


depositamount.on("click", e =>{
  console.log("aaa");
})


var aa=parseInt(depositamount.val());

// Trading Account section

var btncreateaccount=$(".Create-Newaccount-contain");

$(".create-account").on( "click", function( event ) {
  btncreateaccount.toggleClass("Create-Newaccount-contain-visible");
});
$(".create-account-contain span").on( "click", function( event ) {
  btncreateaccount.toggleClass("Create-Newaccount-contain-visible");
});
