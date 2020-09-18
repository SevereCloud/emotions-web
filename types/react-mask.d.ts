declare module 'react-imask' {
  type RefWithCurrent<T> = {
    current: T | null;
  };
  type Ref<T> = React.RefCallback<T> | RefWithCurrent<T>;
  export interface IMaskMixinProps {
    inputRef: Ref<HTMLInputElement>;
    mask: string;
    blocks: { [key: string]: any };
    onAccept: (value: string, mask: string) => void;
  }

  export function IMaskMixin<P extends IMaskMixinProps>(
    type: React.FunctionComponent<P> | React.ComponentClass<P> | string,
    props?: (React.Attributes & P) | null,
    ...children: React.ReactNode[]
  ): React.FC<Omit<P, 'inputRef'>>;
}
