import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"
import { Crown, RefreshCcwIcon, Settings, User2Icon, MoreHorizontal } from "lucide-react"
import { Outlet, useLocation } from "react-router"

const HomeLayout = () => {
  const location = useLocation()
  
  // Function to generate breadcrumbs from pathname
  const generateBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(Boolean)
    
    if (paths.length === 0) {
      return null
    }

    return paths.map((path, index) => {
      const href = '/' + paths.slice(0, index + 1).join('/')
      const isLast = index === paths.length - 1
      
      // Capitalize first letter
      const label = path.charAt(0).toUpperCase() + path.slice(1)
      
      return (
        <div key={href} className="flex items-center gap-2">
          <BreadcrumbItem>
            {isLast ? (
              <BreadcrumbPage>{label}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
            )}
          </BreadcrumbItem>
          {!isLast && <BreadcrumbSeparator />}
        </div>
      )
    })
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b border-sidebar-border">
          {/* Left Section - Sidebar Trigger + Breadcrumb */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <SidebarTrigger className="-ml-1 shrink-0" />
            <Separator
              orientation="vertical"
              className="mr-2 h-4 hidden sm:block"
            />
            {location.pathname !== '/' && (
              <Breadcrumb className="hidden md:block">
                <BreadcrumbList>
                  {generateBreadcrumbs()}
                </BreadcrumbList>
              </Breadcrumb>
            )}
          </div>

          {/* Right Section - Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop: Show all buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <button className="px-3 py-1.5 hover:bg-sidebar-primary/90 rounded-md flex items-center gap-1.5 bg-sidebar-primary text-sidebar-primary-foreground text-sm font-medium transition-colors">
                Pro 
                <Crown className="h-4 w-4 fill-yellow-400 text-yellow-400"/>
              </button>
              <button className="px-3 py-1.5 hover:bg-sidebar-primary/90 rounded-md flex items-center gap-1.5 bg-sidebar-primary text-sidebar-primary-foreground text-sm font-medium transition-colors">
                Message Waiting
              </button>
              <button className="p-2 hover:bg-sidebar-primary/90 rounded-md bg-sidebar-primary text-sidebar-primary-foreground transition-colors">
                <RefreshCcwIcon className="h-5 w-5"/>
              </button>
              <button className="p-2 hover:bg-sidebar-primary/90 rounded-md bg-sidebar-primary text-sidebar-primary-foreground transition-colors">
                <Settings className="h-5 w-5"/>
              </button>
              <Separator orientation="vertical" className="h-6 mx-1" />
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-full hover:bg-sidebar-accent transition-colors">
                  <User2Icon className="h-6 w-6 text-sidebar-foreground"/>
                </button>
                <span className="text-sm font-medium text-sidebar-foreground">User Name</span>
              </div>
            </div>

            {/* Tablet: Show essential buttons + user */}
            <div className="hidden md:flex lg:hidden items-center gap-2">
              <button className="px-2.5 py-1.5 hover:bg-sidebar-primary/90 rounded-md flex items-center gap-1 bg-sidebar-primary text-sidebar-primary-foreground text-xs font-medium transition-colors">
                Pro 
                <Crown className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"/>
              </button>
              <button className="p-2 hover:bg-sidebar-primary/90 rounded-md bg-sidebar-primary text-sidebar-primary-foreground transition-colors">
                <RefreshCcwIcon className="h-4 w-4"/>
              </button>
              <button className="p-2 hover:bg-sidebar-primary/90 rounded-md bg-sidebar-primary text-sidebar-primary-foreground transition-colors">
                <Settings className="h-4 w-4"/>
              </button>
              <button className="p-1.5 rounded-full hover:bg-sidebar-accent transition-colors">
                <User2Icon className="h-5 w-5 text-sidebar-foreground"/>
              </button>
            </div>

            {/* Mobile: Show only essential icons */}
            <div className="flex md:hidden items-center gap-2">
              <button className="p-2 hover:bg-sidebar-primary/90 rounded-md bg-sidebar-primary text-sidebar-primary-foreground transition-colors">
                <RefreshCcwIcon className="h-4 w-4"/>
              </button>
              <button className="p-2 hover:bg-sidebar-primary/90 rounded-md bg-sidebar-primary text-sidebar-primary-foreground transition-colors">
                <MoreHorizontal className="h-4 w-4"/>
              </button>
              <button className="p-1.5 rounded-full hover:bg-sidebar-accent transition-colors">
                <User2Icon className="h-5 w-5 text-sidebar-foreground"/>
              </button>
            </div>
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}

export default HomeLayout