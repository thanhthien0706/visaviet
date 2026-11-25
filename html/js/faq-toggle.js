$(document).ready(function () {
  $(".cau-hoi-thok").click(function () {
    $(".tra-loi-thok").hide();
    $(this).parent().find(".tra-loi-thok").toggle();
  });
  $(".button-xem-them-cau-hoi").click(function () {
    $(".cau-hoi-hide").toggle();
    $(this).hide();
  });
  $(".tit-dai").click(function () {
    $(this).parent().find(".chi-tiet-thong-tin").toggle("fast");
    $(this).parent().find(".chi-tiet-thong-tin .chi-tiet-thong-tin").toggle("fast");
  });
  $(".step2").hide();
  $(".tro-lai-check-visa").hide();
  $(".tiep-tuc-check-visa").click(function () {
    $(".step1").hide();
    $(".step2").show();
    $(this).hide();
    $(".tro-lai-check-visa").show();
  });
  $(".tro-lai-check-visa").click(function () {
    $(".step2").hide();
    $(".step1").show();
    $(this).hide();
    $(".tiep-tuc-check-visa").show();
  });
  $(".close").on("click", function () {
    $(".popup").css("display", "none");
    $(".popup-hotline").css("display", "none");
    $(".popup-diachi").css("display", "none");
    //	alert("OK");
  });
  $(".popup-thok").on("click", function () {
    var height = $(this).offset().top - 400;
    $(".popup").css({ display: "block", top: height });
    //alert(height);
  });
  $(".popup-thok").on("click", function () {
    $(".popup").css("display", "block");
  });
  $(".click-popup-hotline").on("click", function () {
    $(".popup-hotline").css("display", "block");
  });
  $(".click-popup-diachi").on("click", function () {
    $(".popup-diachi").css("display", "block");
    //alert("OK");
  });
});
