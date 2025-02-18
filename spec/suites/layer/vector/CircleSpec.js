describe('Circle', function () {
	var map, circle;

	beforeEach(function () {
		map = L.map(document.createElement('div')).setView([0, 0], 4);
		circle = L.circle([50, 30], {radius: 200}).addTo(map);
	});

	afterEach(function () {
		map.remove();
	});

	describe('#init', function () {
		it('uses default radius if not given', function () {
			var circle = L.circle([0, 0]);
			expect(circle.getRadius()).to.eql(10);
		});
	});

	describe('#getBounds', function () {
		it('returns bounds', function () {
			var bounds = circle.getBounds();

			expect(bounds.getSouthWest()).nearLatLng([49.99820, 29.99720]);
			expect(bounds.getNorthEast()).nearLatLng([50.00179, 30.00279]);
		});
	});

	describe('Legacy factory', function () {
		it('returns same bounds as 1.0 factory', function () {
			var bounds = circle.getBounds();

			expect(bounds.getSouthWest()).nearLatLng([49.99820, 29.99720]);
			expect(bounds.getNorthEast()).nearLatLng([50.00179, 30.00279]);
		});
	});
});
