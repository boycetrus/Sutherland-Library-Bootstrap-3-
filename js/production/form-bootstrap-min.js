!function(o){"function"==typeof define&&define.amd?define(["jquery"],o):"object"==typeof exports?module.exports=o(require("jquery")):o(jQuery)}(function($){function o(o){return a.raw?o:encodeURIComponent(o)}function e(o){return a.raw?o:decodeURIComponent(o)}function r(e){return o(a.json?JSON.stringify(e):String(e))}function t(o){0===o.indexOf('"')&&(o=o.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return o=decodeURIComponent(o.replace(i," ")),a.json?JSON.parse(o):o}catch(e){}}function n(o,e){var r=a.raw?o:t(o);return $.isFunction(e)?e(r):r}var i=/\+/g,a=$.cookie=function(t,i,s){if(arguments.length>1&&!$.isFunction(i)){if(s=$.extend({},a.defaults,s),"number"==typeof s.expires){var d=s.expires,l=s.expires=new Date;l.setMilliseconds(l.getMilliseconds()+864e5*d)}return document.cookie=[o(t),"=",r(i),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var c=t?void 0:{},u=document.cookie?document.cookie.split("; "):[],f=0,m=u.length;m>f;f++){var p=u[f].split("="),g=e(p.shift()),_=p.join("=");if(t===g){c=n(_,i);break}t||void 0===(_=n(_))||(c[g]=_)}return c};a.defaults={},$.removeCookie=function(o,e){return $.cookie(o,"",$.extend({},e,{expires:-1})),!$.cookie(o)}}),$(document).ready(function(){$(".form-bootstrap .form-group label").addClass("control-label col-sm-3"),$(".form-bootstrap .form-group input").addClass("form-control"),$(".form-bootstrap .form-group select").addClass("form-control"),$(".form-bootstrap label > .se-form-required-text").addClass("sr-only"),$("#ctl05_rpControls_ctl06_fiControl_se_form").attr("type","email").attr("placeholder","eg. my.username@education.nsw.gov.au"),$("#ctl05_rpControls_ctl08_fiControl_se_form").attr("type","date"),$("#ctl05_rpControls_ctl12_fiControl_se_form").attr("disabled","disabled"),$("#ctl05_rpControls_ctl15_fiControl_se_form").attr("disabled","disabled"),$("#ctl05_rpControls_ctl18_fiControl_se_form").attr("disabled","disabled"),$(".form-bootstrap .button-group input[type=submit]").addClass("btn btn-default hidden-print"),$(".form-bootstrap .form-error > a").addClass("text-danger"),$(".form-error").each(function(o){$(this).children("a").length>0&&$(this).parents(".form-group").addClass("has-error")}),"shown"!==$.cookie("warning-modal")&&($("#studentWarning").modal("show"),$.cookie("warning-modal","shown")),$("#studentWarning").on("hidden.bs.modal",function(){$("#showWarning").removeClass("hidden")}),$("#showWarning > .btn").on("click",function(){$("#studentWarning").modal()});var o=$("#ctl05_divPostFormMessage");o.length>0&&$.removeCookie("warning-modal")});