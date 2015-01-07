(function(React, TodoActions, global) {

    var AddMany = React.createClass({
        getInitialState: function() {
            return {
                showTextArea : false
            };
        },
        handleSubmit: function () {
            var node = this.refs.text.getDOMNode();
            TodoActions.addMany(node.value);
            node.value = "";
            this.setState({ showTextArea: false });
        },
        showTextArea: function () {
            this.setState({ showTextArea: !this.state.showTextArea });
        },
        render: function() {
            var textInput = (
                <div id="addmanytext">
                    <textarea ref="text"></textarea>
                    <input type="button" value="submit" onClick={this.handleSubmit} />
                </div>
            );
            return (
                <div>
                    <div id="addmany">
                        <a href="javascript:;" onClick={this.showTextArea} >Add Many</a>
                    </div>
                    {this.state.showTextArea && textInput}
                </div>
            );
        }
    });

    React.render(<AddMany />, document.getElementById('addmanycontainer'));

})(window.React, window.TodoActions, window);
