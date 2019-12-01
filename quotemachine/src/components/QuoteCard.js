import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomQuote } from '../actions';
import './QuoteCard.css';

class QuoteCard extends Component {
    HandleClick = (event) => {
        this.props.getRandomQuote();
    }

    componentDidMount() {
        this.props.getRandomQuote();
    }

    
    render() {
        return (
            <div className="three column row">
            <div className="column"></div>
            <div id="quote-box" className="center aligned column ui card">
                <p id="text">
                    {this.props.quote.quote}
                </p>
                <p id="author">
                    - {this.props.quote.character}
                </p>
                <div className="options">
                    <a id="tweet-quote" href="twitter.com/intent/tweet"><i className="twitter icon"></i></a>
                    <button 
                        id="new-quote"
                        onClick={this.HandleClick}
                    >
                        New Quote
                    </button>
                </div>  
            </div>
            <div className="right aligned column"></div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return { quote: state.quote }
}
export default connect(
    mapStateToProps,
    { getRandomQuote })(QuoteCard);