import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

// component imports
import Header from './components/Header';
import Landing from './components/Landing';
import MusicPlayer from './components/MusicPlayer';

// route imports
import About from './components/routes/About';
import Shows from './components/routes/Shows';
import Contact from './components/routes/Contact';
import Videos from './components/routes/Videos';

import './style.css';

export default function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Header />
        <Switch>
          <div className='routes'>
            <Route exact path='/' component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/shows' component={Shows} />
            <Route path='/videos' component={Videos} />
            <Route path='/contact' component={Contact} />
          </div>
        </Switch>
      </HashRouter>
      <MusicPlayer />
    </div>
  );
}
