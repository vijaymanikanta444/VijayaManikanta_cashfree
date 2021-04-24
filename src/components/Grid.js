import React from 'react';

export default function Grid({ data, col = 12, gap = 0, size }) {
  const screenWidth = window.innerWidth;
  //   console.log(screenWidth);
  console.log('col', col);

  const elementWidth = screenWidth / col;
  //   console.log(elementWidth, elementWidth - gap);
  const calculatedGap = gap + 'px';

  return (
    <div>
      <h1>Grid</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 'auto',
          width: '100%',
        }}
      >
        {data.map((element) => (
          <div
            key={element}
            style={{
              border: '1px solid red',
              padding: '5px',
              width: size ? size : elementWidth - gap * 2,
              boxSizing: 'border-box',
              margin: calculatedGap,
            }}
          >
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}
