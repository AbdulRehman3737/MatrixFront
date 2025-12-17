import "./index.css";

type ButtonProps = {
  content: string;
  clickHandler: () => void;
};

const Button = ({ content, clickHandler }: ButtonProps) => {
  return (
    <button
      className="border-[#ffe962] border-2 bg-black p-5 rounded-2xl cursor-pointer text-7xl text-[#ffe962]"
      onClick={clickHandler}
    >
      <span className="animate-bounceText">{content}</span>
    </button>
  );
};

export default Button;
