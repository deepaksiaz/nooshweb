
import './App.css';
import { Route, Switch} from "react-router-dom";
import Home from './components/home/home'
import Footer from './components/footer/footer'
import Contact from './components/contactus/contactus';
function App() {
  return (
    <>
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
       
        <Route path="/contactus" component={Contact} />
      </Switch>
      <Footer />
      </>
  );
}

export default App;
