import React from 'react';

interface RunStatusCardProps {
    status: 'Optimal' | 'Caution' | 'Avoid';
    message: string;
    temp: number;
}

const statusConfig: Record<RunStatusCardProps['status'], { border: string; label: string }> = {
    Optimal: { border: 'border-green-500', label: 'Go for it!' },
    Caution: { border: 'border-yellow-500', label: 'Proceed with Caution' },
    Avoid: { border: 'border-red-500', label: 'Maybe Stay In' },
};

export const RunStatusCard = ({ status, message, temp }: RunStatusCardProps) => {
    const config = statusConfig[status];

    return (
        <div className="border-l-[3px] pl-5 py-5 pr-5" role="status">
            <p className="text-xs font-semibold text-black/40 uppercase tracking-widest">
                Run Verdict
            </p>
            <p className={`text-2xl font-bold tracking-tight mt-1 ${config.border === 'border-green-500' ? 'text-green-600' : config.border === 'border-yellow-500' ? 'text-yellow-600' : 'text-red-600'}`}>
                {config.label}
            </p>
            <p className="mt-2 text-sm text-black/50">{message}</p>

            <div className="mt-4 pt-4 border-t border-black/10 flex justify-between items-center text-sm">
                <span className="text-black/40 font-medium">Current Temp</span>
                <span className="font-bold text-black">{temp}°C</span>
            </div>
        </div>
    );
};