var React = require('react');
var VirtualList = require('./dist/VirtualList.js');

var App = React.createClass({
    renderItem: function(item) {
        return (
            <div key={item.id} className="list-group-item" style={{height: this.props.itemHeight}}>
                <div className="media-left">
                    <img className="media-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4=" />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">Media heading #{item.id + 1}</h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </div>
            </div>
        );
    },
    render: function() {
        return (
            <div className="media-list list-group">
                <VirtualList items={this.props.items} renderItem={this.renderItem} itemHeight={this.props.itemHeight} />
            </div>
        );
    }
});

var itemCount = 150000;
var items = [];

for (var i = 0; i < itemCount; i++) {
    items[i] = {
        id: i,
    };
}

var props = {
    items: items,
    itemHeight: 100
};

var app = React.createElement(App, props);

React.render(app, document.getElementById('list'));

document.getElementById('itemCount').innerText = itemCount;