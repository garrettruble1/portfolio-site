import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import Tab from './Tab.js';

class Tabs extends React.Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label,
        }
    }

    onClickTab = (tab) => {
        this.setState({ activeTab: tab });
    }

    render() {
        const {
            onClickTab,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;


        return(
            <div className='tabs'>
                <div className='tabContent'>
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
                <ol className='tabList'>
                    {children.map((child) => {
                        const { label } = child.props;

                        return(
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTab}
                            />
                        );
                    })}
                </ol>
            </div>
        );
    }
}

export default Tabs;