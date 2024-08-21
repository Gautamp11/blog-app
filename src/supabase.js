import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://tndivazxfoyynksfvxic.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuZGl2YXp4Zm95eW5rc2Z2eGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNTAwMTksImV4cCI6MjAzOTcyNjAxOX0.KYSsf1K_AJcz06lVYQMoVhDJEUOeHiFBC_QC-X_2ADs";

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
