jQuery.fn.extend({
	luara: function(a) {
		function s() {
			var a;
			switch (j) {
				case "top":
					a = h;
					break;
				case "left":
					a = h * g;
					break;
				default:
					a = h
			}
			return a
		}

		function t() {
			var a = b.find("img").eq(0),
				c = {};
			return c.width = a.width(), c.height = a.height(), c
		}

		function u(b) {
			var b = b || a.speed || l / 6;
			return b > l ? b = l : l > b && 0 > b && (b = arguments.callee(-b)), b
		}

		function v() {
			q = setTimeout(function() {
				o++, e.eq(o - 1).removeClass(n), o == g && (o = 0), r(), e.eq(o).addClass(n), v()
			}, l)
		}
		var q, r, b = $(this).eq(0),
			c = $(this).find("ul").eq(0),
			d = c.find("li"),
			e = $(this).find("ol").eq(0).find("li"),
			f = b.find("img"),
			g = f.length,
			a = a || {},
			h = a.width || t().width,
			i = a.height || t().height,
			j = a.deriction || "",
			k = "luara-" + j,
			l = (a.interval > 0 ? a.interval : -a.interval) || 3e3,
			m = u(),
			n = a.selected,
			o = 0;
		b.width(h).height(i).addClass(k), c.width(s(j)).height(i), d.width(h).height(i), e.eq(0).addClass(n),
			function() {
				s = null, t = null, u = null
			}(), r = function() {
				switch (j) {
					case "top":
						return function() {
							c.animate({
								top: -i * o + "px"
							}, m)
						};
					case "left":
						return function() {
							c.animate({
								left: -h * o + "px"
							}, m)
						};
					default:
						return function() {
							d.hide().eq(o).fadeIn(m)
						}
				}
			}(), e.mouseover(function() {
				e.eq(o).removeClass(n), o = e.index($(this)), $(this).addClass(n), r()
			}), b.mouseenter(function() {
				clearTimeout(q)
			}).mouseleave(function() {
				v()
			}), v()
	}
});