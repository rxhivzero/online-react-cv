import './App.scss';
import './i18n';
import { useTranslation } from 'react-i18next';
import ReactCV from 'ReactCV';

function App() {
    const { t, i18n } = useTranslation();
    const cvData = t('cvData', { returnObjects: true });

    return <ReactCV {...cvData} t={t} i18n={i18n} />;
}

export default App;
