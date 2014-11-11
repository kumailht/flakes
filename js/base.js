// Check to see if element you're operating on exists to avoid faluire when it doesn't

var FlakesFrame = {
	init: function() {
		this.el = {
			flakes_frame: {
				container: $('.flakes-frame'),
				navigation: $('.flakes-frame .flakes-navigation'),
				content: $('.flakes-frame .flakes-content')
			}
		};
		this.events();
	},
	equalizeHeights: function() {
		var tallestColumn = Math.max(
				this.el.flakes_frame.navigation.outerHeight(), this.el.flakes_frame.content.outerHeight()
			);

		this.el.flakes_frame.navigation.outerHeight(tallestColumn);
		this.el.flakes_frame.content.outerHeight(tallestColumn);
	},
	setupSnaping: function() {
		if (globals.ie === undefined || (globals.ie && globals.ie >= 10)) {
			var snapper = new Snap({
				element: $('.flakes-content')[0],
				disable: 'right',
				maxPosition: 250,
				minPosition: -250
			});

			if (!Utils.isMobileDevice()) $('body').attr('data-snap-ignore', 'true');

			$('.flakes-mobile-top-bar .navigation-expand-target').click(function() {
				if (snapper.state().state == "left") {
					snapper.close();
				} else {
					snapper.open('left');
				}
				return false;
			});
		} else if (globals.ie && globals.ie <= 9) {
			$('.flakes-mobile-top-bar .navigation-expand-target').click(function() {
				$('.flakes-navigation').css({
					'z-index': '10',
					'background': 'white'
				}).show();
				return false;
			});

			$('.flakes-content').click(function() {
				$('.flakes-navigation').hide();
			});
		}
	},
	events: function() {
		this.equalizeHeights();
		this.setupSnaping();
	}
}

var FlakesNavigation = {
	init: function() {
		this.el = {
			expandable_items: $('.flakes-navigation .expandable'),
			expandable_active_items: $('.flakes-navigation .expandable.active')
		};

		this.events();
	},
	expandActiveItems: function() {
		var that = this;
		this.el.expandable_active_items.each(function() {
			that.expandItem($(this));
		});
	},
	expandItem: function(item) {
		item.toggleClass('expanded');
	},
	events: function() {
		var that = this;
		this.expandActiveItems();

		this.el.expandable_items.click(function(event) {
			event.preventDefault();
			that.expandItem($(this));
		});
	}
};

jQuery(function() {
	FlakesFrame.init();
	FlakesNavigation.init();
})
