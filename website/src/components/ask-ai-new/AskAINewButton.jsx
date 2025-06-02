import React, { useState } from 'react';
import AskAINewModal from './AskAINewModal';

const AskAINewButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Ask AI (New)</button>
      <AskAINewModal show={open} closeModal={() => setOpen(false)} />
    </>
  );
};

export default AskAINewButton;
