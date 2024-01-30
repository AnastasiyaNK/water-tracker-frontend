import React, { useState } from 'react';

import { Range } from 'react-range';
import { RangBar, Title, Percent, Percents, RangeAdd } from './RangeBar.styled';

const RangeBar = () => {
  const [values, setValues] = useState([75]);

  const handleChange = newValues => {
    setValues(newValues);
  };

  return (
    <RangeAdd>
      <RangBar>
        <Title>Today</Title>
        <Range
          values={values}
          step={1}
          min={0}
          max={100}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,

                height: '8px',
                width: '360px',
                backgroundColor: '#ddd',
                borderRadius: '4px',
                background:
                  'linear-gradient( to right, #9EBBFF 75%, #D7E3FF 25%)',
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '16px',
                width: '16px',
                backgroundColor: '#D1E3FF',
                borderRadius: '50%',
                borderColor: 'red',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '-10px',
                  // backgroundColor: '#999',
                  color: '#407bff',
                  padding: '4px',
                  borderRadius: '4px',
                }}
              >
                {values[props.key]}%
              </div>
            </div>
          )}
        />
        <Percents>
          <Percent>0%</Percent>
          <Percent>100%</Percent>
        </Percents>
      </RangBar>
    </RangeAdd>
  );
};
export default RangeBar;
