import ReactDOM from 'react-dom/client';
import App from 'App';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
