import React from 'react';

const TabPanel = ({ children, value, index, ...other }) => {
    return (
        <div
            style={{ minHeight: "295px" }}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

export default TabPanel;