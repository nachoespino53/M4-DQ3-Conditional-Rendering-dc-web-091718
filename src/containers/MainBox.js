import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor () {
    super();
    this.state = {
      currentCard: <Profile />
    }
  }

  changeCard = (str) => {
    switch (str) {
      case 'profile':
        this.setState({currentCard: <Profile />})
        break;
      case 'photo':
        this.setState({currentCard: <Photos />})
        break;
      case 'cocktail':
        this.setState({currentCard: <Cocktails />})
        break;
      case 'pokemon':
        this.setState({currentCard: <Pokemon />})
        break;
      default:
      break;
    }

  }

  render() {


    return (
      <div>
        <MenuBar currentCard={this.changeCard}/>
        {this.state.currentCard}
      </div>
    )
  }

}

export default MainBox
