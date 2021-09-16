import React from 'react';
import mountains1 from '../../images/mountains1.png';
import wedding from '../../images/wedding.png';
import mountains2 from '../../images/mountains2.png';

console.log(mountains1, wedding, mountains2);

function Mountains() {
  return <div>
      <img src={mountains1} alt="Mountains" width="600px" height="500px" />
      <img src={wedding} alt="Wedding" width="350px" height="500px" />
      <img src={mountains2} alt="Mountains" width="600px" height="500px" />
    </div>
};

export default Mountains;