(function ($) {
$.fn.dylanCarousel = function (options) {
var settings = $.extend({
            circular: true,
            pageNo: 0,
            item: "li",
            button: {
                next: ".nextBtn",
                prev: ".prevBtn"
            }
        }, options);
function showPage() {
			settings = $(this).data("dc-conf");
             $(this).find(settings.item).slideUp();
             $($(this).find(settings.item)[settings.pageNo]).slideDown();


        }
    function clickNext() {
            $this = $($(this).data("area"));
            $this.data("dc-conf").pageNo++;
            if ($this.data("dc-conf").pageNo == $this.find(settings.item).length) {
            	$($this.find(settings.item)[$this.find(settings.item).length-1]).after($($this.find(settings.item)[0]));
				$this.data("dc-conf").pageNo--;
            }
            $this.trigger("showPage");
        }
    function clickBack() {
            $this = $($(this).data("area"));
            $this.data("dc-conf").pageNo--;
            if ($this.data("dc-conf").pageNo == -1) {
                $($this.find(settings.item)[0]).before($($this.find(settings.item)[$this.find(settings.item).length-1]));
				$this.data("dc-conf").pageNo++;
            }
            $this.trigger("showPage");
        }
 this.each(function () {

            var $this = $(this);
            $this.data("dc-conf", settings);
            $this.bind("showPage", showPage);
            if ($this.find(settings.item).length <= 1) {
                $(settings.button.next + "," + settings.button.prev).hide();
            }
            $(this).find(settings.item).hide();
            $(settings.button.next).bind("click", clickNext).data("area", $this);
            $(settings.button.prev).bind("click", clickBack).data("area", $this);
            $this.trigger("showPage");
        });
}
})(jQuery);