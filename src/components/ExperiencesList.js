import React from 'react';
import CommonList from './CommonList';

export default class ExperiencesList extends React.Component {
    render() {
        const convertedItems = (this.props.items || []).map((item) => {
            const { company, companyWebSite, companyMeta, datesBetween, ...rest } = item;
            return {
                authority: company,
                authorityWebSite: companyWebSite,
                authorityMeta: companyMeta,
                rightSide: datesBetween,
                ...rest,
            };
        });

        return <CommonList {...this.props} items={convertedItems} />;
    }
}
