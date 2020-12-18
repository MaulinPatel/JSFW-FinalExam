import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Destroy from './Destroy';
import Edit from './Edit';
import Form from './Form';
import New from './New';
import Index from './index';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/edit/:id" component={Edit}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/destroy/:id" component={Destroy}/>
      <Route exact path="/form" component={Form}/>
    </Switch>
  );
}
 
export default Routes;