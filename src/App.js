import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from './Comp/Accueil/Accueil'
import Boutique from './Comp/Boutique/Boutique'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Accueil />}/>
        <Route path='Boutique' element={<Boutique />}/> 
      </Routes>
    </div>
  );
}

export default App;
