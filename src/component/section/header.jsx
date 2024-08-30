import React from 'react';

function SectionHeader({children}) {
    return (
        <div>
            <span className="green"> ******</span>
            {children}
        </div>
    );
}

export default SectionHeader;