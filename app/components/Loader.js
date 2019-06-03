import React from 'react';
import SSC from 'react-ssc';

function Loader() {
  return (
    <SSC.PageContent>
      <SSC.Spinner color={'#6E4EFF'} />
    </SSC.PageContent>
  );
}

export default Loader;
