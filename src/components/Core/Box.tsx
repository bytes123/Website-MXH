import type { CoreComponentsProps } from "@/types";

export const Box = (props: Readonly<CoreComponentsProps>) => {
  const { children, classNames = "", onClick, id, elementRef } = props;

  return (
    <div
      className={` ${classNames}`}
      id={id}
      ref={elementRef}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
