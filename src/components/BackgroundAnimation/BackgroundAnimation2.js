import React from 'react';
import Lottie from 'react-lottie';
import animationData from './animation-data';
import { Section } from '../../styles/GlobalComponents';
import { RightSection } from './BackgroundAnimationStyles';

const BgAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Section row nopadding>
      <RightSection style={{ width: 500, height: 500 }}>
        <Lottie options={defaultOptions} />
      </RightSection>
    </Section>
  );
};
export default BgAnimation;
