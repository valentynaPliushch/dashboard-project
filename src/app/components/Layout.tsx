export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="bg-blue-300/10 h-full text-white p-4 rounded-2xl border-1 border-blue-300/10">
      {children}
    </article>
  );
}
