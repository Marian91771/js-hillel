import { Component } from "react";
import "./emojiCard.css";

export default class EmojiCard extends Component{


    render () {

        const {emoji, onVote} = this.props;

        return(
            <div className="emoji-card">
                <h3 className="emoji-titile">{emoji.emoji}</h3>
                <h3 className="emoji-titile">{emoji.votes}</h3>
                {onVote && <button type="button" onClick={() => onVote(emoji.id)}>Add point</button>}
            </div>
        )

    }
}