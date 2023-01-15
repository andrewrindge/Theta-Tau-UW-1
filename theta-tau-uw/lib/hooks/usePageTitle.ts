import { useRouter } from 'next/router'

export default function usePageTitle() {
    const router = useRouter()
    if (router.pathname === '/') return 'Theta Tau UW Home'
    return router.pathname
}