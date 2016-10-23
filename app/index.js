import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import store from './store';
import jwtDecode from 'jwt-decode';
import { Provider} from 'react-redux';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';
import './styles/App.scss';

// Set token after page reload
if(localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken); 
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken))); 
}

ReactDOM.render(
	<Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
	document.getElementById('root')
);