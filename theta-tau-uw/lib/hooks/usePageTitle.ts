import { useRouter } from 'next/router'

export default function usePageTitle() {
    const router = useRouter()
    if (router.pathname === '/') return 'Theta Tau UW Home'
    return router.pathname.split('/')[1].slice(0, 1).toUpperCase() + router.pathname.slice(2)
}