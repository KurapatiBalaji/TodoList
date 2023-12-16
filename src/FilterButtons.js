import React from 'react';

function FilterButtons({ setShowCompleted }) {
    return (
        <div className="filter-buttons">
            <button className="filter-button" onClick={() => setShowCompleted('all')}>
                Show All
            </button>
            <button className="filter-button" onClick={() => setShowCompleted(true)}>
                Show Completed
            </button>
        </div>
    );
}

export default FilterButtons;
