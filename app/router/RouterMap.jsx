import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import App from '../containers'
import Login from '../containers/login';
import List from '../containers/list/list';
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/index" component={List}/>
                </Route>
            </Router>
        )
    }

}

export default RouterMap;