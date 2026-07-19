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
        <div style={{ borderLeft: '3px solid ' + config.borderColor, padding: '14px 14px 14px 14px' }} role="status">
            <p className="mono-caption-muted" style={{ marginBottom: '2px' }}>
                Run Verdict
            </p>
            <p className="text-xl sm:text-2xl font-bold tracking-tight mt-1" style={{ color: config.accent }}>
                {config.label}
            </p>
            <p className="body-text-muted mt-2">{message}</p>

            <div className="mt-3 pt-3 flex justify-between items-center" style={{ borderTop: '1px solid var(--color-border)', fontSize: '15px' }}>
                <span className="font-medium" style={{ color: 'var(--color-text-light)' }}>Current Temp</span>
                <span className="font-bold" style={{ color: 'var(--color-text)' }}>{temp}°C</span>
            </div>
        </div>
    );
};