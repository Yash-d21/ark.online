import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="#" className="flex items-center gap-2">
            <span className="font-headline text-2xl font-bold tracking-tighter text-foreground">ARK</span>
          </Link>
           <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="hidden md:inline">|</span>
                <Image src="https://i.ibb.co/3fd2y38/T-Hub-Logo-PNG.png" alt="T-Hub Logo" width={40} height={40} className="object-contain" />
                <span>Incubated with T-Hub</span>
            </div>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} ARK Hardware Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
