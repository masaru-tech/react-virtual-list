var React = require('react');
var VirtualList = require('./dist/VirtualList.js');

var itemHeight = 100;
var itemCount = 150000;

var App = React.createClass({
    renderItem: function(item) {
        return (
            <div key={item.id} className="item list-group-item" style={{height: itemHeight}}>
                <h4 className="list-group-item-heading">Item #{item.id}</h4>
                <p className="list-group-item-text" >Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            </div>
        );
    },
    render: function() {
        return (
            <div className="list-group">
                <VirtualList items={this.props.items} renderItem={this.renderItem} itemHeight={itemHeight}/>
            </div>
        );
    }
});

var items = [];

for (var i = 0; i < itemCount; i++) {
    items[i] = {
        id: i,
    };
}

var props = {
    items: items
};

var app = React.createElement(App, props);

React.render(app, document.getElementById('list'));

document.getElementById('itemCount').innerText = itemCount;