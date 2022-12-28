import { createClient } from "@supabase/supabase-js";
import invariant from "tiny-invariant";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

invariant(supabaseUrl,"Environment variable 'supabaseUrl' must be set.");
invariant(supabaseAnonKey,"Environment variable 'supabaseAnonKey' must be set.");

export const supabase = createClient(supabaseUrl, supabaseAnonKey);