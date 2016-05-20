(function(root, $) {

	'use strict';

	$.fn.ellipsis = function() {
		return this.each(function() {
			var $this = $(this),
				_text = $this.text(),
				isOverflow = $this.css('overflow') === 'hidden';

			if (isOverflow) {
				var text = _text,
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
			console.log(_text);
			console.log(text);
		});
	}
}(window, jQuery));