import '../styles/globals.css';
import Header from './Header';
import Providers from './Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<>
<html lang="en">
<body>
<Providers>
<Header />
<div className="max-w-6xl mx-auto bg-gray-200 dark:bg-zinc-900 transition-all duration-1000">
{children}
</div>
</Providers>
</body>
</html>
</>
);
}