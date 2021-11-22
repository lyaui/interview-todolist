const Button = ({ children, className, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-6 py-1 tracking-widest rounded-sm transition-colors`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
