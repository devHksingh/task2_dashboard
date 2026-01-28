import { type LucideIcon } from "lucide-react"
import { Link } from "react-router"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="px-3 text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-2">
        APPS
      </SidebarGroupLabel>
      <SidebarMenu className="gap-0.5">
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton 
              asChild 
              tooltip={item.title}
              isActive={item.isActive}
              className="h-10 w-full px-3 py-2.5"
            >
              <Link to={item.url} className="flex items-center gap-3 w-full">
                {item.icon && <item.icon className=" w-8 h-8 text-sidebar-primary text-2xl shrink-0" />}
                <span className="text-xl font-medium">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}