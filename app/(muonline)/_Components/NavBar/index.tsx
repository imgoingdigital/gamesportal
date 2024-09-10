"use client"
import React, { useState } from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { navLinksMu } from '@/constants/nav'
import Link from 'next/link'
import { cn } from '@/lib/utils'
// import "@/styles/mu.css"

const NavMu = () => {
  const [active,setActive] = useState('Home')
  return (
    <div className="navbar">
      <NavigationMenu  >
        <NavigationMenuList>
          {navLinksMu.map((nav, index) => (
            !nav.isHidden ? (
              <NavigationMenuItem key={index} >
                {nav.sub ? (
                  <>
                    <NavigationMenuTrigger >{nav.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className="dropdown-content" >
                      <ul className=' gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                        {nav.sub.map((s,i) => (
                          !s.isHidden ? (
                            <ListItem key={s.id} className='row-span-3' >
                                <Link href={s.ref ?? "#"} className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                                {s.title}
                                <p>{s.description}</p>
                                </Link>
                            </ListItem>

                          ):<></>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ):(
                  //No Submenu
                  <>
                  <Link href={nav.ref ?? "#"} legacyBehavior passHref key={nav.id}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {nav.title}
                  </NavigationMenuLink>
                  </Link>
                  {/* <Link href={nav.ref}>{nav.title}</Link> */}
                  </>
                )}
              </NavigationMenuItem>
            ):(
              //Hidden NavItem
            <></>
            )
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

export default NavMu