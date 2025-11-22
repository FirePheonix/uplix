'use client'

import { useState } from 'react'
import DashboardSidebar from '@/components/dashboard/sidebar'
import { Instagram, Calendar, BarChart3, ImagePlus, Plus } from 'lucide-react'

export default function InstagramPage() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="border-b border-[#1a1a1a] bg-[#0a0a0a] px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Instagram className="w-8 h-8 text-pink-500" />
              <h1 className="text-2xl font-bold">Instagram Management</h1>
            </div>
            {!isConnected && (
              <button 
                onClick={() => setIsConnected(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Connect Instagram
              </button>
            )}
            {isConnected && (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-400">Connected</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {!isConnected ? (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
              <Instagram className="w-24 h-24 text-pink-500 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Connect Your Instagram Account</h2>
              <p className="text-gray-400 text-center max-w-md mb-8">
                Connect your Instagram business account to schedule posts, manage content, and track analytics all in one place.
              </p>
              <button 
                onClick={() => setIsConnected(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Connect Instagram Account
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard title="Total Posts" value="127" icon={ImagePlus} />
                <StatCard title="Followers" value="12.5K" icon={BarChart3} />
                <StatCard title="Engagement" value="4.8%" icon={BarChart3} />
                <StatCard title="Scheduled" value="8" icon={Calendar} />
              </div>

              {/* Schedule Posts Section */}
              <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Schedule Posts</h2>
                  <button className="px-4 py-2 bg-pink-500 rounded-lg font-medium hover:bg-pink-600 transition-colors flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    New Post
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ScheduledPost 
                    image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
                    caption="New collection dropping soon! 🔥"
                    scheduledFor="Today at 6:00 PM"
                  />
                  <ScheduledPost 
                    image="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=400&h=400&fit=crop"
                    caption="Behind the scenes magic ✨"
                    scheduledFor="Tomorrow at 3:00 PM"
                  />
                  <ScheduledPost 
                    image="https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=400&h=400&fit=crop"
                    caption="Style inspiration for the weekend"
                    scheduledFor="Dec 25 at 12:00 PM"
                  />
                </div>
              </div>

              {/* Instagram Management */}
              <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6">Content Management</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ManagementCard title="Stories" count="24" />
                  <ManagementCard title="Reels" count="12" />
                  <ManagementCard title="Posts" count="127" />
                  <ManagementCard title="Drafts" count="5" />
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
                
                <div className="space-y-4">
                  <ActivityItem 
                    action="Posted"
                    content="Fashion photoshoot preview"
                    time="2 hours ago"
                    engagement="248 likes, 32 comments"
                  />
                  <ActivityItem 
                    action="Story posted"
                    content="Behind the scenes"
                    time="5 hours ago"
                    engagement="1.2K views"
                  />
                  <ActivityItem 
                    action="Reel published"
                    content="Quick style tips"
                    time="1 day ago"
                    engagement="5.4K views, 342 likes"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon: Icon }: { title: string; value: string; icon: any }) {
  return (
    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">{title}</span>
        <Icon className="w-5 h-5 text-pink-500" />
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

function ScheduledPost({ image, caption, scheduledFor }: { image: string; caption: string; scheduledFor: string }) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#222] transition-colors">
      <img src={image} alt={caption} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm mb-2 line-clamp-2">{caption}</p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar className="w-3 h-3" />
          <span>{scheduledFor}</span>
        </div>
      </div>
    </div>
  )
}

function ManagementCard({ title, count }: { title: string; count: string }) {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-4 hover:bg-[#222] transition-colors cursor-pointer">
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  )
}

function ActivityItem({ action, content, time, engagement }: { action: string; content: string; time: string; engagement: string }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-[#1a1a1a] rounded-lg">
      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
      <div className="flex-1">
        <p className="font-medium">
          <span className="text-pink-500">{action}</span> · {content}
        </p>
        <p className="text-sm text-gray-400 mt-1">{engagement}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  )
}
