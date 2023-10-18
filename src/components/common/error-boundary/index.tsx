/* eslint-disable */
import { Component, ErrorInfo, ReactNode } from 'react';

/* 
By default, if our application throws an error during rendering, React will remove its UI from the screen. 
To prevent this, we can wrap a part of our UI into an error boundary. 
An error boundary is a special component that lets us display some fallback UI instead of the part that crashed for example, an error message.
*/

type TErrorBoundaryProps = {
    children?: ReactNode;
};

type TErrorBoundaryStates = {
    has_error: boolean;
};

class ErrorBoundary extends Component<TErrorBoundaryProps, TErrorBoundaryStates> {
    constructor(props: TErrorBoundaryProps) {
        super(props);
        this.state = { has_error: false };
    }

    static getDerivedStateFromError(error: Error): TErrorBoundaryStates {
        console.log('error: ', error);
        /* Update state so the next render will show the fallback UI. */
        return { has_error: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log(error, info.componentStack);
    }

    render() {
        const { has_error } = this.state;
        const { children } = this.props;

        if (has_error) {
            // we can render any custom fallback UI
            //   return fallback;
            return <h1>Sorry.. there was an error</h1>;
        }

        return children;
    }
}

export default ErrorBoundary;
