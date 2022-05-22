import React from 'react';
import Button from 'lsbcc-ui/lib/button';
import 'lsbcc-ui/lib/button/style';

export default () => {
  const handleClick = (e): void => {
    console.log(e);
    alert(e.target);
  };

  return (
    <div className="App">
      <div
        style={{
          width: 200,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Button type="default" disabled onClick={handleClick}>
          default
        </Button>
        <Button type="primary" size="large" onClick={handleClick}>
          primary
        </Button>
      </div>
    </div>
  );
};
