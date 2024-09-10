"use client"
import React, { useState } from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { navLinksMu } from '@/constants/nav'
import Link from 'next/link'
import { cn } from '@/lib/utils'
// import "@/styles/mu.css"

const NavAll = () => {
  const [active,setActive] = useState('Home')
  return (
    <div className="navbar">
      <NavigationMenu  >
        <NavigationMenuList>
        {navLinksMu.map((nav, index) => (
            !nav.isHidden ? (
              <NavigationMenuItem key={index}>

              </NavigationMenuItem>
            ):<></>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>


  )
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavAll