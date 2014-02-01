(function ($) {

    var Item = Backbone.Model.extend({
        defaults: {
            part1: '',
            part2: 'Camellero ',
            part3: 'Se balanceaba sobre la puta de tu hermana'
        }
    });

    var List = Backbone.Collection.extend({
        model: Item
    });

    var ItemView = Backbone.View.extend({
        tagName: 'li', //
        initialize: function () {
            _.bindAll(this, 'render');
        },
        render: function () {
            //$(this.el).html('<span>' + this.model.get('part1') + ' ' + this.model.get('part2') + ' ' + this.model.get('part3') + '</span>');
            $(this.el).html('<span>'+this.model.get('part1')+' '+this.model.get('part2')+ ' ' + this.model.get('part3') + '</span>');
            return this;
        }
    });

    var ListView = Backbone.View.extend({
        el: $('body'),
        events: {
            'click button#add': 'addItem'
        },

        initialize: function () {
            _.bindAll(this, 'render', 'addItem', 'appendItem');
            this.collection = new List();
            this.collection.bind('add', this.appendItem);
            this.counter = 0;
            this.render();
        },

        render: function () {
            var self = this;
            $(this.el).append("<h1>This is a Example</h1>");
            $(this.el).append("<button id='add'>Add list item</button>");
            $(this.el).append("<ul></ul>");
            _(this.collection.models).each(function (item) {
                self.appendItem(Item);
            }, this);
        },

        addItem: function () {
            this.counter++;
            var item = new Item();
            item.set({
                part2: checkVal(this.counter),
                part1: item.get('part1') + this.counter
            });
            this.collection.add(item);
        },

        appendItem: function(item){
          var itemView = new ItemView({
            model: item
          });
          $('ul', this.el).append(itemView.render().el);
        }

    });


    var listView = new ListView();
})(jQuery);

function checkVal(value){
    if( value > 1){
        return 'Camelleros';
    } else {
        return 'Camellero';
    }
}