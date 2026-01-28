import * as React from "react"
import { useLocation } from "react-router"
import {
  Globe,
  Star,
  Users,
  PieChart,
  Smartphone,
  CreditCard,
  PlayCircle,
  BookOpen,
  Newspaper,
  Briefcase,
  Target,
  Mic,
  Mail,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { AppLogo } from "@/components/AppLogo"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  
  // ELAVIX Navigation Data with dynamic active state
  const navItems = [
    {
      title: "My Hub",
      url: "/myHub",
      icon: Globe,
    },
    {
      title: "Affiliate Program",
      url: "/affiliate",
      icon: Star,
    },
    {
      title: "My Leads",
      url: "/leads",
      icon: Users,
    },
    {
      title: "Analytics",
      url: "/analytics",
      icon: PieChart,
    },
    {
      title: "Refer & Earn",
      url: "/refer",
      icon: Smartphone,
    },
    {
      title: "Account",
      url: "/account",
      icon: CreditCard,
    },
    {
      title: "Video Tutorials",
      url: "/tutorials",
      icon: PlayCircle,
    },
    {
      title: "Getting Started",
      url: "/getting-started",
      icon: BookOpen,
    },
    {
      title: "Latest News",
      url: "/news",
      icon: Newspaper,
    },
    {
      title: "NFC",
      url: "/nfc",
      icon: Smartphone,
    },
    {
      title: "Services",
      url: "/services",
      icon: Briefcase,
    },
    {
      title: "Best Practices",
      url: "/best-practices",
      icon: Target,
    },
    {
      title: "Voice Agents",
      url: "/voice-agents",
      icon: Mic,
    },
    {
      title: "Email Signature",
      url: "/email-signature",
      icon: Mail,
    },
  ]

  // Set active state based on current path
  // My Hub is active when on "/" or "/myHub"
  const navItemsWithActive = navItems.map(item => {
    if (item.url === '/myHub') {
      return {
        ...item,
        isActive: location.pathname === '/' || location.pathname === '/myHub'
      }
    }
    return {
      ...item,
      isActive: location.pathname === item.url
    }
  })

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItemsWithActive} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}