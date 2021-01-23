$(document).ready(function(){
  $(".navigation__button--1").click(function(){
    console.log("hi");
    history.pushState({page:"about"}, [], ["#about"]);
    // window.location = window.location.href + "#about";
    $(".banner").load("html/about.html");
    // $.post("html/about.html", {page:"about"})
    //   .done(function(data){
	  //       $(".banner").html(data);
    //   });
    // $(this).attr("disabled",true);
  });
});
