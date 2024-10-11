

function Button({ onClick, text, type, className, children }) {
  return (
    <button
      onClick={onClick}
      className={` px-4 py-2 rounded-lg transition-colors font-EstedadMed flex gap-2 ${
        type === "primary"
          ? "bg-primary text-white hover:bg-primary-darker"
          : ""
      } ${
        type === "white"
          ? "bg-white text-primary border-[1px] border-primary hover:bg-primary hover:text-white"
          : ""
      } ${
        type === "secondary"
          ? "bg-secondary text-Black hover:bg-secondary-darker"
          : ""
      } ${
        type === "transparent"
          ? "text-white bg-transparent border-[1px] border-white text-Black hover:bg-white hover:text-black"
          : ""
      } ${className}`}
    >
      {children} {text}
    </button>
  );
}

export default Button;
