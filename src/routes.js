import AddressesIndex from './pages/addresses/index';
import AddressesList from './pages/addresses/list';
import AddressesCreate from './pages/addresses/create';
import AddressesEdit from './pages/addresses/edit';
import TransactionsIndex from './pages/transactions/index';

const routes = [
  {
    path: '/', component: AddressesIndex
  },
  {
    path: '/addresses', component: AddressesIndex, redirect: '/addresses/list',
    children: [
      { path: 'list', component: AddressesList },
      { path: 'create', component: AddressesCreate },
      { path: 'edit', component: AddressesEdit}
    ]
  },
  {
    path: '/transactions', component: TransactionsIndex
  },
];

export default routes;
