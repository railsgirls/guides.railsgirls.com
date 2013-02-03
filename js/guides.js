$(document).ready(function() {
  $("code.sh, code.bat").closest('.highlight').before('<i class="icon-small-prompt"></i>');
  $("code.erb, code.html, code.ruby, code.css").closest('.highlight').before('<i class="icon-small-text-editor"></i>');
  $("code.browser").closest('.highlight').before('<i class="icon-small-browser"></i>');
});
