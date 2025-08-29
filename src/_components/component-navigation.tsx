"use client"

import * as React from "react"
import Link from "next/link"
import { Braces, BracesIcon, CircleCheckIcon, CircleHelpIcon, CircleIcon, LayoutTemplate, Wind } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavigationMenuJurusan, NavigationMenuKegiatan, NavigationMenuMore, NavigationWebTechnology, NavMenuHomeItems } from "@/constant/navigation-constant"

export function MainNavigationMenu() {
  const [{ href }] = NavigationMenuJurusan
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild href="/">
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium ">
                      Welcome To SMK Otomindo
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Sekolah Yang Menyediaan Beberapa Program KeAhlihan Yang Akan Membantu Anda Mencapai impian
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {NavMenuHomeItems.map((item) => (
                <ListItem href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Activities</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {NavigationMenuKegiatan.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={"#"}
                >
                  {item.description}

                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/dokumentasi">Documentation</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Majors</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                {NavigationMenuJurusan.map((item) => (
                  <NavigationMenuLink asChild>
                    <Link
                      key={item.href}
                      href={`/jurusan/${item.href}`}>
                      <div className="font-medium">{item.jurusan}</div>
                      <div className="text-muted-foreground">{item.keahlihan}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                {NavigationMenuMore.map((item) => (
                  <NavigationMenuLink asChild>
                    <Link href={`${item.href}`}>{item.name}</Link>
                  </NavigationMenuLink>
                ))}
                {/* <NavigationMenuLink asChild>
                  <Link href="#"></Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Contact Us</Link>
                </NavigationMenuLink> */}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Web Technology</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                {NavigationWebTechnology.map((item) => (
                  <NavigationMenuLink asChild>
                    <Link href={`${item.href}`} target="_blank" className="flex-row items-center gap-2" key={item.technology}>
                      {item.icon && <item.icon />}
                      {item.technology}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
