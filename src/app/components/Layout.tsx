export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="bg-midnight-800 h-full w-full text-white p-2 lg:p-4 rounded-2xl border-1 border-midnight-600">
      {children}
    </article>
  );
}
