interface props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: props) => {
  return (
    <button type="button" className={'btn btn-'+ color} onClick={onClick}>
      {children}
    </button>
  );
};        

export default Button;
