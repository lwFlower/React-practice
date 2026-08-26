import './style.css';

interface ButtonProps {
    label: string;
    action: () => void;
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.action} className="customButton">
            {props.label}{' '}
        </button>
    );
};

export default Button;
