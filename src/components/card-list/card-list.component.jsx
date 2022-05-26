import { Component } from 'react'


class CardList extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const { monsters } = this.props
        return (
            <div>
                {monsters.map((monster, index) => (<h1 key={index + 1}>{monster.name}</h1>))}
            </div>
        )
    }
}

export default CardList