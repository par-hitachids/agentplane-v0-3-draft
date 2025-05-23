import { BellIcon, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
export function Navbar() {
  return <div className="border-b sticky top-0 bg-background z-10">
    <div className="flex h-16 items-center px-4 md:px-6 justify-between">
      <div className="flex items-center gap-6">
        <Link to="/" className="font-semibold text-3xl flex items-center gap-2 text-[#e60027]">
          <span className="text-gray-950">AgentPlane</span>
          <span className="text-xs bg-red-100 text-[#e60027] py-0.5 px-2 rounded-full">Beta</span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/agent-library">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-red-50 hover:text-[#e60027]")}>
                  HARC.Agents
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/deployment-hub">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-red-50 hover:text-[#e60027]")}>
                  Deployment Hub
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/agent-onboarding">
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "hover:bg-red-50 hover:text-[#e60027]")}>
                  Agent Onboarding
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-red-50 hover:text-[#e60027]">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[220px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-red-50 to-red-100 p-4 no-underline outline-none focus:shadow-md" href="#">
                        <div className="mt-4 mb-2 text-lg font-medium text-[#e60027]">
                          Documentation
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Learn how to use AgentPlane and deploy AI agents.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-[#e60027] focus:bg-accent focus:text-accent-foreground" href="#">
                        <div className="text-sm font-medium leading-none">FAQs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Frequently asked questions about the platform.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-[#e60027] focus:bg-accent focus:text-accent-foreground" href="#">
                        <div className="text-sm font-medium leading-none">Support</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Get help from our support team.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <BellIcon className="h-5 w-5" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs leading-none text-muted-foreground">
                  admin@agentplane.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>;
}