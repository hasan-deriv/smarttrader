import ErrorBoundary from 'Components/common/error-boundary';
import Layout from 'Components/layout';
import AuthProvider from 'Contexts/authProvider';
import { changeLanguage, getInitialLanguage, initializeTranslation } from './translations/i18n';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from 'Constants/translations';

initializeTranslation();

const App = () => {
    const { t } = useTranslation();
    return (
        <AuthProvider>
            <ErrorBoundary>
                <Layout>{t('Welcome to React')}</Layout>
                <select className='select' onChange={e => changeLanguage(e.target.value)} value={getInitialLanguage()}>
                    {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
                        <option key={key} value={key}>
                            {value}
                        </option>
                    ))}
                </select>
            </ErrorBoundary>
        </AuthProvider>
    );
};

export default App;
