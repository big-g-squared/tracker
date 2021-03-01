import './../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

import Classes from './Classes';
import NewClass from './NewClass';
import Class from './Class';

const App = () => {
  return (
    <div>
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={Classes} />
          <Route exact path="/newClass" component={NewClass} />
          <Route path="/class/:name/:id" component={Class} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
