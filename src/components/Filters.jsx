import "../style/index.css";
import React, {useState } from "react";
import Sort from './Sort';
function Filters({filters, activeIndex}) {
    const [activeFilter, setActiveFilter] = useState(activeIndex); 

    return (
        <div className="filter">
            <div className="filters">
                {
                    filters.map((f, i) => <span key={i} className={activeFilter == i ? "active" : ""} onClick={() => setActiveFilter(i)}>{f.toUpperCase()}</span>)
                }
            </div>
            <Sort sorts={["по количеству мест", "по популярности", "по цене"]} activeSort={0} />
        </div>
    );
}

export default Filters; 