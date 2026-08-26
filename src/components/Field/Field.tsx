import type { RefObject } from 'react';
import './styles.css';

interface FieldPorps {
    label: string;
    id: string;
    type?: string;
    value: string | number | readonly string[] | undefined;
    onInput: (event: React.InputEvent<HTMLInputElement>) => void;
    ref?: RefObject<HTMLInputElement | null>;
}

const Field = (props: FieldPorps) => {
    const { label, id, type = 'text', value, onInput, ref } = props;

    return (
        <input
            className="field"
            id={id}
            placeholder={label}
            autoComplete="off"
            type={type}
            value={value}
            onInput={onInput}
            ref={ref}
        />
    );
};

export default Field;
