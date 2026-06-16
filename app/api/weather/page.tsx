import { RunStatusCard } from '../../../components/RunStatusCard';

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-2xl mx-auto space-y-6">
                <header>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Runner Dashboard</h1>
                    <p className="text-slate-500">Quick stats and conditions for your next session.</p>
                </header>

                <RunStatusCard
                    status="Optimal"
                    message="Conditions are perfect for a run right now."
                    temp={22}
                />
            </div>
        </main>
    );
}