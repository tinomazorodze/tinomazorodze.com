export default function Answer({ children }: any) {
  return (
    <div className="text-sm sm:text-base leading-relaxed text-left p-2 sm:p-4 text-md text-primary  bg-accent-2 rounded-bl-md rounded-br-md">
      {children}
    </div>
  );
}
