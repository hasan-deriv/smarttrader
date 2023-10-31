import ErrorBoundary from 'Components/common/error-boundary';
import Layout from 'Components/layout';
import { Button } from 'Components/ui/button';

const App = () => (
    <ErrorBoundary>
        <Layout>
            <Button className='min-h-[180px] bg-slate-100 text-5xl'>dfasdfasdf</Button>
        </Layout>
    </ErrorBoundary>
);

export default App;
