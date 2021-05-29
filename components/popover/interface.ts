export type Placement = 'top' | 'right' | 'bottom' | 'left';

export type PopoverProps = {
  title: string;
  content: React.ReactNode;
  placement?: Placement;
  children: React.ReactElement;
}