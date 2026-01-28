/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router";
import HomeLayout from "./layout/HomeLayout";
import MyHub from "./components/pages/MyHub";
import Homepage from "./components/pages/Homepage";

// Placeholder components for other routes
const AffiliatePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Affiliate Program</h1><p className="mt-2">Coming soon...</p></div>
const LeadsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">My Leads</h1><p className="mt-2">Coming soon...</p></div>
const AnalyticsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Analytics</h1><p className="mt-2">Coming soon...</p></div>
const ReferPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Refer & Earn</h1><p className="mt-2">Coming soon...</p></div>
const AccountPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Account</h1><p className="mt-2">Coming soon...</p></div>
const TutorialsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Video Tutorials</h1><p className="mt-2">Coming soon...</p></div>
const GettingStartedPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Getting Started</h1><p className="mt-2">Coming soon...</p></div>
const NewsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Latest News</h1><p className="mt-2">Coming soon...</p></div>
const NFCPage = () => <div className="p-6"><h1 className="text-2xl font-bold">NFC</h1><p className="mt-2">Coming soon...</p></div>
const ServicesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Services</h1><p className="mt-2">Coming soon...</p></div>
const BestPracticesPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Best Practices</h1><p className="mt-2">Coming soon...</p></div>
const VoiceAgentsPage = () => <div className="p-6"><h1 className="text-2xl font-bold">Voice Agents</h1><p className="mt-2">Coming soon...</p></div>
const EmailSignaturePage = () => <div className="p-6"><h1 className="text-2xl font-bold">Email Signature</h1><p className="mt-2">Coming soon...</p></div>

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        // Homepage (/) shows MyHub
        path: "",
        element: <Homepage />
      },
      {
        // Also accessible via /myHub
        path: "myHub",
        element: <MyHub />
      },
      {
        path: "affiliate",
        element: <AffiliatePage />
      },
      {
        path: "leads",
        element: <LeadsPage />
      },
      {
        path: "analytics",
        element: <AnalyticsPage />
      },
      {
        path: "refer",
        element: <ReferPage />
      },
      {
        path: "account",
        element: <AccountPage />
      },
      {
        path: "tutorials",
        element: <TutorialsPage />
      },
      {
        path: "getting-started",
        element: <GettingStartedPage />
      },
      {
        path: "news",
        element: <NewsPage />
      },
      {
        path: "nfc",
        element: <NFCPage />
      },
      {
        path: "services",
        element: <ServicesPage />
      },
      {
        path: "best-practices",
        element: <BestPracticesPage />
      },
      {
        path: "voice-agents",
        element: <VoiceAgentsPage />
      },
      {
        path: "email-signature",
        element: <EmailSignaturePage />
      }
    ]
  }
]);

export default router;