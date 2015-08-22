var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;

var VirtualList = require('react-virtual-list');

var itemCount = 100000;

var _example = document.getElementById('example');

var ConfigurableExample = React.createClass({
    mixins: [PureRenderMixin],
    getInitialState: function() {
        var defaultItemCount = 100000;
    
        var items = [];

        for (var i = 0; i < defaultItemCount; i++) {
            items[i] = {
                id: i,
            };
        }
        
        var state = {
            itemHeight: 100,
            itemCount: defaultItemCount,
            items: items,
            tagName: 'ul',
            className: 'media-list list-group',
            itemTagName: 'li',
            itemClassName: 'list-group-item',
            contained: false,
            containerHeight: 250,
            scrollDelay: 0,
            itemBuffer: 0
        };
        
        return state;
    },
    renderItem: function(item) {
        return (
            <this.state.itemTagName key={item.id} className={this.state.itemClassName} style={{height: this.state.itemHeight}}>
                <div className="media-left">
                    <img className="media-object" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4=" />
                </div>
                <div className="media-body">
                    <h4 className="media-heading">Media heading #{item.id + 1}</h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.</p>
                </div>
            </this.state.itemTagName>
        );
    },
    update: function() {
        var items = [];
        var itemCount = parseInt(this.refs.itemCount.getDOMNode().value, 10);
        

        for (var i = 0; i < itemCount; i++) {
            items[i] = {
                id: i,
            };
        }
        
        var contained = this.refs.contained.getDOMNode().checked;
        
        var state = {
            tagName: this.refs.listTagName.getDOMNode().value,
            className: this.refs.listClassName.getDOMNode().value,
            itemTagName: this.refs.itemTagName.getDOMNode().value,
            itemClassName: this.refs.itemClassName.getDOMNode().value,
            itemHeight: parseInt(this.refs.itemHeight.getDOMNode().value, 10),
            itemCount: itemCount,
            items: items,
            contained: contained,
            container: this.refs.container.getDOMNode(),
            containerHeight: parseInt(this.refs.containerHeight.getDOMNode().value, 10),
            scrollDelay: parseInt(this.refs.scrollDelay.getDOMNode().value, 10),
            itemBuffer: parseInt(this.refs.itemBuffer.getDOMNode().value, 10)
        };
        
        this.setState(state);
    },
    render: function() {
        return (
            <div>
                <div role="form" className="form-horizontal">
                    <div className="form-group">
                        <label className="col-xs-6 col-sm-2" htmlFor="listTagName">List tagName</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="text" value={this.state.tagName} id="listTagName" ref="listTagName" />
                        </div>
                        <label className="col-xs-6 col-sm-2" htmlFor="listClassName">List className</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="text" value={this.state.className} id="listClassName" ref="listClassName" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-6 col-sm-2" htmlFor="itemTagName">Item tagName</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="text" value={this.state.itemTagName} id="itemTagName" ref="itemTagName" />
                        </div>
                        <label className="col-xs-6 col-sm-2" htmlFor="itemClassName">Item className</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="text" value={this.state.itemClassName} id="itemClassName" ref="itemClassName" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-6 col-sm-2" htmlFor="contained">Contained</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="checkbox" checked ={this.state.contained} id="contained" ref="contained" />
                        </div>
                        <label className="col-xs-6 col-sm-2" htmlFor="containerHeight">Container Height</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="number" min="0" max="10000" value={this.state.containerHeight} id="containerHeight" ref="containerHeight" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-6 col-sm-2" htmlFor="itemHeight">Item Height</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="number" min="0" max="1000" value={this.state.itemHeight} id="itemHeight" ref="itemHeight" />
                        </div>
                        <label className="col-xs-6 col-sm-2" htmlFor="itemCount">Item Count</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="number" min="0" max="100000" value={this.state.itemCount} id="itemCount" ref="itemCount" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-xs-6 col-sm-2" htmlFor="scrollDelay">Item Buffer</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="number" min="0" max="1000" value={this.state.itemBuffer} id="itemBuffer" ref="itemBuffer" />
                        </div>
                        <label className="col-xs-6 col-sm-2" htmlFor="scrollDelay">Scroll Delay</label>
                        <div className="col-xs-6 col-sm-4">
                            <input onChange={this.update} className="form-control" type="number" min="0" max="10000" value={this.state.scrollDelay} id="scrollDelay" ref="scrollDelay" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h3>JSX</h3>
                        <code style={{fontSize: "1.2em"}}>
                            &lt;VirtualList items={"Array[" + this.state.items.length + "]"} className="{this.state.className}" container={"[" + (this.state.contained ? this.state.container.tagName : "window") + "]"} itemHeight="{this.state.itemHeight}" tagName="{this.state.tagName}" itemBuffer="{this.state.itemBuffer}" scrollDelay="{this.state.scrollDelay}" /&gt;
                        </code>
                        <br />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12" id="container" ref="container" style={this.state.contained ? { overflow: 'scroll', height: this.state.containerHeight } : {}}>
                        <VirtualList items={this.state.items} renderItem={this.renderItem} scrollDelay={this.state.scrollDelay} className={this.state.className} container={this.state.contained ? this.state.container : window} itemBuffer={this.state.itemBuffer} itemHeight={this.state.itemHeight} tagName={this.state.tagName}  />
                    </div>
                </div>
            </div>
        );
    }
});

var app = React.createElement(ConfigurableExample);

React.render(app, _example);
