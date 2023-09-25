import React from 'react';

interface ModalOverlayProps {
  show: boolean;
  blur?: boolean;
  onHideModal: () => void;
  children: React.ReactNode;
}

export default function ModalOverlay(props: ModalOverlayProps) {
  return (
    <div className={`fixed top-0 bottom-0 left-0 right-0 ${props.show ? 'block' : 'hidden'}`}>
      <div
        onClick={props.onHideModal}
        className={`absolute top-0 bottom-0 left-0 right-0 bg-opacity-90 bg-[#444] ${
          props.blur ? 'backdrop-blur-md' : ''
        }`}
      />
      {props.children}
    </div>
  );
}
