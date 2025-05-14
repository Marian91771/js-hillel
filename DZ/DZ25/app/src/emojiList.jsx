import { Component } from "react";
import EmojiCard from "./emojiCard";
import "./emojiList.css";

export default class EmojiList extends Component{


    render(){

        const {emojies, onVote, onRefresh, onWinner} = this.props;

        return (
            <div>
                <h2 className="emojies-title">emojies</h2>
                <ul className="emoji-list">
                    {emojies.map((emoji) => <EmojiCard key={emoji.id} emoji={emoji} onVote={onVote}/>)}
                </ul>
                <div className="buttons">
                    <button onClick={onRefresh}>Refresh</button>
                    <button onClick={onWinner}>Show winner</button>
                </div>
            </div>
        )
    }
}