jQuery(document).ready(function () {
  jQuery(".ff_modal_btn").on("click", function (e) {
    if (!jQuery(this).data("instance")) {
      return;
    }
    var instanceId = jQuery(this).data("instance");
    jQuery(document).on("click", "#" + instanceId, lity);
  });
});
