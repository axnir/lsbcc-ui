export declare type Type = 'info' | 'positive' | 'negative' | 'warning';
export declare type TypeMap = Record<Type, string>;
export interface AlertProps {
    /**
     * Set this to change alert type
     * @default info
     */
    type?: 'info' | 'positive' | 'negative' | 'warning';
}
