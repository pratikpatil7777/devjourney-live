import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="flex min-h-full flex-col font-sans">
    {children}
    <footer className="mt-auto py-6 text-center text-xs opacity-70">
      Built&nbsp;with&nbsp;React,&nbsp;TypeScript&nbsp;and&nbsp;Tailwind.
    </footer>
  </div>
);

export default Layout;
