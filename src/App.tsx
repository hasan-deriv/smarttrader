import ErrorBoundary from 'Components/common/error-boundary';
import Layout from 'Components/layout';
import AuthProvider from 'Contexts/authProvider';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from 'Components/ui/dialog';

const App = () => (
    <AuthProvider>
        <ErrorBoundary>
            <Layout>
                <Dialog>
                    <DialogTrigger asChild>
                        <button>App</button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Title</DialogTitle>
                            <DialogDescription>description</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <button>Okay</button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </Layout>
        </ErrorBoundary>
    </AuthProvider>
);

export default App;
