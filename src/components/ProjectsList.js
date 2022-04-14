import React from 'react';
import mergeClassNames from 'classnames';
import BulmaCSS from '@src/bulma.module.scss';
import Styles from '@src/ReactCV.module.scss';
import Section from './Section';
import { getFixedUrl } from '../utils';

export default class ProjectsList extends React.Component {
    render() {
        const { title, description, icon, groups } = this.props;

        return (
            <Section title={title} content={description} icon={icon}>
                <div className={mergeClassNames(BulmaCSS.container, BulmaCSS['is-medium'])}>
                    {groups.map((group, index) => {
                        const { sectionHeader, description, items } = group;

                        return (
                            <div
                                key={index}
                                className={mergeClassNames(
                                    BulmaCSS.container,
                                    'project-group-external',
                                    Styles.avoidBreakingOnPrint,
                                    Styles['project-group'],
                                )}
                            >
                                <div className={mergeClassNames(BulmaCSS.content)}>
                                    <div className={mergeClassNames(BulmaCSS['is-marginless'])}>
                                        <h5
                                            className={mergeClassNames(
                                                BulmaCSS.title,
                                                Styles.companyTitle,
                                                BulmaCSS['is-size-5'],
                                            )}
                                        >
                                            {sectionHeader}
                                        </h5>
                                        <span className={mergeClassNames(Styles.projectMeta)}>
                                            {' '}
                                            - {description}
                                        </span>
                                    </div>
                                </div>
                                <hr className={Styles.divider} />
                                <div className={BulmaCSS.row}>
                                    {items.map((project, index) => {
                                        const { projectUrl, title, description } = project;

                                        return (
                                            <div
                                                key={index}
                                                className={mergeClassNames(
                                                    BulmaCSS['u-full-width'],
                                                    Styles.avoidBreakingOnPrint,
                                                )}
                                            >
                                                <h6
                                                    className={mergeClassNames(
                                                        Styles.projectTitle,
                                                        BulmaCSS['is-size-6'],
                                                    )}
                                                >
                                                    {projectUrl ? (
                                                        <a
                                                            href={getFixedUrl(projectUrl)}
                                                            rel="noreferrer"
                                                            target="_blank"
                                                        >
                                                            {title}
                                                        </a>
                                                    ) : (
                                                        title
                                                    )}
                                                </h6>
                                                {description ? (
                                                    <div style={{ margin: 10 }}>{description}</div>
                                                ) : null}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>
        );
    }
}
