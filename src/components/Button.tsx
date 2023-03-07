interface IProps {
  className: string;
  onClick: () => void;
  content: string;
}

const Button = ({ className, onClick, content }: IProps) => {
  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
