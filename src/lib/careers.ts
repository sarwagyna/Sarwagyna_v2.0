import { supabase } from './supabaseClient'
import type { JobListing, JobListingInsert } from '@/types/careers'

export async function getActiveJobListings(): Promise<JobListing[]> {
  const { data, error } = await supabase
    .from('job_listings')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as JobListing[]
}

export async function getAllJobListings(): Promise<JobListing[]> {
  const { data, error } = await supabase
    .from('job_listings')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as JobListing[]
}

export async function upsertJobListing(
  payload: JobListingInsert & { id?: string }
): Promise<JobListing> {
  const { data, error } = await supabase
    .from('job_listings')
    .upsert(payload)
    .select()
    .single()

  if (error) throw error
  return data as JobListing
}

export async function deleteJobListing(id: string): Promise<void> {
  const { error } = await supabase
    .from('job_listings')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function toggleJobActive(
  id: string,
  is_active: boolean
): Promise<void> {
  const { error } = await supabase
    .from('job_listings')
    .update({ is_active })
    .eq('id', id)

  if (error) throw error
}
