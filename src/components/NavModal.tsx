function NavModal({ isopen, setIsOpen }: { isopen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-zinc-950 opacity-80 z-55 transition-transform duration-300 ${
        isopen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
    
    </div>
  );
}

export default NavModal;
