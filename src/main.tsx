import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { AuthProvider } from 'react-auth-kit';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

//stor
import store from './store/store';

//languages
import './services/locales/i18n';

//Theme
import 'react-phone-input-2/lib/high-res.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'vanilla-icon-picker/dist/themes/default.min.css'; // 'default' theme
import '@/assets/scss/style.scss';

const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <AuthProvider
            authType={'cookie'}
            authName={'_auth'}
            cookieDomain={window.location.hostname}
            cookieSecure={window.location.protocol === 'https:'}
        >
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <App />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </Provider>
        </AuthProvider>
    </React.StrictMode>
);