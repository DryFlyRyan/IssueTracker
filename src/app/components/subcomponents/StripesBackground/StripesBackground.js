import React from 'react';

import {
  BackgroundDiv,
  BackgroundLayer1,
  BackgroundLayer2,
  BackgroundLayer3,
  BackgroundLayer4,
  BackgroundLayer5,
} from './StripesBackground.styles';

/**
 * Given more time I'd probably do this in an SVG and apply it to the background.
 * This way isn't horrible though.
 */

const StripesBackground = () => (
  <BackgroundDiv>
    <BackgroundLayer1 />
    <BackgroundLayer2 />
    <BackgroundLayer3 />
    <BackgroundLayer4 />
    <BackgroundLayer5 />
  </BackgroundDiv>
);

export default StripesBackground;
