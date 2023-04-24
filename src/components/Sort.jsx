import { useState} from 'react';

function Sort({sorts, activeSort}) {

    const [activeIndex, setActiveIndex]  = useState(activeSort);
    // true - открыто, false - закрыто
    const [isOpen, setIsOpen] = useState(false);

    const selectSort = (i) => {
        setActiveIndex(i);
        setIsOpen(false);
    }
    return (
        <div className="sort">
                <span onClick={() => setIsOpen(true)}>{sorts[activeIndex].toUpperCase()} <i className="fa-solid fa-chevron-down"></i></span>
                {
                    isOpen && 
                    <div className="select-sort">
                        {
                            sorts.map((s, i) => <div key={i} onClick={() => selectSort(i)}>{s.toUpperCase()}</div>)
                        }
                    </div>
                }
            </div>
    );
}

export default Sort;