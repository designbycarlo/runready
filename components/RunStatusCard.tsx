import React from 'react';

interface RunStatusCardProps {
    status: 'Optimal' | 'Caution' | 'Avoid';
    message: string;
    temp: number;
}

const statusConfig: Record<RunStatusCardProps['status'], { borderColor: string; label: string; accent: string }> = {
    Optimal: { borderColor: 'var(--color-optimal)', label: 'Go for it!', accent: 'var(--color-optimal)' },
    Caution: { borderColor: 'var(--color-caution)', label: 'Proceed with Caution', accent: 'var(--color-caution)' },
    Avoid: { borderColor: 'var(--color-avoid)', label: 'Maybe Stay In', accent: 'var(--color-avoid)' },
};

export const RunStatusCard = ({ status, message, temp }: RunStatusCardProps) => {
    const config = statusConfig[status];

    return (
        <div style={{ borderLeft: '3px solid ' + config.borderColor, padding: '20px 20px 20px 20px' }} role="status">
            <p className="mono-caption-muted" style={{ marginBottom: '4px' }}>
                Run Verdict
            </p>
            <p className="text-2xl font-bold tracking-tight mt-1" style={{ color: config.accent }}>
                {config.label}
            </p>
            <p className="mt-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>{message}</p>

            <div className="mt-4 pt-4 flex justify-between items-center text-sm" style={{ borderTop: '1px solid var(--color-border)' }}>
                <span className="font-medium" style={{ color: 'var(--color-text-light)' }}>Current Temp</span>
                <span className="font-bold" style={{ color: 'var(--color-text)' }}>{temp}°C</span>
            </div>
        </div>
    );
};