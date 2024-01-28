import React, { useState } from 'react';

import { Range } from 'react-range';
import {
  RangBar,
  Title,
  Percent,
  Percents,
  RangeAdd,
  Button,
} from './RangeBar.styled';

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
                backgroundColor: '#999',
                borderRadius: '50%',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-28px',
                  left: '-10px',
                  backgroundColor: '#999',
                  color: '#fff',
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
      <Button type="button">+ Add Water</Button>
    </RangeAdd>
  );
};
export default RangeBar;
