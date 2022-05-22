export type Placement = 'top' | 'right' | 'bottom' | 'left';

export interface PopoverProps {
  title: string;
  content: React.ReactNode;
  placement?: Placement;
  children: React.ReactElement;
}