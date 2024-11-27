import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-secondary"}>
          <SidebarProvider>
              <main>
                  <div className="flex w-[100vw] justify-between fixed bg-white drop-shadow-md">
                      <div className="flex flex-row gap-2 p-3 pl-5 sm:pl-10 pt-4 align-bottom">
                          <svg className="fill-circle_1 pt-1" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                               width="27"
                               height="27"
                               viewBox="0 0 200 200" role="img" aria-label="Homepage">
                              <path
                                  d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
                          </svg>
                          <p className={"font-primary font-semibold text-title"}>Ee Lyn</p>
                          <p className={"font-light pt-[9px] pl-3 sm:pl-5 text-sm"}>creative</p>
                      </div>
                      {/* When screen is big*/}
                      <div className={"flex-row gap-4 items-center md:pr-6 hidden sm:flex"}>
                          <ul className={"flex list-none h-[24px] font-secondary font-light text-sm pt-1.5"}>
                              <li className={"px-8"}>resume</li>
                              <li className={"border-r border-l border-black px-8"}>projects</li>
                              <li className={"px-8"}>find me here</li>
                          </ul>
                      </div>
                      {/*When screen is small*/}
                      <div className={"flex sm:hidden items-center"}>
                          <AppSidebar />
                          <div className={"pr-5 pt-2"}><SidebarTrigger/></div>
                      </div>
                  </div>
                  {children}
              </main>
          </SidebarProvider>
      </body>
    </html>
  );
}
