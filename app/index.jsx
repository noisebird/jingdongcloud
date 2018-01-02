import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import configurationStore from './store/configurationStore';
import RouterMap from './router/RouterMap';
import './static/css/common.less';
const store =configurationStore();

render(
    <Provider store={store}>
        <RouterMap history={hashHistory}></RouterMap>

    </Provider>
    ,document.querySelector("#app")
)

