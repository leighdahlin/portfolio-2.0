import React from 'react';
import HomeVideo from './HomeVideo';
import AboutBlocks from './AboutBlocks';
import DigitalIdentityBlock from './DigitalIdentityBlock';
import EmpowerJourneyBlock from './DigitalJourneyBlock';
import WhatToExpect from './WhatToExpect';
import Faq from './Faq';
import FormSection from './Form';

export default function Home() {
  return (
    <div className="block bg-off-white dark:bg-dark-blue">
      <HomeVideo />
      <AboutBlocks />
      <DigitalIdentityBlock />
      <WhatToExpect />
      <Faq />
      <EmpowerJourneyBlock />
      <FormSection />
    </div>
  );
}
