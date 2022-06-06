import { useState } from 'react';
import { FaFile, FaFolder, FaFolderOpen } from 'react-icons/fa';
import React from 'react';

const Folder = ({ directory }) => {
  const [showFolder, setShowFolder] = useState(false);
  if (directory.isFolder) {
    return (
      <section>
        <div onClick={() => setShowFolder(!showFolder)}>
          {showFolder ? (
            <FaFolderOpen className='folder-icon' />
          ) : (
            <FaFolder className='folder-icon' />
          )}
          {directory.name}
        </div>
        <div
          style={{
            display: showFolder ? 'block' : 'none',
            marginLeft: '20px',
          }}
        >
          {directory.contents.map((dir) => {
            return <Folder directory={dir} />;
          })}
        </div>
      </section>
    );
  } else {
    return (
      <div style={{ marginLeft: '5px' }}>
        <FaFile className='file-icon' /> {directory.name}
      </div>
    );
  }
};

export default Folder;
