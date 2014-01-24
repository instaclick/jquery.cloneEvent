(function ($, expect, define, it, before, beforeEach) {

    var $fooButton = $('#foo'),
        $barButton = $('#bar'),
        eventList  = 'click hover';

    describe('cloneEvent', function () {

        before(function () {
            $fooButton.on(eventList, function (event) {
                $(this).data('event', event);
            });
        });

        beforeEach(function () {
            $barButton.off(eventList);
            $barButton.data('event', null);
        });

        it('should have a jquery method called cloneEvent', function () {
            expect($.fn).to.have.property('cloneEvent');
        });

        it('should chain jquery functions', function () {
            expect($barButton.cloneEvent($fooButton)).to.have.property('trigger');
        });

        // it('should copy all events from a given element', function () {
        //     $barButton.cloneEvent($fooButton);

        //     $fooButton.trigger('click');
        //     $barButton.trigger('click');

        //     expect($barButton.data('event').type).to.eql($fooButton.data('event').type);
        // });
    });

}(jQuery, chai.expect, describe, it, before, beforeEach));
