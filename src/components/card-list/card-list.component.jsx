import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = (props) => {
    const { monsters } = props
    return (
        <div className='card-list'>
            {monsters.map(({ id, name, email }) => (
                <Card id={id} name={name} email={email} />
            ))}
        </div>
    )
}

export default CardList