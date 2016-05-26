var GistAddForm = React.createClass({

    getInitialState: function(){
        return {
            text: ''
        }
    },

    onChange: function(e){
        this.setState({ text: e.target.value });
    },

    addGist: function(e){
        e.preventDefault();

        this.props.onAdd(this.state.text)
        this.setState({ text: '' })
    },

    render() {
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.addGist}>
                    <input value={this.state.text} onChange={this.onChange} placeholder="Type a GitHub username..." />
                    <button>Fetch Latest Gist</button>
                </form>
            </div>
        );
    }

});

export default GistAddForm;
