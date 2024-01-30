import React, { useState } from 'react';

import { Range } from 'react-range';
import { AddWaterButton } from 'components';
import { RangBar, Title, Percent, Percents, RangeAdd } from './RangeBar.styled';

const RangeBar = () => {
  const [values, setValues] = useState([50]);

  const handleChange = newValues => {
    setValues(newValues);
  };
  const buttonStyle = {
    // position: 'absolute',
    width: '280px',
    height: '36px',
    left: '526px',
    top: '825px',
    display: 'inline-flex',
    padding: '10px 30px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '10px',
    border: 'none',
    background: 'var(--Primery-Color-Blue, #407bff)',
    boxShadow: '0px 4px 8px 0px rgba(64, 123, 255, 0.34)',
    color: 'white',
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
                width: '280px',
                backgroundColor: '#ddd',
                borderRadius: '4px',
                background:
                  'linear-gradient( to right, #9EBBFF 50%, #D7E3FF 25%)',
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
                  position: 'static',
                  marginTop: '10px',
                  marginLeft: '-10px',
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
      <AddWaterButton style={buttonStyle} />
    </RangeAdd>
  );
};
export default RangeBar;
