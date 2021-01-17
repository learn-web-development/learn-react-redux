import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const setActiveOrInactive = (index) => {
      if (index === activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };

    const active = (index === activeIndex) ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={"title " + active}
          onClick={() => setActiveOrInactive(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={"content " + active}>
          <p>{item.description}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      { renderedItems}
    </div>
  );
};

export default Accordion;
