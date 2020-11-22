import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css'

class Tab extends React.Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tabListItem'

        if (activeTab === label) {
            className += ' tabItemActive';
        }

        return(
            <li
            className={className}
            onClick={onClick}
            >
                { label }
            </li>
        )
    }
}

export default Tab;