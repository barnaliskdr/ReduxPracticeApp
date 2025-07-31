import { StrictMode } from 'react';
// PrimeReact core theme
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
// PrimeReact core CSS
import "primereact/resources/primereact.min.css";
// PrimeIcons
import "primeicons/primeicons.css";
// Optional: PrimeFlex (for layout utilities)
import "primeflex/primeflex.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import  store  from './Services/Store/Store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
