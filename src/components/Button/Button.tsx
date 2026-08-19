import './style.css'
import type { ButtonType } from '../../types';

interface ButtonProps {
  label: string,
  action: () => void,
  color?: string,
  type: ButtonType,
}

const Button = (props: ButtonProps) => {
    const isTextButton = props.type === 'text';
    return (
      <button onClick={props.action} className={isTextButton ? "customButton" : 'removeButton'} style={{color: props.color}}>{props.label}</button>
    )
}

export default Button;