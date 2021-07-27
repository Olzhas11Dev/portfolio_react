
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import FormSection from './components/FormSection'
import Projects from './components/Projects'
import ProjectSection from './components/ProjectSection'

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <About/>
      <ProjectSection/>
      <FormSection/>
     
    </div>
  );
}

export default App;
