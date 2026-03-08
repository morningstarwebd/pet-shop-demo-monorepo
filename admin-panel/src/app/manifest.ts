import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Pet Shop Admin Control Center',
        short_name: 'Admin Panel',
        description: 'A premium admin dashboard for managing all demo pet shops.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a', /* slate-900 */
        theme_color: '#4f46e5', /* indigo-600 */
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/apple-icon.png',
                sizes: '180x180',
                type: 'image/png'
            }
        ],
    }
}
