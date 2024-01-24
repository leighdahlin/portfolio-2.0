'use client';

import React from 'react';
import GlobalLayout from '@/components/GlobalLayout';
import Home from '@/components/home/Homepage';
import { Helmet } from 'react-helmet-async';

export default function Homepage() {
  return (
    <>
      <GlobalLayout>
        <Helmet>
          <script type="text/javascript">
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
          </script>
        </Helmet>
        <main>
          <Home />
        </main>
      </GlobalLayout>
    </>
  );
}
