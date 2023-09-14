import React, { useState } from 'react';
import CardModal from './CardModal';

const Card = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div
        className="bg-white rounded-lg shadow-md p-4 h-40 cursor-pointer hover:scale-105 hover:shadow-gray-300"
        onClick={toggleModal}
      >
        <div className=" flex ">
          <p><b>Capsule ID: </b></p>
          <p className="text-gray-600">{data.capsule_serial}</p>
        </div>
        <div className=" flex ">
          <p><b>Status: </b></p>
          <p className="text-gray-600">{data.status}</p>
        </div>
        <div className=" flex ">
          <p><b>Type: </b></p>
          <p className="text-gray-600">{data.type}</p>
        </div>
        <div className=" flex ">
          <p><b>Launch Code: </b></p>
          <p className="text-gray-600">{data.original_launch_unix}</p>
        </div>
      </div>

      {isModalOpen && (
        <CardModal id={data.capsule_serial} onClose={toggleModal} />
      )}
    </div>
  );
};

export default Card;
