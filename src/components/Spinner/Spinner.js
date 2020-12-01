import React from 'react';

import { ContainerSpinner } from './SpinnerStyle';

const Spinner = () => {
  return (
    <ContainerSpinner>
      <div className="loro">
        <div className="circ"></div>
        <div className="circ3"></div>
        <div className="circ5"></div>

        <div className="circ7"></div>
        <div className="ojo"></div>
      </div>
    </ContainerSpinner>
  );
};

export default Spinner;
