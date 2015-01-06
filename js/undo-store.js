(function(Reflux, TodoActions, UndoActions, global) {
    'use strict';

    var undoList = [];
    global.undoStore = Reflux.createStore({
        listenables: [UndoActions],
        init: function() {
            this.listenTo(TodoActions.afterRemoveItems, this.storeItems);
        },
        storeItems: function(items) {
            undoList = items;
            this.trigger(undoList);
        },
        onUndoLastItems: function() {
            TodoActions.undoItems(undoList);
            undoList = [];
            this.trigger(undoList);
        }
    });
    
})(window.Reflux, window.TodoActions, window.UndoActions, window);