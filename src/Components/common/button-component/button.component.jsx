export const Button = ({
  children,
  classButton,
  onClick,
  ButtonType,
  ...props
}) => (
  <button
    type={ButtonType}
    className={classButton}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
