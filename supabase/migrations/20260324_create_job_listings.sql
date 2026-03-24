-- Create job_listings table
CREATE TABLE IF NOT EXISTS public.job_listings (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_role     text NOT NULL,
  job_type     text NOT NULL CHECK (job_type IN ('Full-Time','Part-Time','Contract','Internship','Freelance')),
  engagement_time text NOT NULL,
  short_description text NOT NULL DEFAULT '',
  description  text NOT NULL,
  cta_label    text NOT NULL,
  cta_url      text NOT NULL,
  is_active    boolean DEFAULT true,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- Auto-update updated_at on row update
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_job_listings_updated_at ON public.job_listings;
CREATE TRIGGER trg_job_listings_updated_at
  BEFORE UPDATE ON public.job_listings
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- Enable Row Level Security
ALTER TABLE public.job_listings ENABLE ROW LEVEL SECURITY;

-- Public read for active listings
CREATE POLICY "Public can read active job listings"
  ON public.job_listings
  FOR SELECT
  USING (is_active = true);

-- Authenticated users full CRUD
CREATE POLICY "Authenticated users full access"
  ON public.job_listings
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
