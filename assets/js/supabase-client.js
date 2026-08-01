// assets/js/supabase-client.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://zpbhblknzunyiejanigf.supabase.co/rest/v1';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwYmhibGtuenVueWllamFuaWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2MTE0OTcsImV4cCI6MjEwMTE4NzQ5N30.jDGhtbi9Uxl60J0fuHzEmmnFQAIw24ML3O8ku5Uep58';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
