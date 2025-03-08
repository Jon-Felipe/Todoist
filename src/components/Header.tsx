type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header>
      <h1 className='text-5xl font-bold tracking-widest text-neutral-600 uppercase'>
        {title}
      </h1>
    </header>
  );
}

export default Header;
