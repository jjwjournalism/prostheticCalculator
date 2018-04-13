$(document).ready(function () {

	$(".calculate").click(function () {							// When the "calculate" button is clicked...

		var totalCost = 0;										// Declare a running total variable

		if ($('#x3').prop('checked')) {							// If the all-inclusive option has been chosen...

			totalCost = parseFloat($('#x3').val());				// ...Use its price as the total

		}

		else {														// Otherwise:

			$("input").each(function() {							// For each input...

				if ($(this).prop('checked')){						// Check and see if the box is checked
				var thisCost = parseFloat($(this).val());			// If it's checked, get the value
				totalCost = totalCost + thisCost;					// Add the value to the running total

				}

			});

			if ($("#walkingSpeed").prop('checked') && 				// If both walking speed options are checked...
				$("#walkingSpeedNoFall").prop('checked')){

				totalCost = totalCost - parseFloat($("#walkingSpeed").val()); // Subtract the less expensive one from the total so you don't double-count
			}

		};


		

		var totalCostMoneyFormat = format(totalCost,"$");				// Format the total to look like a dollar amount

		$("#totalCostSlot").find("span").text(totalCostMoneyFormat); 	// Put the result into a span

	});

	function format(n, currency) {		// Cruelly stolen from StackExchange https://stackoverflow.com/a/14428340
    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

});