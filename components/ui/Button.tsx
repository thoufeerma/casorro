import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center text-xs tracking-cinematic uppercase transition-all duration-500 ease-out focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-rose focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal-deep disabled:opacity-40 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brand-rose text-brand-charcoal-deep px-8 py-3.5 hover:bg-brand-rose-subtle hover:tracking-widest",
    secondary:
      "bg-brand-ivory text-brand-charcoal-deep px-8 py-3.5 hover:bg-brand-beige-light hover:tracking-widest",
    outline:
      "border border-brand-rose/40 text-brand-ivory px-8 py-3.5 hover:border-brand-rose hover:bg-brand-rose/10 hover:text-brand-ivory hover:tracking-widest",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
