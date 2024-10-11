import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = 'https://pwhnxtwkbpjfrmlyquzy.supabase.co'
export const AnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3aG54dHdrYnBqZnJtbHlxdXp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyNDY1NTMsImV4cCI6MjA0MzgyMjU1M30.THMS8iRI323-InGD1aS7qnAK3D2fOH-Q2-VwwqAgntw'

export const supabase = createClient(supabaseUrl, AnonKey)