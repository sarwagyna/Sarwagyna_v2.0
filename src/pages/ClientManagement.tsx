// pages/ClientManagement.tsx
import { useState } from 'react'
import { Users, FolderKanban, FileText, CreditCard, Search, X, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ClientsTab from '../components/clients/ClientsTab'
import ProjectsTab from '../components/clients/ProjectsTab'
import InvoicesTab from '../components/clients/InvoicesTab'
import PaymentsTab from '../components/clients/PaymentsTab'

type Tab = 'clients' | 'projects' | 'invoices' | 'payments'

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'clients',  label: 'Clients',  icon: <Users size={15} /> },
  { id: 'projects', label: 'Projects', icon: <FolderKanban size={15} /> },
  { id: 'invoices', label: 'Invoices', icon: <FileText size={15} /> },
  { id: 'payments', label: 'Payments', icon: <CreditCard size={15} /> },
]

export default function ClientManagement() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<Tab>('clients')
  const [search, setSearch] = useState('')
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  return (
    <div className="min-h-screen bg-bg text-text font-sans pt-20">
      {/* Header */}
      <div className="border-b border-border-subtle px-8 py-6 bg-surface">
        <div className="max-w-[1280px] mx-auto">
          {/* Back + Title row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/admin')}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors"
              >
                <ArrowLeft size={14} />
                Admin
              </button>
              <div className="w-px h-4 bg-border-subtle" />
              <div>
                <div className="section-label mb-1">SARWAGYNA</div>
                <h1 className="text-2xl font-display font-bold text-text tracking-tight">Client Management</h1>
                <p className="text-sm text-text-secondary mt-0.5">Manage your clients, projects, invoices &amp; payments</p>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="bg-white border border-border-subtle rounded-xl pl-9 pr-4 py-2 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-56 transition-colors"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text">
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-[100px] text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-text hover:bg-button-outline'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1280px] mx-auto p-8">
        {activeTab === 'clients' && (
          <ClientsTab
            key={refreshKey}
            search={search}
            selectedClientId={selectedClientId}
            onSelectClient={setSelectedClientId}
            onRefresh={() => setRefreshKey(k => k + 1)}
          />
        )}
        {activeTab === 'projects' && (
          <ProjectsTab key={`p-${refreshKey}`} search={search} clientId={selectedClientId} />
        )}
        {activeTab === 'invoices' && (
          <InvoicesTab key={`i-${refreshKey}`} search={search} clientId={selectedClientId} />
        )}
        {activeTab === 'payments' && (
          <PaymentsTab key={`pay-${refreshKey}`} search={search} clientId={selectedClientId} />
        )}
      </div>
    </div>
  )
}
