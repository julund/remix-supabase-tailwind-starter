# remix-supabase-tailwind-starter

My Remix starter project with Supabase and Tailwind CSS.

## Tech stack
React, Remix, Vercel, Tailwind and Supabase. See `package.json` for a full list of dependencies.

## Setup
create a `.env` file and insert your environment variables.

```properties
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

## Development
Run the command `npm run dev` to start the development server

### Development on Gitpod

If developing on [Gitpod](https://gitpod.io) you'll have to use a modified version of `LiveReload` in `@remix-run/react/dist/components.js` as shown below.

```js
// Use modified ' host' and 'socketPath' for LiveReload to work while developing on Gitpod
// let host = location.hostname;
// let socketPath = protocol + "//" + host + ":" + ${String(port)} + "/socket";
let host = location.hostname.slice(4);
let socketPath = protocol + "//" + ${ String(port)} + host + "/socket"; 
```