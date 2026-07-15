const KST_OFFSET_HOURS = 9;

// '2021년 08월 14일 22시 47분' 형식(KST)을 Date로 변환
export function parseKoreanDatetime(datetime: string): Date | null {
    const m = datetime.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일(?:\s*(\d{1,2})시\s*(\d{1,2})분)?/);
    if (!m) {
        const fallback = new Date(datetime);
        return isNaN(fallback.getTime()) ? null : fallback;
    }
    const [, year, month, day, hour = '0', minute = '0'] = m;
    return new Date(Date.UTC(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hour) - KST_OFFSET_HOURS,
        Number(minute),
    ));
}
