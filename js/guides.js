$(document).ready(function() {
  $("code.sh, code.bat").closest('.highlight').before('<i class="icon-small-prompt"></i>');
  $("code.erb, code.html, code.ruby, code.css").closest('.highlight').before('<i class="icon-small-text-editor"></i>');
  $("code.browser").closest('.highlight').before('<i class="icon-small-browser"></i>');

  $(".os-specific").append("<span class='picker'>Choose your operating system: <a href='#' class='win-link'>Windows</a> <a href='#' class='nix-link'>Other</a></span>").find(".win-link").click(function(event) {
    event.preventDefault();
    $(".os-specific .win-link").addClass("active").siblings().removeClass("active");
    $(".os-specific").children("div").hide().filter(".win").show();
  }).end().find(".nix-link").click(function(event) {
    event.preventDefault();
    $(".os-specific .nix-link").addClass("active").siblings().removeClass("active");
    $(".os-specific").children("div").hide().filter(".nix").show();
  }).end().find(".win-link").click();
});
