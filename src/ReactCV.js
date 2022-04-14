import React, { Component } from 'react';
import Styles from 'ReactCV.module.scss';
import Profile from '@src/components/Profile';
import Section from '@src/components/Section';
import ExperiencesList from '@src/components/ExperiencesList';
import ProjectsList from '@src/components/ProjectsList';
import TagsList from '@src/components/TagsList';
import CommonList from '@src/components/CommonList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLanguage } from '@fortawesome/free-solid-svg-icons';

const componnentMap = {
    'experiences-list': ExperiencesList,
    text: Section,
    'projects-list': ProjectsList,
    'tag-list': TagsList,
    'common-list': CommonList,
};

export default class ReactCV extends Component {
    render() {
        const { t, i18n } = this.props;

        return (
            <section className={Styles.appContainer}>
                <div className={Styles.toolBar}>
                    <div
                        className={Styles.language}
                        onClick={() => {
                            if (i18n.language === 'zh-TW') {
                                i18n.changeLanguage('en');
                            } else {
                                i18n.changeLanguage('zh-TW');
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faLanguage} />
                    </div>
                    <div
                        className={Styles.download}
                        onClick={() => {
                            window.open(
                                ' https://drive.google.com/drive/folders/1yMFVwBS40M-GtcfLoaEO2qyMLd1nEVJY',
                            );
                        }}
                    >
                        <FontAwesomeIcon icon={faDownload} className={Styles.downloadIcon} />
                        <div className={Styles.downloadText}> {t('download')}</div>
                    </div>
                </div>
                <div className={Styles.cvContainer}>
                    <Profile {...this.props.personalData} />
                    {this.props.sections.map((sectionDetails, index) => {
                        const { type } = sectionDetails;
                        const Comp = componnentMap[type] || Section; // Fallback to section for any case.

                        return <Comp key={index} {...sectionDetails} />;
                    })}
                </div>
            </section>
        );
    }
}
