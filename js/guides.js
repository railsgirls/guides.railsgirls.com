function saveOs(os) {
  Cookies.set("os", os, { expires: 1825, path: '/' }); // expires in 5 years
}

function loadOs() {
  var osFromCookie = Cookies.get("os");
  if(osFromCookie) {
    $(".os-specific").find("." + osFromCookie + "-link").click();
  } else if(detectOs()) {
    $(".os-specific").find("." + detectOs() + "-link").click();
  } else {
    $(".os-specific").find(".win-link").click();
  }
}

function detectOs() {
  try {
    var browserVersion = navigator.appVersion;
    if (browserVersion.match(/Win/i)) {
      return "win";
    } else if (browserVersion.match(/Macintosh/i)) {
      return "mac";
    } else {
      return "nix";
    }
  } catch(e) {
    return false;
  }
}

function addIcons() {
  $("code.language-sh, code.language-bat").closest('.highlight').before('<i class="icon-small-prompt"></i>');
  $("code.language-erb, code.language-html, code.language-ruby, code.language-css").closest('.highlight').before('<i class="icon-small-text-editor"></i>');
  $("code.language-browser").closest('.highlight').before('<i class="icon-small-browser"></i>');
}

function initializeOsSwitchers() {
  var osInstructions = $(".os-specific");
  var switcher = osInstructions.prepend(
    "<span class='picker'><span class='picker-label'>Choose your Operating System:</span> " +
      "<span class='picker-options'>" +
        "<span><a href='#' class='os-link win-link'>Windows</a></span>" +
        "<span><a href='#' class='os-link mac-link'>Mac</a></span>" +
        "<span><a href='#' class='os-link nix-link'>Linux</a></span>" +
      "</span>" +
    "</span>"
  );

  switcher.find(".win-link").click(function(event) {
    event.preventDefault();
    saveOs("win");

    $(".os-specific .os-link").removeClass("active");
    $(".os-specific .win-link").addClass("active");
    $(".os-specific").children("div").hide().filter(".win").show();
  });
  switcher.find(".mac-link").click(function(event) {
    event.preventDefault();
    saveOs("mac");

    $(".os-specific .os-link").removeClass("active");
    $(".os-specific .mac-link").addClass("active");
    $(".os-specific").children("div").hide().filter(".mac").show();
  });
  switcher.find(".nix-link").click(function(event) {
    event.preventDefault();
    saveOs("nix");

    $(".os-specific .os-link").removeClass("active");
    $(".os-specific .nix-link").addClass("active");
    $(".os-specific").children("div").hide().filter(".nix").show();
  });
}

$(document).ready(function() {
  addIcons();
  initializeOsSwitchers();
  loadOs();

  var osLabelElement = $(".js-detected-os-label");
  if (osLabelElement.length > 0) {
    var osLabel;
    switch (detectOs()) {
      case "win":
        osLabel = "Windows";
        break;
      case "mac":
        osLabel = "Mac";
        break;
      case "linux":
        osLabel = "Linux";
        break;
      default:
        osLabel = "Error: Unknown Operating System"
    }
    osLabelElement.text(osLabel);
  }
});
