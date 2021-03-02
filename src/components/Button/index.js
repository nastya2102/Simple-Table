import { Button as DefaultButton } from 'antd';
import './style.scss';

const Button = ({children, onClick, disabled}) => {
  return (
    <DefaultButton
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </DefaultButton>
  );
};

export default Button;