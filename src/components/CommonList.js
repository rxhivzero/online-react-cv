import React from 'react';
import mergeClassNames from 'classnames';
import BulmaCSS from '@src/bulma.module.scss';
import Styles from '@src/ReactCV.module.scss';
import Section from './Section';
import { getFixedUrl } from '../utils';
import { PureTagList } from './TagsList';

export default class CommonList extends React.Component {
    render() {
        const { title, description, icon, items, xtraClassName } = this.props;

        return (
            <Section xtraClassName={xtraClassName} title={title} content={description} icon={icon}>
                <div
                    className={mergeClassNames(
                        BulmaCSS.container,
                        BulmaCSS['is-medium'],
                        Styles.commonListContainer,
                    )}
                >
                    {items.map((item, index) => {
                        const {
                            authority,
                            authorityWebSite,
                            authorityMeta,
                            rightSide,
                            title,
                            description,
                            descriptionTags,
                        } = item;

                        return (
                            <div
                                key={index}
                                className={mergeClassNames(
                                    BulmaCSS.content,
                                    Styles.avoidBreakingOnPrint,
                                )}
                            >
                                <div
                                    className={mergeClassNames(
                                        BulmaCSS.level,
                                        BulmaCSS['is-marginless'],
                                        BulmaCSS['is-paddingless'],
                                    )}
                                >
                                    <h5
                                        className={mergeClassNames(
                                            BulmaCSS.title,
                                            BulmaCSS['is-marginless'],
                                            BulmaCSS['level-left'],
                                            BulmaCSS['is-size-5'],
                                        )}
                                    >
                                        {title}
                                    </h5>
                                    <span className={mergeClassNames(BulmaCSS['level-right'])}>
                                        {rightSide}
                                    </span>
                                </div>
                                <h6
                                    className={mergeClassNames(
                                        BulmaCSS.subtitle,
                                        Styles.companyTitle,
                                        BulmaCSS['is-size-6'],
                                    )}
                                >
                                    {authorityWebSite ? (
                                        <a
                                            rel="noreferrer"
                                            href={getFixedUrl(authorityWebSite)}
                                            target="_blank"
                                        >
                                            {authority}
                                        </a>
                                    ) : (
                                        authority
                                    )}
                                </h6>
                                {authorityMeta ? (
                                    <span
                                        className={mergeClassNames(Styles.companyMeta)}
                                    >{`(${authorityMeta})`}</span>
                                ) : null}
                                <div>
                                    {descriptionTags && (
                                        <div className={Styles.descriptionTags}>
                                            <PureTagList
                                                tags={descriptionTags}
                                                tagClass="is-info"
                                            />
                                        </div>
                                    )}
                                    {description}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>
        );
    }
}
