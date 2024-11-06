import React from "react";
import { Button, ButtonProps } from "../../ui/button";

interface IMyButton extends ButtonProps {
  title: string;
  loading?: boolean;
  onClick: () => void | Promise<void>;
}

const MyButton = React.forwardRef<HTMLButtonElement, IMyButton>(
  (
    {
      onClick,
      title,
      loading = false,
      variant,
      className,
      size,
      asChild,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        asChild={asChild}
        size={size}
        className={className}
        onClick={() => {
          void onClick();
        }}
        variant={variant}
        {...props}
      >
        {loading ? "loading..." : title}
      </Button>
    );
  }
);
MyButton.displayName = "MyButton";

export default MyButton;
