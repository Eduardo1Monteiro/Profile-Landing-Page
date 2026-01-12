export default function Footer(props: { children: React.ReactNode }): React.ReactNode {
  return (
    <footer className="mt-auto w-full h-auto border-t border-white/10 flex justify-center align-middle">
      <p className="font-thin text-sm text-center text-nowrap">
        {props.children}
      </p>
    </footer>
  );
}
