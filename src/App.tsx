import ErrorBoundary from 'Components/common/error-boundary';
import Layout from 'Components/layout';

const App = () => {
    return (
        <ErrorBoundary>
            <Layout>App</Layout>
        </ErrorBoundary>
    );
};

export default App;
