import './styles.css'

interface FieldPorps {
    label: string;
    id: string;
    type?: string;
    value: any;
    onInput: (value: any) => void;
}

const Field = (props: FieldPorps) => {
    const {
        label,
        id,
        type = 'text',
        value,
        onInput,
    } = props;

    return (
        <input className="field" id={id} placeholder={label} autoComplete="off" type={type} value={value} onInput={onInput} />
    )
}

export default Field;