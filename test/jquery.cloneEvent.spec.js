(function ($, expect, define, it) {

    describe('cloneEvent', function () {
        it('should have a jquery method called cloneEvent', function () {
            expect($.fn).to.have.property('cloneEvent');
        });
    });

}(jQuery, chai.expect, describe, it));
