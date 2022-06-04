import "./Header.css";

function Header(props) {
  return (
    <div class="upperHeaderContainer">
      <div class="leftPart">
        <h1>Rent A Movie</h1>
      </div>
      <div class="rightPart">
        <a href="#" id="logInID">
          Log in
        </a>
        <a href="#">Sign up</a>
      </div>
    </div>
  );
}

export default Header