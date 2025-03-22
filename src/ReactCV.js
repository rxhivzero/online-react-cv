import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Styles from 'ReactCV.module.scss';
import Profile from '@src/components/Profile';
import Section from '@src/components/Section';
import ExperiencesList from '@src/components/ExperiencesList';
import ProjectsList from '@src/components/ProjectsList';
import TagsList from '@src/components/TagsList';
import CommonList from '@src/components/CommonList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLanguage } from '@fortawesome/free-solid-svg-icons';

const componentMap = {
    'experiences-list': ExperiencesList,
    text: Section,
    'projects-list': ProjectsList,
    'tag-list': TagsList,
    'common-list': CommonList,
};

const ReactCV = ({ t, i18n, personalData, sections }) => {
    const handleDownload = () => {
        window.open('https://drive.google.com/drive/folders/1yMFVwBS40M-GtcfLoaEO2qyMLd1nEVJY');
    };

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'zh-TW' ? 'en' : 'zh-TW';
        i18n.changeLanguage(newLang);

        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('hl', newLang);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
    };

    return (
        <section className={Styles.appContainer}>
            <div className={Styles.toolBar}>
                <div className={Styles.download} onClick={handleDownload}>
                    <FontAwesomeIcon icon={faDownload} className={Styles.downloadIcon} />
                    <div className={Styles.downloadText}>{t('download')}</div>
                </div>
                <div className={Styles.language} onClick={handleLanguageChange}>
                    <FontAwesomeIcon icon={faLanguage} />
                </div>
            </div>
            <div className={Styles.cvContainer}>
                <Profile {...personalData} />
                {sections.map((sectionDetails, index) => {
                    const { type } = sectionDetails;
                    const Comp = componentMap[type] || Section;
                    return <Comp key={`section-${index}`} {...sectionDetails} />;
                })}
            </div>
        </section>
    );
};

ReactCV.propTypes = {
    t: PropTypes.func.isRequired,
    i18n: PropTypes.shape({
        language: PropTypes.string.isRequired,
        changeLanguage: PropTypes.func.isRequired,
    }).isRequired,
    personalData: PropTypes.object.isRequired,
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default memo(ReactCV);
