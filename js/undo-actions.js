(function(Reflux, global) {
    'use strict';

    global.UndoActions = Reflux.createActions([
        "undoLastItems"     // called by button in Undo Component
    ]);

})(window.Reflux, window);