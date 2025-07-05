import { createClient } from '@supabase/supabase-js';

const URL = 'https://enijxqzmvchweaeojhsn.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuaWp4cXptdmNod2VhZW9qaHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjI0MjgsImV4cCI6MjA2NTU5ODQyOH0.-vZ2kRVVN527ojn_A2f0zUQcsBhnDdFuwvlVryPYsX0';

export const supabase = createClient(URL, API_KEY);
