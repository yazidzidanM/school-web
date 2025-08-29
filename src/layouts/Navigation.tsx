import { Button } from "@/components/ui/button";
import { MainNavigationMenu } from "@/_components/component-navigation";
import Logo from "@/logo/logo";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex flex-row items center justify-between p-7 w-full h-25 bg-black">
      <Logo></Logo>
      <MainNavigationMenu></MainNavigationMenu>
      <Link href="/login">
        <Button variant="outline" size="lg">Log in</ Button>
      </Link>
    </div>
  )
}