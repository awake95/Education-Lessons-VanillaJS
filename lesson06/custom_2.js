
(($)=>{

	$(document).ready(()=> {
			MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
			let observer = new MutationObserver(function (mutations, observer) {
	console.log(555);
					$(".wetail_geoip_redirector_countries:not(.processed)").prepend(
							"<option value='default' selected='true'>Frakt till...</option>"
					);

					$('.wetail_geoip_redirector_countries:not(.processed) > option[value="GB"]').text(
							"Utanför Sverige"
					);
					$(".wetail_geoip_redirector_countries:not(.processed)").addClass('processed');
			});
			observer.observe($(".wetail_geoip_redirector_countries:not(.processed)").parent()[0], {
					subtree: true,
					attributes: true,
					childList: true,
			});
	}
);
})(jQuery);