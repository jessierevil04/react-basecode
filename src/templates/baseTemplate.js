import React from 'react';
import { Link } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import Test1Component from '../components/Test1Component';
import Test2Component from '../components/Test2Component';
import Test3Component from '../components/Test3Component';
import * as PATH from '../constants/path'

export const getTemplate = component => {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link ></li>
                    <li><Link to="test1">Test 1</Link ></li>
                    <li><Link to="test2">Test 2</Link ></li>
                    <li><Link to="test3">Test 3</Link ></li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route exact path="/" component={() => (<div>HOME</div>)} />
                    <Route exact path="/test1" component={Test1Component} />
                    <Route exact path="/test2" component={Test2Component} />
                    <Route exact path="/test3" component={Test3Component} />
                    <Redirect to={{ pathname: PATH.ERR_404, state: { originLocation: component.props.location } }} />
                </Switch>
            </div>
        </div>
    );
}