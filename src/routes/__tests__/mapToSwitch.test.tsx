import React from 'react';
import { MemoryRouter, Link, StaticRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { flatMap } from 'lodash';
import { byText } from 'testing-library-selector';
import userEvent  from '@testing-library/user-event';
import { mapRoutesToSwitch } from 'routes/mapRoutesToSwitch';
import { RoutesData, RouteData } from '../intefaces';

const testTextOne = 'test text 1';
const testTextSecond = 'test text 2';

const route1: RouteData = {
  name: 'route1',
  pattern: '/route1',
  component: () => <div>{ testTextOne }</div>
}

const testRoutes: RoutesData = {
  [route1.name]: route1,
  route2: {
    name: 'route2',
    pattern: '/route2',
    component: () => <div>{ testTextSecond }</div>
  },
  defaultRoute: {
    name: 'defaultRoute',
    pattern: '*',
    component: () => <div>default</div>
  },
}

const selector = {
  linkOne: byText(route1.name),
  linkSecond: byText(testRoutes.route2.name),
  routeOneComponent: byText(testTextOne),
  routeSecondComponent: byText(testTextSecond),
  defaultComponent: byText('default'),
}

describe('Test mapToSwitch router util', () => {
  it('default use', () => {
    render((
      <MemoryRouter>
        { flatMap(testRoutes, route => <Link to={ route.pattern } key={ route.name }>{ route.name }</Link>) }
        { mapRoutesToSwitch(testRoutes) }
      </MemoryRouter>
    ));

    expect(selector.defaultComponent.query()).toBeInTheDocument();

    userEvent.click(selector.linkOne.get());

    expect(selector.routeOneComponent.query()).toBeInTheDocument();
    expect(selector.routeSecondComponent.query()).not.toBeInTheDocument();
  });
})
