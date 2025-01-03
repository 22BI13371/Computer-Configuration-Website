import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';
import { setCookie } from '@/app/lib/data';

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  const cat = url.searchParams.get('category');

  const params = new URLSearchParams();
  params.set('id', id);
  params.set('category', cat);
  setCookie(id, cat);

  console.log('search param debug: ', params);
  // console.log('id debug', id);
  // console.log('url debug', url);
  // console.log('cat debug', cat);
  revalidatePath(`/builder/`);
  redirect(`/builder?${params.toString()}`);
  // return Response.json({ message: 'hi this is builder route handler' });
}
