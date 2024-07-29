
import { useState } from 'react';

import './scss/style.css';

import './components/startButton';
import StartButton from './components/startButton';
import Modal from './components/modal';



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      {!isModalOpen && <StartButton onClick={openModal} />}
      <Modal isOpen={isModalOpen} />
    </>
  )
}

export default App
