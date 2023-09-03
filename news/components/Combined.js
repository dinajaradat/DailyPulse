import React from 'react';
import Business from './BusinessSection';
import Entertainment from './Entertainment';

const Combined = () => {
    return (
        <div className="flex">
            <div>
                <Business />
            </div>
            <div>
                <Entertainment />
            </div>
        </div>
    )
}

export default Combined;
