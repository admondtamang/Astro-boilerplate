export default function LinkButton({ className, children, ...rest }: any) {
  return (
    <a
      className={`text-dark text-md shadow-offset-black rounded border-2 border-black bg-indigo-300 py-2 px-6 hover:bg-lime-600 hover:text-lime-50 ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
