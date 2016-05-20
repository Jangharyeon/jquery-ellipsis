(function(root, $) {

	'use strict';

	$.fn.ellipsis = function() {
		return this.each(function() {
			var $this = $(this),
				isOverflow = $this.css('overflow') === 'hidden';

			if (isOverflow) {
				var text = $this.text(),
					lh = parseInt($this.css('line-height')),
					line = $this.attr('data-ellipsis'),
					maxHeight = lh * line;

				for (var i = text.length; i > 0; i--) {
					if ($this.height() <= maxHeight) {
						break;
					} else {
						$this.text(text.substr(0, i) + '...');
					}
				}
			}
		});
	}
}(window, jQuery));