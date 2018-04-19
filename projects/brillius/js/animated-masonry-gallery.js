$(window).load(function () {

var size = 1;
var button = 1;
var button_class = "gallery-header-center-right-links-current";
// var normal_size_class = "gallery-content-center-normal";
// var full_size_class = "gallery-content-center-full";
var $container = $('#gallery-content-center');
    
$container.isotope({itemSelector : 'img'});


function check_button(){
	$('.gallery-header-center-right-links').removeClass(button_class);
	if(button==1){
		$("#filter-all").addClass(button_class);
		// $("#gallery-header-center-left-title").html('All Galleries');
		}
	if(button==2){
		$("#filter-webdesign").addClass(button_class);
		// $("#gallery-header-center-left-title").html('Studio Gallery');
		}
	if(button==3){
		$("#filter-graphicdesign").addClass(button_class);
		// $("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==4){
		$("#filter-print").addClass(button_class);
		// $("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==5){
		$("#filter-branding").addClass(button_class);
		// $("#gallery-header-center-left-title").html('Landscape Gallery');
		}
	if(button==6){
		$("#filter-motiongraphic").addClass(button_class);
		// $("#gallery-header-center-left-title").html('Landscape Gallery');
		}	
}
	
// function check_size(){
// 	$("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
// 	if(size==0){
// 		$("#gallery-content-center").addClass(normal_size_class); 
// 		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
// 		}
// 	if(size==1){
// 		$("#gallery-content-center").addClass(full_size_class); 
// 		$("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
// 		}
// 	$container.isotope({itemSelector : 'img'});
// }


	
$("#filter-all").click(function() { $container.isotope({ filter: '.all' }); button = 1; check_button(); });
$("#filter-webdesign").click(function() {  $container.isotope({ filter: '.webdesign' }); button = 2; check_button();  });
$("#filter-graphicdesign").click(function() {  $container.isotope({ filter: '.graphicdesign' }); button = 3; check_button();  });
$("#filter-print").click(function() {  $container.isotope({ filter: '.print' }); button = 4; check_button();  });
$("#filter-branding").click(function() {  $container.isotope({ filter: '.branding' }); button = 5; check_button();  });
$("#filter-motiongraphic").click(function() {  $container.isotope({ filter: '.motiongraphic' }); button = 6; check_button();  });
// $("#gallery-header-center-left-icon").click(function() { if(size==0){size=1;}else if(size==1){size=0;} check_size(); });


check_button();
});