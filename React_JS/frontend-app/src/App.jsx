import React from 'react';
import Nav from './components/Nav';
import Products from './components/Products';
import ClassBasedComponent from './ClassBasedComponent';
import CounterFBC from './components/CounterFBC';
import {Counter} from './components/Counter';
import DisplayMyDetails from './components/DisplayMyDetails';

const App = () => {
  let detail=["Rajendra","23NR1578"];
  let dept="DEVELOPER";
  let details=["Rajendra",578,"MERN","BITS VIZAG"];
  return (
    <div>
      <Nav/>
      <ClassBasedComponent/>
      <Counter/>
      <CounterFBC role={dept} fulldetails={detail}/>
      <DisplayMyDetails student={details}/>
      <Products/>
    </div>
  );
};
export default App;