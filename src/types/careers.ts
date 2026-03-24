export type JobType = 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship' | 'Freelance'

export interface JobListing {
  id: string
  job_role: string
  job_type: JobType
  engagement_time: string
  short_description: string // plain text preview
  description: string // HTML string
  cta_label: string
  cta_url: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export type JobListingInsert = Omit<JobListing, 'id' | 'created_at' | 'updated_at'>
