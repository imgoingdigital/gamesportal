import React from 'react'
type AdsenseTypes = {
  pId: string
}

const GoogleAdsense = ({pId}: AdsenseTypes) => {
  return (
    
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6919811732951558"
     crossOrigin="anonymous"></script>
  )
}

export default GoogleAdsense