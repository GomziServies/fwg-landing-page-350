import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children, title, className = "" }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', onKey);
    // set focus inside the dialog for accessibility
    setTimeout(() => dialogRef.current?.focus?.(), 0);

    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto" aria-modal="true" role="dialog">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className={`relative bg-white rounded-2xl shadow-2xl w-full mx-auto my-8 sm:my-0 transform transition-all duration-200 scale-100 max-h-[90vh] flex flex-col ${className || 'max-w-3xl'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b flex-shrink-0">
          <div className="text-base sm:text-lg font-semibold text-gray-900">{title}</div>
          <button
            aria-label="Close dialog"
            onClick={onClose}
            className="inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-md text-gray-500 hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
