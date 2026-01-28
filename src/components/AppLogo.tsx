import { useSidebar } from "@/components/ui/sidebar"

export function AppLogo() {
  const { state } = useSidebar()
  console.log("Sidebar state:", state)
  return (
    <div className="flex items-center justify-center gap-3 px-3 py-4">
      {state === "collapsed" ? (
        // Show only "E" when sidebar is collapsed
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">E</span>
        </div>
      ) : (
        // Show full "ELAVIX" logo when sidebar is expanded
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-blue-600">ELA</span>
          <span className="text-2xl font-bold text-orange-500">V</span>
          <span className="text-2xl font-bold text-blue-600">IX</span>
        </div>
      )}
    </div>
  )
}