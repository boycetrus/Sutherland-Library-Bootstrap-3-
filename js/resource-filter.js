$(document).ready(function() {

  var filterParent = $('#facet-filter .list-group-item');
  var filterTrigger = $('#facet-filter .list-group-item a');

  filterTrigger.on ('click', function(event) {
    event.preventDefault;

    // store the value of the data-filter attr from the elements that was clicked
    var filterName = $(this).data("filter");

    // hide the other filters and show the clear filter button
    $(this).parent().addClass('selected');
    $('.clr-filter').removeClass('hidden');
    filterParent.not($('.selected')).addClass('hidden');


    // call the applyFilter function and pass the filter value
    applyFilter(filterName);

    $('.clr-filter').focus();

  });

  $('.clr-filter').on('click', function() {
    $('.resource-item').collapse('show');
    filterParent.removeClass('selected').removeClass('hidden');
    $('.clr-filter').addClass('hidden');
  });

  var applyFilter = function(filterVal) {

    //function to hide any resource-item that isn't tagged with the filterName
    $('.resource-item').each(function() {
      var currentFilter = filterVal;
      var resourceTags = $(this).data('tags');
      var isResourceMatch = resourceTags.indexOf(currentFilter);
      // test the current filter value agains the list of tags for each .resource-item
      if (isResourceMatch === -1) {
        $(this).collapse('hide');
      }
    });
  };

});
