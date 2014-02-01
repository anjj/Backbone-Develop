(function($){
    /*Un modelo es un conjunto de elementos que definen un modelo de objeto
    para poder utilzarlo*/
    var Item = Backbone.Model.extend({
        defaults: {
          part1: 'Nombre ',
          part2: 'es un item nº: '
        }
    });

    /*Hacemos que la Collection se base en Item llamado Modelo*/
  var List = Backbone.Collection.extend({
    model: Item
  });

  var ListView = Backbone.View.extend({
    el: $('body'),
    events: {
      'click button#add': 'addItem' //Añadimos un boton que tiene en el onclick llamar a la funcion
                                    //addItem
    },

    initialize: function(){
      _.bindAll(this, 'render', 'addItem', 'appendItem'); 
      // remember: every function that uses 'this' as the current object should be in here

      this.collection = new List();
      this.collection.bind('add', this.appendItem); // collection event binder
      this.counter = 0;
      this.render();
    },

    render: function(){
        var self = this;
      $(this.el).append("<button id='add'>Add list item</button>");
      $(this.el).append("<ul></ul>");
      _(this.collection.models).each(function(item){ // in case collection is not empty
        self.appendItem(item);
      }, this);
    },

    addItem: function(){
      this.counter++;
      var item = new Item();
      item.set({
        part2: item.get('part2') + this.counter 
        // modify item defaults adding counter value to show the number of the Item ADDed.
      });
      this.collection.add(item); 
      // add item to collection; view is updated via event 'add'
    },

    appendItem: function(item){
      $('ul', this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+"</li>");
    }
  });

  var listView = new ListView();

})(jQuery);