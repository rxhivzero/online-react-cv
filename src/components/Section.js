import React from 'react';
import mergeClassNames from 'classnames';
import BulmaCSS from '@src/bulma.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from '@src/ReactCV.module.scss';
import {
    faBook,
    faGraduationCap,
    faArchive,
    faRocket,
    faTasks,
    faComment,
    faLanguage,
    faCubes,
    faExclamation,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';

const predefinedIcons = {
    graduation: faGraduationCap,
    book: faBook,
    comments: faComment,
    tasks: faTasks,
    archive: faArchive,
    rocket: faRocket,
    language: faLanguage,
    cubes: faCubes,
    usertie: faUserTie,
};
export default class Section extends React.Component {
    render() {
        const { icon, xtraClassName } = this.props;
        const iconComp = typeof icon === 'string' ? predefinedIcons[icon] || faExclamation : icon;

        return (
            <div
                className={mergeClassNames(
                    BulmaCSS.container,
                    Styles.sectionContainer,
                    xtraClassName,
                )}
            >
                <div className={mergeClassNames(BulmaCSS.columns)}>
                    <div className={mergeClassNames(BulmaCSS['is-full'], BulmaCSS.column)}>
                        <h4
                            className={mergeClassNames(
                                BulmaCSS.title,
                                Styles.sectionTitle,
                                BulmaCSS['is-size-4'],
                                Styles.avoidBreakingOnPrint,
                            )}
                        >
                            <span className={Styles.sectionIcon}>
                                <FontAwesomeIcon icon={iconComp} />
                            </span>
                            {this.props.title}
                        </h4>
                        <hr className={Styles.diver} />
                        {this.props.content && (
                            <div className={mergeClassNames(Styles.sectionContent)}>
                                {typeof this.props.content === 'string' ? (
                                    <p>{this.props.content}</p>
                                ) : (
                                    this.props.content
                                )}
                            </div>
                        )}
                        {this.props.children && (
                            <div
                                className={mergeClassNames(
                                    Styles.sectionContent,
                                    BulmaCSS.container,
                                    BulmaCSS['is-small'],
                                    'bakbakbak',
                                )}
                            >
                                {this.props.children}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
