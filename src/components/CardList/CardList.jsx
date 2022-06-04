import './CardList.css'

function CardList({ cards }) {

    return(
        <div className='cardList'>
            {cards}
        </div>
    )
}

export default CardList;