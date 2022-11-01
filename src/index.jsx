import React, { useState } from 'react'
// import { useDebounce } from 'use-debounce';

function Greet({name = 'worlddd'}) {
  const [val, setVal] = useState(name);

  /*
  const wantedMetadataImmediate = () => {
    console.log('delayed print 123');
  };
  const [wantedMetadata] = useDebounce(wantedMetadataImmediate, 5000)
  */


  return <h1>Hello, {val}!</h1>
}

export default Greet;
