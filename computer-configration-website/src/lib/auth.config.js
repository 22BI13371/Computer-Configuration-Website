import { query } from '@vercel/postgres';

export const authConfig = {
    providers: [
        {
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const { username, password } = credentials;

                const { rows } = await query('SELECT * FROM users WHERE username = $1', [username]);
                const user = rows[0];

                if (user && user.password === password) {
                    return { id: user.id, name: user.name, role: user.role };
                }
                return null;
            },
        },
    ],

    callbacks: {
        async session({ session, token }) {
            session.user.role = token.role;
            return session;
        },

        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
    },
};
