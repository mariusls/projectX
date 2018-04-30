/*$(document).ready(function() {
	var searchVal = $('[data-search]').val();
	var filterItems = $('[data-filter-item]');
	
	filterItems.addClass('hidden');
	
	$('[data-search]').on('keyup change', function() {
		var searchVal = $(this).val();
		var filterItems = $('[data-filter-item]');

		if ( searchVal != '' ) {
			filterItems.addClass('hidden');
			filterItems.removeClass('show');
			$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
		} 

		else {
			filterItems.addClass('show');
			filterItems.removeClass('hidden');
		}
	});
});*/

$(document).ready(function($) {
	$('.ul-result-list li').each(function() {
		$(this).attr('data-search-term', $(this).text().toLowerCase());
	});
	
	$('.search-input').on('keyup change', function() {
		var searchTerm = $(this).val().toLowerCase();
		
		$('.search-result-item').removeClass('item-selected');
		
		$('.ul-result-list li').each(function() {
			if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
				$(this).show();
			}
			else {
				$(this).hide();
			}
		});
    });
    
    // Add active class to selected store-listitem
    $('.search-result-item').click(function() {
        $('.search-result-item').removeClass('item-selected');
        $(this).addClass('item-selected');

        var headerString = $('.search-result-item.item-selected .search-result-header').html();
        var strippedString = $.trim(headerString);

        $('.search-input').val(strippedString);
    });
});