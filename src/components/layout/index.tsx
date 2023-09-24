import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from 'next-themes';

type BaseLayoutProps = {
  children: React.ReactNode;
}

export default function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
