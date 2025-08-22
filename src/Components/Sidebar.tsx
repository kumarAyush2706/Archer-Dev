import React, { useState } from 'react'

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
  badge?: number
  subItems?: string[]
  description?: string
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [expandedItems, setExpandedItems] = useState<string[]>(['home'])

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.5l9-7 9 7V20a2 2 0 01-2 2h-4a2 2 0 01-2-2v-5H9v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-9.5z" />
        </svg>
      )
    },
    {
      id: 'about',
      label: 'About',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 6a9 9 0 100 18 9 9 0 000-18z" />
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'Contact us',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8m-8 4h5m-9 3V7a2 2 0 012-2h12a2 2 0 012 2v10l-4-3H6l-4 3z" />
        </svg>
      )
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.142c.969 0 1.371 1.24.588 1.81l-3.352 2.435a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.538 1.118l-3.352-2.435a1 1 0 00-1.176 0l-3.352 2.435c-.783.57-1.838-.197-1.538-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.985 9.373c-.783-.57-.38-1.81.588-1.81h4.142a1 1 0 00.95-.69l1.286-3.946z" />
        </svg>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId)
    if (tabId === 'home') {
      setExpandedItems(['home'])
    }
  }

  return (
    <div
      className={`bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-900 shadow-2xl border-r border-neutral-800 transition-all duration-300 h-screen flex flex-col ${
        isCollapsed ? 'w-24' : 'w-[22rem]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-neutral-800/80 bg-neutral-900/70 backdrop-blur-sm">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center shadow-lg ring-1 ring-neutral-700">
              <svg className="w-6 h-6 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold text-neutral-100">Admin</span>
              <p className="text-xs text-neutral-400 font-medium">Super Administrator</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-xl hover:bg-neutral-800 transition-all duration-200 group text-neutral-300 hover:text-neutral-100"
          title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          <svg className={`w-5 h-5 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id} className="mb-1">
            <button
              onClick={() => {
                if (item.subItems) {
                  toggleExpanded(item.id)
                } else {
                  handleTabClick(item.id)
                }
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-neutral-800 to-neutral-700 text-neutral-50 shadow-lg'
                  : 'text-neutral-200 hover:bg-neutral-900 hover:ring-1 hover:ring-neutral-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-neutral-800 text-neutral-100 shadow-lg'
                      : 'bg-neutral-900 text-neutral-400 group-hover:text-neutral-100 group-hover:bg-neutral-800'
                  }`}
                >
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <div className="text-left">
                    <span className="text-sm font-semibold block text-neutral-100">{item.label}</span>
                    {item.description && (
                      <span className="text-xs text-neutral-400 font-medium">{item.description}</span>
                    )}
                  </div>
                )}
              </div>
              {!isCollapsed && (
                <div className="flex items-center space-x-2">
                  {item.badge && (
                    <span
                      className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-neutral-700 text-neutral-50 shadow-lg'
                          : 'bg-neutral-800 text-neutral-200 ring-1 ring-neutral-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {item.subItems && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
              )}
            </button>

            {/* Sub-items */}
            {!isCollapsed && item.subItems && expandedItems.includes(item.id) && (
              <div className="ml-8 mt-2 space-y-1">
                {item.subItems.map((subItem, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2.5 text-sm text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800 rounded-lg transition-all duration-150 font-medium"
                  >
                    {subItem}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-neutral-800 bg-neutral-900/70 backdrop-blur-sm">
        {!isCollapsed ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse ring-2 ring-emerald-500/20"></div>
                <span className="text-xs font-semibold text-neutral-300">System Online</span>
              </div>
              <span className="text-xs text-emerald-400 font-bold">99.9%</span>
            </div>
            <button className="w-full text-xs text-neutral-300 hover:text-neutral-100 hover:bg-neutral-800 py-2 px-3 rounded-lg transition-all duration-150 font-medium ring-1 ring-inset ring-neutral-800 hover:ring-neutral-700">
              Need Help?
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse ring-2 ring-emerald-500/20"></div>
            <button className="text-xs text-neutral-300 hover:text-neutral-100 p-2 rounded-lg hover:bg-neutral-800 transition-all duration-150 ring-1 ring-inset ring-neutral-800 hover:ring-neutral-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 4 3 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar


