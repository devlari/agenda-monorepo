type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return <div className="container">{children}</div>;
}
