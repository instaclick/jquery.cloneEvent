(function ($, expect, define, it, before, beforeEach) {

    var $fooButton = $('#foo'),
        $barButton = $('#bar'),
        eventList  = 'click hover foobar';


    describe('cloneEvent', function () {

        before(function () {
            $fooButton.on(eventList, function (event) {
                $(this).data('event', event);
            });
        });

        beforeEach(function () {
            $barButton.off(eventList);
            $.removeData($barButton[0], 'event');
        });

        it('should have a jquery method called cloneEvent', function () {
            expect($.fn).to.have.property('cloneEvent');
        });

        it('should chain jquery functions', function () {
            expect($barButton.cloneEvent($fooButton)).to.have.property('trigger');
        });

        describe('from a element' , function () {

            it('should copy all events from a given element', function () {
                $barButton.cloneEvent($fooButton);

                $fooButton.trigger('click');
                $barButton.trigger('click');

                expect($barButton.data('event').type).to.eql($fooButton.data('event').type);
                expect($fooButton.data('event').type).to.eql('click');
            });

            it('should copy a specific event from a given element', function () {
                $barButton.cloneEvent($fooButton, 'click');

                $barButton.trigger('click')
                          .trigger('hover');

                expect($barButton.data('event').type).to.eql('click');
            });

            it('should copy events from a given list', function () {
                $barButton.cloneEvent($fooButton, 'hover foobar');

                $barButton.trigger('hover');
                expect($barButton.data('event').type).to.eql('hover');

                $barButton.trigger('foobar')
                          .trigger('click');

                expect($barButton.data('event').type).to.eql('foobar');
            });

            it('should copy events from a given array', function () {
                $barButton.cloneEvent($fooButton, ['hover', 'foobar']);

                $barButton.trigger('hover');
                expect($barButton.data('event').type).to.eql('hover');

                $barButton.trigger('foobar')
                          .trigger('click');

                expect($barButton.data('event').type).to.eql('foobar');
            });
        });

        describe('from a selector' , function () {

            it('should copy all events from a given selector', function () {
                $barButton.cloneEvent('#foo');

                $fooButton.trigger('click');
                $barButton.trigger('click');

                expect($barButton.data('event').type).to.eql($fooButton.data('event').type);
            });

            it('should copy a specific event from a given selector', function () {
                $barButton.cloneEvent('#foo', 'click');

                $barButton.trigger('click')
                          .trigger('hover');

                expect($barButton.data('event').type).to.eql('click');
            });

            it('should copy events from a given list', function () {
                $barButton.cloneEvent('#foo', 'hover foobar');

                $barButton.trigger('hover');
                expect($barButton.data('event').type).to.eql('hover');

                $barButton.trigger('foobar')
                          .trigger('click');

                expect($barButton.data('event').type).to.eql('foobar');
            });

            it('should copy events from a given array', function () {
                $barButton.cloneEvent('#foo', ['hover', 'foobar']);

                $barButton.trigger('hover');
                expect($barButton.data('event').type).to.eql('hover');

                $barButton.trigger('foobar')
                          .trigger('click');

                expect($barButton.data('event').type).to.eql('foobar');
            });

        });


    });

}(jQuery, chai.expect, describe, it, before, beforeEach));
