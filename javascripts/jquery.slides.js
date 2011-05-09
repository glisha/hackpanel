(function ($) {

  var Slider = (
    function () {
      var getSlide = function (options, container, first, last, current) {
        console.log('slides/slide' + current + '.html')
        jQuery.ajax({
          url: 'slides/slide' + current + '.html',
          success: function(data) {
            container.html(data);
            setTimeout(function () {
              if (current === last) {
                current = first;
              } else {
                current++;
              }
              getSlide(options, container, first, last, current);
            }, options.timeout);
          },
          async: false
        });  
      }

      var slides = function (options, container, first, last) {
        getSlide(options, container, first, last, first);
      };

      return {
        slides: slides
      }
    }()
  );

  $.fn.slides = function (options) {
    return this.each(function () {
      var slides = options.slides.split('-');
      var first = Number(slides[0]);
      var last = Number(slides[1]);
      var container = $(this);

      Slider.slides(options, container, first, last);
    });
  }

})(jQuery);
