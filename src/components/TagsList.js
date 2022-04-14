import React from 'react';
import mergeClass from 'classnames';
import Section from './Section';
import BulmaCSS from '@src/bulma.module.scss';

export const PureTagList = ({ tags = [], tagClass }) => (
    <div className={mergeClass(BulmaCSS.tags, BulmaCSS['are-medium'])}>
        {tags.map((tag, index) => {
            return (
                <div key={index} className={mergeClass(BulmaCSS.tag, BulmaCSS[tagClass])}>
                    {tag}
                </div>
            );
        })}
    </div>
);

export default class TagsList extends React.Component {
    render() {
        const { title, description, icon, items } = this.props;

        return (
            <Section title={title} content={description} icon={icon}>
                <PureTagList tags={items} tagClass={'is-primary'} />
            </Section>
        );
    }
}
