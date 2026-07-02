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
        <div className={`border-l-[3px] pl-5 py-5 pr-5 ${config.border}`} role="status">
            <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                Run Verdict
            </p>
            <p className={`text-2xl font-bold tracking-tight mt-1 ${config.border === 'border-green-500' ? 'text-green-500 dark:text-green-400' : config.border === 'border-yellow-500' ? 'text-yellow-500 dark:text-yellow-400' : 'text-red-500 dark:text-red-400'}`}>
                {config.label}
            </p>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{message}</p>

            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 flex justify-between items-center text-sm">
                <span className="text-zinc-400 dark:text-zinc-500 font-medium">Current Temp</span>
                <span className="font-bold text-zinc-800 dark:text-zinc-200">{temp}°C</span>
            </div>
        </div>
    );
};