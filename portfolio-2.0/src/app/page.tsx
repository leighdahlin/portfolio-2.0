'use client';

import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import Home from '@/components/home/Homepage';
import { Helmet } from 'react-helmet-async';
import Script from 'next/script';
import Link from 'next/link';

export default function Homepage() {
  return (
    <>
      <GlobalLayout>
        <Link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
        <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></Script>
        {/* <Link rel="stylesheet" href="/flickity/flickity.css" media="screen" /> */}
        {/* <Link rel="stylesheet" href="/flickity.min.css" media="screen" /> */}

        {/* <Script src="/flickity/flickity.pkgd.min.js"></Script> */}
        <Helmet>
          {/* <script type="text/javascript">
            {`
            (function(a,s,n,i,p,e,t) {
              a.INDY=a.INDY || {};
              a.INDY.baseUrl=i;
              a.INDY.id='65af88400f712078f18abc59';
              a.INDY.accessId='jDRDILnkCE64XHfEBCBtzOG6KmBmp0VXodxY2RdaTO0F7VBq2klELJcQaRuBCMJu';
              a.INDY.htb='true';
              e=s.createElement(n);e.type="text/javascript";e.async=!0;e.src=i+p;
              t=s.getElementsByTagName(n)[0];t.parentNode.insertBefore(e,t);
            })(window,document,"script","https://weareindy.com/app","/static/js/forms-embed.js");
          `}
          </script> */}
        </Helmet>
        <Home />
      </GlobalLayout>
    </>
  );
}
