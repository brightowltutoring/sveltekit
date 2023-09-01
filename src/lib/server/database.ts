import { POSTGRES_SUPABASE_URL } from '$env/static/private';
import postgres from 'postgres';

export const sql = postgres(POSTGRES_SUPABASE_URL, {
	ssl: 'require'
});
