import { BrowserRouter} from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
    return (
    <div className="App">
    <CustomCursor/>
    <BrowserRouter>
        <AnimatedRoutes/>
    </BrowserRouter>


    </div>
    
  );
}

export default App;



