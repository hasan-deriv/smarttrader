import ErrorBoundary from './components/common/error-boundary';
import Layout from './components/layout';
import useLogin from './api/hooks/useLogin';
import React from 'react';

const App = () => {
    const { is_logged_in } = useLogin();

    return (
        <ErrorBoundary>
            <Layout is_logged_in={is_logged_in}>App</Layout>
        </ErrorBoundary>
    );
};

export default App;
