
(($)=>{

    $(document).ready(()=> {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        let observer = new MutationObserver(function (mutations, observer) {
		console.log(555);
            $(".wetail_geoip_redirector_countries:not(.processed)").prepend(
                "<option value='default' selected='true'>Shipping Destination</option>"
            );

            $('.wetail_geoip_redirector_countries:not(.processed) > option[value="GB"]').text(
                "Rest of the World"
            );
            $(".wetail_geoip_redirector_countries:not(.processed)").addClass('processed');
		$(".wetail_geoip_redirector_countries > option[value=EN]").remove();
        });
        observer.observe($(".wetail_geoip_redirector_countries:not(.processed)").parent()[0], {
            subtree: true,
            attributes: true,
            childList: true,
        }); 
        $(".wetail_geoip_redirector_countries:not(.processed)").prepend(
            "<option value='default' selected='true'>Shipping Destination</option>"
        );

        $('.wetail_geoip_redirector_countries:not(.processed) > option[value="GB"]').text(
            "Rest of the World"
        );
    }
);
})(jQuery);


/**(($) => {
    $(document).ready(() => {
            jQuery('select.WGR_dd_selector').on('change', function ($) {
                $(".wetail_geoip_redirector_countries").prepend(
                    "<option value='default' selected='true'>Shipping Destination</option>"
                );

                $('.wetail_geoip_redirector_countries option[value="GB"]').text(
                    "Rest of the World"
                );
            });
        }
    );

})
(jQuery);
*/
/**(($)=>{
$(document).ready(()=>{
        jQuery('select.WGR_dd_selector').on('change',function($) {
          $(".wetail_geoip_redirector_countries").prepend(
                        "<option value='default' selected='true'>Shipping Destination</option>"
                );
        
                $('.wetail_geoip_redirector_countries option[value="GB"]').text(
                        "Rest of the World"
                );
        }
}) 
}))(jQuery);
*/

/*jQuery(document).ready(function($) {
  $(".wetail_geoip_redirector_countries").on("change", function() {
    $(".wetail_geoip_redirector_countries").prepend(
      "<option value='default' selected='true'>Shipping Destination</option>"
    );
    $('.wetail_geoip_redirector_countries option[value="GB"]').text(
      "Rest of the World"
    );
  });
});
*/

/*(($)=>{
$(document).ready(()=>{
	jQuery('select.WGR_dd_selector').on('change',function($) {
	  $(".wetail_geoip_redirector_countries").prepend(
			"<option value='default' selected='true'>Shipping Destination</option>"
		);
	
		$('.wetail_geoip_redirector_countries option[value="GB"]').text(
			"Rest of the World"
		);
	}
})
})(jQuery);
*/
