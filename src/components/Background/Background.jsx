import Search from "../Search/Search"
import "./Background.css"

function Background({ src, text, setText }) {

    return (
        <div className="container">
            <img className="background" src={src} />
            <Search className="search" text={text} setText={setText} />
        </div>
    )
}

export default Background