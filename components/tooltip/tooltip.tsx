import { ReactNode } from 'react';
import style from './tooltip.module.scss';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  title?: string;
}

const Tooltip = ({ children, content, title }: TooltipProps) => {
  return (
    <div className={style.tooltip_container}>
      <div className={style.tooltip_trigger}>
        {children}
      </div>
      <div className={style.tooltip_content}>
        {content}
      </div>
    </div>
  );
};

export default Tooltip; 