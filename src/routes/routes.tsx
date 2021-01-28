import { Redirect } from 'react-router-dom';
import { RoutesData, RouteData } from './intefaces';

const auth: RouteData = {
  name: 'auth',
  pattern: '/auth',
  component: () => <div>Auth here</div>
};

const contacts: RouteData = {
  name: 'contacts',
  pattern: '/contacts',
  component: () => <div>Contacts here</div>
}

export const defaultRoute: RouteData = {
  name: 'DefaultRoute',
  pattern: '*',
  component: () => <Redirect to={ auth.pattern } />
}

export const routes: RoutesData = {
  defaultRoute,
  auth,
  contacts
}
