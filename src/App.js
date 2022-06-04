import logo from './logo.svg';
import './Header.css';
import { ReactDOM } from 'react';

function App() {
  return (
   <>
   <Header />
   </>
  );

}

;
function Header(props) { 
  const hh =
  ( 
  <div class="upperHeaderContainer">
      <div class="leftPart">
        <h1>Rent A Movie</h1>
      </div>
      <div class="rightPart">
        <a href="#" id="logInID">Log in</a>
        <a href="#">Sign up</a>
      </div>

  </div>
    
);
const genre = (  <div class="nav">
<a href="#">Home</a>
<a href="#">All Movies</a>
<a href="#">New Movie</a>
</div>)
return (
  <>
  {hh}
  {genre}
  </>
  
);
}



export default App;
