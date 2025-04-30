type ContainerProps = {
  children: JSX.Element;
  className?: string;
};
const Container = ({ children, className }: ContainerProps) => {
  return <div className={`mx-auto bg-white md:max-w-[1500px] ${className}`}>{children}</div>;
};
export default Container;
