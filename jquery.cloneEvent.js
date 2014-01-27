/**
 * @license Copyright 2014 Instaclick Inc.
 *  jQuery cloneEvent - v0.1.1
 *  https://github.com/instaclick
 *
 *  Under MIT License
 */

(function ($) {
    "use strict";

    var pluginName = "cloneEvent";

    function getEventList(source, filter) {
        var eventList         = $.extend({}, $._data(source[0], 'events')), // make a copy of source event list to avoid delete
            selectedEventList = {};

        if (filter && filter !== true) {
            selectedEventList = (filter instanceof Array) ? filter : filter.replace(/\s+/gi, ' ').split(' ');


            for (var eventKey in eventList) {
                if (!eventList.hasOwnProperty(eventKey)) {
                    continue;
                }

                if (selectedEventList.indexOf(eventKey) === -1) {
                    eventList[eventKey] = null;

                    delete eventList[eventKey];
                }
            }
        }

        return eventList;
    }

    function copyEvent(eventList) {
        for (var eventKey in eventList) {
            if (!eventList.hasOwnProperty(eventKey)) {
                continue;
            }

            for (var i = 0, l = eventList[eventKey].length; i < l; i++) {
                $.event.add(this[0], eventKey, eventList[eventKey][i]);
            }
        }
    }

    $.fn[pluginName] = function (source, filter) {

        if (this.length) {
            var $source   = (typeof source === 'string') ? $(source) : source,
                eventList = getEventList($source, filter);

            this.each($.proxy(copyEvent, this, eventList));
        }

        return this;
    };

})(jQuery);
