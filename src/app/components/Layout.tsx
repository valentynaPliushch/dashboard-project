export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="bg-blue-300/10 h-full w-full text-white p-2 lg:p-4 rounded-2xl border-1 border-blue-300/10">
      {children}
    </article>
  );
}
