$(document).ready(function(){var e=$("#facet-filter .list-group-item"),t=$("#facet-filter .list-group-item a");t.on("click",function(t){t.preventDefault;var l=$(this).data("filter");$(this).parent().addClass("selected"),$(".clr-filter").removeClass("hidden"),e.not($(".selected")).addClass("hidden"),i(l),$(".clr-filter").focus()}),$(".clr-filter").on("click",function(){$(".resource-item").collapse("show"),e.removeClass("selected").removeClass("hidden"),$(".clr-filter").addClass("hidden")});var i=function(e){$(".resource-item").each(function(){var t=e,i=$(this).data("tags"),l=i.indexOf(t);-1===l&&$(this).collapse("hide")})}});