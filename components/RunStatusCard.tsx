import React from 'react';

// Define the types for our props
interface RunStatusCardProps {
    status: 'Optimal' | 'Caution' | 'Avoid';
    message: string;
    temp: number;
}

/**
 * Configuration for the visual representation of each run status.
 * Using a Record ensures we handle all possible status types.
 */
const statusConfig: Record<RunStatusCardProps['status'], { color: string; label: string }> = {
    Optimal: { color: 'bg-green-100 border-green-500 text-green-800', label: 'Go for it!' },
    Caution: { color: 'bg-yellow-100 border-yellow-500 text-yellow-800', label: 'Proceed with Caution' },
    Avoid: { color: 'bg-red-100 border-red-500 text-red-800', label: 'Maybe Stay In' },
};

export const RunStatusCard = ({ status, message, temp }: RunStatusCardProps) => {
    const config = statusConfig[status];

    return (
        <div className={`p-6 border-l-4 rounded-lg shadow-sm ${config.color}`} role="status">
            <h2 className="text-sm font-bold uppercase tracking-wider opacity-75">
                Run Verdict
            </h2>
            <p className="text-2xl font-extrabold mt-1">{config.label}</p>
            <p className="mt-2 text-md">{message}</p>

            <div className="mt-4 pt-4 border-t border-black/10 flex justify-between items-center">
                <span className="font-medium">Current Temp</span>
                <span className="text-xl font-bold">{temp}°C</span>
            </div>
        </div>
    );
};