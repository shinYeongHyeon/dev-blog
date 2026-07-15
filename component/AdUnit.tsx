'use client'

import { useEffect } from 'react'

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

interface Props {
    slot: string;
    format?: string;
    layout?: string;
    fullWidthResponsive?: boolean;
}

export default function AdUnit({ slot, format = 'auto', layout, fullWidthResponsive }: Props) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            // 광고 차단 등으로 adsbygoogle 로더가 없는 환경에서는 무시
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block', textAlign: layout === 'in-article' ? 'center' : undefined }}
            data-ad-client="ca-pub-7058561196110489"
            data-ad-slot={slot}
            data-ad-format={format}
            data-ad-layout={layout}
            data-full-width-responsive={fullWidthResponsive ? 'true' : undefined}
        />
    );
}
