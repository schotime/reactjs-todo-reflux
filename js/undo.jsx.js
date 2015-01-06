(function(React, Reflux, undoStore, undoActions, global) {

    var Undo = React.createClass({
        // this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
        mixins: [Reflux.connect(undoStore, "list")],
        getInitialState: function() {
            return {
                list: []
            };
        },
        handleUndo: function () {
            undoActions.undoLastItems();
        },
        render: function() {
            var itemText = this.state.list.length + " " + (this.state.list.length > 1 ? "Items" : "Item");

            return this.state.list.length > 0 && (
                <div id="undo">
                    <a href="javascript:;" onClick={this.handleUndo}>Undo {itemText}</a>
                </div>
            );
        }
    });

    React.render(<Undo />, document.getElementById('undocontainer'));
   
})(window.React, window.Reflux, window.undoStore, window.UndoActions, window);