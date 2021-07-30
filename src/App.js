
import Profil from './profile/profile';
import './App.css';

function App() {
  const handleAlert = (name) => {
        alert (`Hi! My name is ${name}`);
    };
  return (
    
    <div className="App">
      < Profil fullName="Nawres" bio="my name is nawres mabrouk i m from grombalia and im an electronics technician" profession=" electronics tachnicien" handleAlert={handleAlert}  children="nawres.jpg"/>;
      
    </div>
  );
}

export default App;