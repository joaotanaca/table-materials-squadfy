import { useMemo } from 'react';
import source from './svg';

export type TIcons = keyof typeof source;
export type IconProps = { size?: number; color?: string; className?: string };
const Icon = ({ name, ...props }: IconProps & { name: TIcons }) => {
  const IconSource = useMemo(() => source[name], [name]);

  return <IconSource {...props} />;
};

export default Icon;
