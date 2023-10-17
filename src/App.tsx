import ErrorBoundary from "Components/common/error-boundary";
import Layout from "Components/layout";
import useLogin from "./api/hooks/useLogin";

const App = () => {

  const { is_logged_in } = useLogin();

  return (
    <ErrorBoundary>
      <Layout is_logged_in={is_logged_in}>App</Layout>
    </ErrorBoundary>
  );
};

export default App;
