(function ($) {
    var ListView = Backbone.View.extend({
        el: $('body'), // el attaches to existing element

        events: {
            'click button#add': 'addItem'
        },
        initialize: function () {
            _.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here

            this.counter = 0; // total number of items added thus far
            this.render();
        },

        render: function () {
            $(this.el).append("<button id='add'>Add list item</button>");
            $(this.el).append("<br><img style='width: 200px;' src='http://www.caveylaw.com/wp-content/uploads/2012/06/return-to-work.jpg'>");
            $(this.el).append("<ul></ul>");
        },

        addItem: function () {
            this.counter++;
            $('ul', this.el).append("<li id=" + this.counter + ">hello world " + this.counter + "</li>");
            $('ul', this.el).append("<p style='background: red;' onClick='alert(" + this.counter + ");'> Ima ( * - * )</p>");
        }
    });

    var listView = new ListView();
})(jQuery);