import {Component} from 'react'
import './index.css'

const tossArr = ['heads', 'tails']
class CoinToss extends Component {
  state = {toss: 'heads', headCount: 0, tailsCount: 0}

  toss = () => {
    const result = tossArr[Math.floor(Math.random() * 2)]
    this.setState(() => ({toss: result}))
    if (result === 'heads') {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }
  }

  render() {
    const {toss, headCount, tailsCount} = this.state
    let imageUrl
    if (toss === 'heads') {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }
    return (
      <div className="container">
        <div className="card">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="desciption">Heads (or) Tails</p>
          <img className="toss-image" src={imageUrl} alt="toss result" />
          <br />
          <button onClick={this.toss} type="button" className="btn">
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total:{headCount + tailsCount}</p>
            <p className="result">Heads:{headCount}</p>
            <p className="result">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
