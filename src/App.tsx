import ErrorBoundary from 'Components/common/error-boundary';
import Layout from 'Components/layout';
import { Button } from 'Components/ui/button';
import AuthProvider from 'Contexts/authProvider';

const App = () => (
    <AuthProvider>
        <ErrorBoundary>
            <Layout><Button asChild><a>Button</a></Button></Layout>
        </ErrorBoundary>
    </AuthProvider>
);

export default App;
