import './App.css';
import ModalX from './components/Modals/modalX/modalX';
import Modal from './components/Modal';
import ModalY from './components/Modals/modalY/modalY';
import ModalZ from './components/Modals/modalZ/modalZ';

import { useState } from 'react';

function DispalyModal({count, onCountChange, onCountChangeDec}) {
  switch (count) {
    case (1):
      return <ModalX onCountChange={onCountChange} onCountChangeDec={onCountChangeDec} />
    case (2):
      return <ModalY onCountChange={onCountChange} onCountChangeDec={onCountChangeDec} />
    case (3):
      return <ModalZ onCountChange={onCountChange} onCountChangeDec={onCountChangeDec}/>
    default:
      return <Modal onCountChange={onCountChange} onCountChangeDec={onCountChangeDec}/>
  }

}

function App() {
  const [count, setCount] = useState(0)

  const onCountChange = () => {
    setCount(count+1)
  }

  const onCountChangeDec = () => {
    if (count > 0) {
      setCount(count-1)
    }
  }

  return (
    <div className="App">
      <DispalyModal count={count} onCountChange={onCountChange} onCountChangeDec={onCountChangeDec}/>
    </div>
  );
}

export default App;
