// 코드 펜스 밖의 헤딩(##/###) 중 본문 중간 지점과 가장 가까운 곳에서 마크다운을 둘로 나눈다.
// 인아티클 광고를 코드 블록/문단 중간에 끼우지 않고 섹션 경계에만 넣기 위한 용도.
export function splitMarkdownAtMidHeading(markdown: string): [string, string] | null {
    const lines = markdown.split('\n');
    if (lines.length < 30) return null;

    let inFence = false;
    const headingIndices: number[] = [];
    lines.forEach((line, i) => {
        if (line.trimStart().startsWith('```') || line.trimStart().startsWith('~~~')) {
            inFence = !inFence;
            return;
        }
        if (!inFence && /^#{2,3}\s/.test(line)) headingIndices.push(i);
    });
    if (headingIndices.length === 0) return null;

    const mid = lines.length / 2;
    let best = headingIndices[0];
    for (const idx of headingIndices) {
        if (Math.abs(idx - mid) < Math.abs(best - mid)) best = idx;
    }
    // 분할점이 본문 상단(첫 15%)이면 광고가 도입부에 붙어버리므로 넣지 않는다
    if (best < lines.length * 0.15) return null;

    return [lines.slice(0, best).join('\n'), lines.slice(best).join('\n')];
}
