import "./index.css";

type ButtonProps = {
  content: string;
  clickHandler: () => void;
};

const Button = ({ content, clickHandler }: ButtonProps) => {
  return (
    <button
      className="border-[#ffe962] border-2 p-3 rounded-2xl cursor-pointer text-3xl text-shadow-lg font-bold text-green-900"
      onClick={clickHandler}
    >
      <span className="animate-bounceText">{content}</span>
    </button>
  );
};

export default Button;
