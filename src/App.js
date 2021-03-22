import React from "react";
import Form from './component/Form'
import {Link, Route, BrowserRouter} from 'react-router-dom'



const App = () => {
  return(
    <div className="bones">
      <h1>Pizza</h1>
      <BrowserRouter>
        <Link to= 'Form'>
          Order Here
          </Link>
          <Route path= 'component/Form' component={Form} />
    
    
      </BrowserRouter>
      <Form />
      </div>
      )}
export default App;
