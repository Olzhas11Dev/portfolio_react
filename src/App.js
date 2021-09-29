
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import FormSection from './components/FormSection'
import WorkList from './components/WorkList';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <About/>
      <WorkList/>
      <FormSection/>
    </div>
  );
}

export default App;
