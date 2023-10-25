import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

export default function DocSidebarWrapper(props) {
  return (
    <>
      <DocSidebar {...props} className="thin-scrollbar" />

      <div className='copyright' style={{ background: 'white', padding: '10px', textAlign: 'left' }}>
        © {new Date().getFullYear()} Appsmith, Inc.
      </div>
    </>
  );
}
