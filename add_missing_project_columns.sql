-- Run this in your Supabase SQL Editor.
-- Adds ALL potentially missing columns across ALL client management tables.

-- ═══ CLIENTS ═══
ALTER TABLE public.clients
ADD COLUMN IF NOT EXISTS company text,
ADD COLUMN IF NOT EXISTS phone text,
ADD COLUMN IF NOT EXISTS address text,
ADD COLUMN IF NOT EXISTS tags text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS status text DEFAULT 'prospect',
ADD COLUMN IF NOT EXISTS account_manager text,
ADD COLUMN IF NOT EXISTS notes text,
ADD COLUMN IF NOT EXISTS avatar_url text;

-- ═══ PROJECTS ═══
ALTER TABLE public.projects
ADD COLUMN IF NOT EXISTS description text,
ADD COLUMN IF NOT EXISTS source_url text,
ADD COLUMN IF NOT EXISTS repo_url text,
ADD COLUMN IF NOT EXISTS tags text[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS start_date date,
ADD COLUMN IF NOT EXISTS end_date date,
ADD COLUMN IF NOT EXISTS budget numeric,
ADD COLUMN IF NOT EXISTS currency text DEFAULT 'INR';

-- ═══ INVOICES ═══
ALTER TABLE public.invoices
ADD COLUMN IF NOT EXISTS project_id uuid REFERENCES public.projects(id),
ADD COLUMN IF NOT EXISTS invoice_number text,
ADD COLUMN IF NOT EXISTS issue_date date,
ADD COLUMN IF NOT EXISTS due_date date,
ADD COLUMN IF NOT EXISTS amount numeric DEFAULT 0,
ADD COLUMN IF NOT EXISTS currency text DEFAULT 'INR',
ADD COLUMN IF NOT EXISTS status text DEFAULT 'draft',
ADD COLUMN IF NOT EXISTS notes text,
ADD COLUMN IF NOT EXISTS file_url text;

-- ═══ PAYMENTS ═══
ALTER TABLE public.payments
ADD COLUMN IF NOT EXISTS invoice_id uuid REFERENCES public.invoices(id),
ADD COLUMN IF NOT EXISTS amount numeric DEFAULT 0,
ADD COLUMN IF NOT EXISTS currency text DEFAULT 'INR',
ADD COLUMN IF NOT EXISTS payment_date date,
ADD COLUMN IF NOT EXISTS method text DEFAULT 'bank_transfer',
ADD COLUMN IF NOT EXISTS reference text,
ADD COLUMN IF NOT EXISTS notes text;

-- After running: Dashboard -> Settings -> API -> Reload schema cache
