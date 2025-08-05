import React from 'react';
import ButtonSimple from '../buttons/ButtonSimple';
import ButtonSimpleFilled from '../buttons/ButtonSimpleFilled';

const DeletePopup = ({ selectedItems = [], onDelete, onCancel }) => {
  const itemCount = selectedItems.length;
  return (
    <div className=" w-[500px] flex flex-col items-center space-y-5">
      <div className="text-center">
        <p className="text-gray-600 text-sm">
          Are you sure you want to delete <strong>{itemCount}</strong> {itemCount === 1 ? 'item' : 'items'}?
          
          This action cannot be undone.
        </p>
      </div>
      <div className="flex gap-4">
        <ButtonSimpleFilled onClick={onCancel}>
          Cancel
        </ButtonSimpleFilled>
        <ButtonSimple onClick={() => onDelete(selectedItems)} className='text-red-500 border-red-500'>
          Delete
        </ButtonSimple>
      </div>
    </div>
  );
};

export default DeletePopup;
