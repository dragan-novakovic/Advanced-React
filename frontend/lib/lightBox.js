import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function App() {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox
        toggler={toggler}
        sources={['https://i.imgur.com/fsyrScY.jpg']}
      />
    </>
  );
}

export default App;
