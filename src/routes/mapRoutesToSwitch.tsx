import React from 'react';
import { flatMap } from 'lodash';
import { Switch, Route } from 'react-router-dom';
import { RoutesData } from './intefaces';

export function mapRoutesToSwitch(routes: RoutesData): React.ReactElement {
  return (
    <Switch>
      { flatMap(routes, route => (
          <Route exact path={ route.pattern } component={ route.component } key={ route.name }/>
        )) }
    </Switch>
  )
}
