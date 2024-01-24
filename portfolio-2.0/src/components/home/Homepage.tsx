import React from 'react';
import HomepageSectionOne from './HomepageSectionOne';
import HomepageSectionTwo from './HomepageSectionTwo';
// import HomepageSectionThree from './HomepageSectionThree';
// import HomepageSectionFour from './HomepageSectionFour';
import HomepageSectionFive from './HomepageSectionFive';
import HomepageSectionSix from './HomepageSectionSix';
import HomepageSectionSeven from './HomepageSectionSeven';
import HomepageSectionEight from './HomepageSectionEight';

export default function Home() {
  return (
    <>
      <HomepageSectionOne />
      <HomepageSectionTwo />
      {/* <HomepageSectionThree />
      <HomepageSectionFour /> */}
      <HomepageSectionFive />
      <HomepageSectionSix />
      <HomepageSectionEight />
      <HomepageSectionSeven />
    </>
  );
}
