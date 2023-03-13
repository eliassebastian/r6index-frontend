'use client';

import dynamic from 'next/dynamic';

const ToastWrapper = dynamic(() => import('@/components/Toast/ToastWrapper'), { ssr: false })

const Toast = () => {
    return <ToastWrapper/>
}

export default Toast;