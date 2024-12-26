import Link from 'next/link'
import { Home, Users, Activity, Bell } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 text-white   h-full border-r">
      <div className="flex items-center justify-center h-20 border-b">
        <Link href='/'>
        <span className="text-3xl  font-semibold">Ui Forest</span>
        </Link>
       
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 py-4 ">
          <li>
            <Link href="/dashboard" className="flex items-center px-4 py-5  border-b">
              <Home className="mr-3 h-5 w-5" />
              Docs
            </Link>
          </li>

          <li>
            <Link href="/dashboard/profile-builder" className="flex items-center px-4 py-5 border-b">
              <Users className="mr-3 h-5 w-5" />
                  Installation
            </Link>
          </li>
          <li>
            <Link href="/dashboard/integrations" className="flex items-center px-4 py-5 border-b">
              <Users className="mr-3 h-5 w-5" />
              Integrations
            </Link>
          </li>
          <li>
            <Link href="/dashboard/template" className="flex items-center px-4 py-5 ">
              <Users className="mr-3 h-5 w-5" />
              Button
            </Link>
          </li>
          <li>
            <Link href="/dashboard/activity" className="flex items-center px-4 py-5 ">
              <Activity className="mr-3 h-5 w-5" />
                  Card
            </Link>
          </li>
          <li>
            <Link href="/dashboard/notifications" className="flex items-center px-4 py-5 ">
              <Bell className="mr-3 h-5 w-5" />
              Blog
            </Link>
          </li>
          <li>
            <Link href="/dashboard/notifications" className="flex items-center px-4 py-5 ">
              <Bell className="mr-3 h-5 w-5" />
              Form
            </Link>
          </li>
          <li>
            <Link href="/dashboard/notifications" className="flex items-center px-4 py-5 ">
              <Bell className="mr-3 h-5 w-5" />
              Modal
            </Link>
          </li>
          <li>
            <Link href="/dashboard/notifications" className="flex items-center px-4 py-5 ">
              <Bell className="mr-3 h-5 w-5" />
              Table
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

