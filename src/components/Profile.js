import React from 'react';

import mc from 'classnames';
import B from '@src/bulma.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faPhone,
    faGlobeAmericas,
    faExclamation,
    faMapMarkerAlt,
    faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { formatAnchorValue } from '../utils';
import Styles from '@src/ReactCV.module.scss';

const iconMap = {
    email: faEnvelope,
    phone: faPhone,
    location: faMapMarkerAlt,
    website: faGlobeAmericas,
    linkedin: faLinkedin,
    github: faGithub,
    twitter: faTwitter,
    download: faDownload,
};

class ContactList extends React.Component {
    render() {
        return (
            <div className={mc(Styles.contactListContainer, B['has-text-white'])}>
                {this.props.items.map((item, index) => {
                    const icon = iconMap[item.type] || faExclamation;

                    return (
                        <div key={index} className={Styles.contactListItem}>
                            <FontAwesomeIcon icon={icon} />
                            <a
                                className={Styles.contactListItemContent}
                                href={formatAnchorValue(item.type, item.value)}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {item.value}
                            </a>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default class Profile extends React.Component {
    render() {
        const { name, title, contacts, image } = this.props;
        return (
            <div
                className={mc(
                    B.container,
                    B.box,
                    B.hero,
                    B['is-primary'],
                    B['is-paddingless'],
                    B['is-marginless'],
                )}
            >
                <div className={B['hero-body']}>
                    <div className={mc(B.columns)}>
                        <div className={mc(B.column, B['is-full'])}>
                            <div className={B.level}>
                                <div className={B['level-left']}>
                                    <div className={B['level-item']}>
                                        <figure className={mc(B.image, B['is-128x128'])}>
                                            <img className={B['is-rounded']} src={image} alt="" />
                                        </figure>
                                    </div>
                                    <div className={B['has-text-centered']}>
                                        <h1 className={mc(B.title, B['is-size-4'])}>{name}</h1>
                                        <h3 className={mc(B.subtitle, B['is-size-6'])}>{title}</h3>
                                    </div>
                                </div>
                                <div className={B['level-right']}>
                                    <div className={B['level-item']}>
                                        <ContactList items={contacts} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
