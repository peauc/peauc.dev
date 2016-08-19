import React from "react"
import ReactDOM from "react-dom"

var Greeting = React.createClass({
    render: function() {
        return (
            <p>{this.props.message}</p>
        );
    }
});

setInterval(function() {
    var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
    var randomMessage = messages[Math.floor((Math.random() * 3))];

    ReactDOM.render(
        <div>
            <Greeting message={randomMessage}/>
        </div>
        , document.getElementById('greeting-div')
    );
}, 2000);
