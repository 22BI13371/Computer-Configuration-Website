'use server';

import { redirect } from 'next/dist/server/api-utils';
import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';

export async function authenticate(prevState, formData) {
  console.log('formData', formData);
  try {
    const response = await signIn('credentials', {
      email: formData.get('username'),
      password: formData.get('password'),
    });

    return response;
  } catch (error) {
    // console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signOut() {
  // 'use server';
  await signOut();
}
