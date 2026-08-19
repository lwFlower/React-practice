const Button = {
    Text: 'text',
    Remove: 'remove',
} as const;

export type ButtonType = typeof Button[keyof typeof Button];