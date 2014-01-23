/**
 * @license Copyright 2014 Instaclick Inc.
 *  jQuery cloneEvent - v0.1.0
 *  https://github.com/instaclick
 *
 *  Under MIT License
 */

(function ($) {
    "use strict";

    var pluginName = "cloneEvent";

    var Plugin = function (element, source, filter) {
            this.element   = element;
            this.source    = (typeof source === 'string') ? $(source) : source;
            this.eventList = $._data(this.source[0], 'events') || {};
            this.filter    = filter || false;

            this.initialize();
        };

    Plugin.prototype = {
        copyEvent: function (eventList) {
            for (var eventKey in eventList) {
                if (!eventList.hasOwnProperty(eventKey)) {
                    continue;
                }

                for (var i = 0, l = eventList[eventKey].length; i < l; i++) {
                    $.event.add(this.element, eventKey, eventList[eventKey][i]);
                }
            }
        },
        initialize: function () {
            var eventList         = this.eventList,
                selectedEventList = {};

            if (this.filter !== true) {
                selectedEventList = (this.filter instanceof Array) ? this.filter : this.filter.replace(/\s+/gi, ' ').split(' ');


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

            this.copyEvent(eventList);
        }
    };

    $.fn[pluginName] = function (source, filter) {

        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, source, filter));
            }
        });
    };

})(jQuery);
