import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <div className="relative bg-background z-10">
        <header className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-4 py-6">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  Dashboard
                </Link>
                <Link href="#">Perfil</Link>
                <Link href="#">Configurações</Link>
                <Link href="/login">Sair</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl font-bold text-foreground">Bem-vindo</h1>
          </div>
          <Link href="#">
            <Avatar>
              <AvatarImage src="https://picsum.photos/seed/user/40/40" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </header>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
            <p className="text-muted-foreground">Subtitle</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16">
            <svg viewBox="0 0 1440 112" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 112C480 37.3333 960 37.3333 1440 112V0H0V112Z" fill="hsl(var(--primary))"/>
            </svg>
        </div>
      </div>

      <main className="flex-1 -mt-16 pt-8 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>

      <footer className="py-4 text-center z-20">
        <Button variant="link" className="text-primary-foreground hover:text-primary-foreground/80">
          Precisa de ajuda? Chame o nosso Suporte
        </Button>
      </footer>
    </div>
  );
}
