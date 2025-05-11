import './Button.css'

export default function Button (props) {
    const {type, text, onClick} = props;

    let className = '';
    if(type == 'blue-btn'){
        className += 'blue-btn';
    } else if(type == 'alert-btn'){
        className += 'alert-btn';
    }

    return (
        <button type="button" className={className} onClick={onClick}>
            {text}
        </button>
    )
}