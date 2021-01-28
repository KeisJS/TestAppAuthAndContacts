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

export const routes: RoutesData = {
  auth,
  contacts,
}
