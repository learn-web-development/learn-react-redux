import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, items, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    return (() => {
      document.body.removeEventListener('click', onBodyClick);
    });
  }, []);

  const renderedItems = items.map(item => {
    const disabled = item === selected ? "disabled" : "";

    return (
      <div key={item.value} className={`item ${disabled}`} onClick={() => setSelected(item)}>
        {item.label}
      </div>
    );
  });

  const handleClick = (e) => {
    // e.stopPropagation();
    setOpen(!open);
  }

  return (
    <div className="ui form">
      <div className="field">
        <label>{label}</label>
        <div ref={ref} className={`ui selection dropdown ${open ? "visible active": ""}`} onClick={handleClick}>
          <input type="hidden" name="gender" />
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition": ""}`}>
            {renderedItems}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dropdown;
