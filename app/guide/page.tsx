import { Heading } from '@/components/ui/heading';
import { Label } from '@/components/ui/label';
import { Divider } from '@/components/ui/divider';

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
        <header className="mb-20">
          <Heading level="xl">Design System</Heading>
          <p className="text-zinc-600 dark:text-zinc-400 text-base mt-4">
            A comprehensive guide to the visual design language of designbycarlo.github.io.
          </p>
        </header>

        {/* Typography Section */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-2">
            <Label>Typography</Label>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="mono-caption-muted mb-3">Heading XL (4xl / 5xl)</p>
              <h1 className="heading-xl text-zinc-900 dark:text-white">Building refined digital interfaces</h1>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Heading LG (xl)</p>
              <h2 className="heading-lg text-zinc-900 dark:text-white">Selected Experience</h2>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Heading MD (base)</p>
              <h3 className="heading-md text-zinc-900 dark:text-white">Senior UI Designer</h3>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Body Text</p>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                This is standard body text used for paragraphs and content. 
                It maintains optimal readability with comfortable line height.
              </p>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Secondary Text</p>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                This is secondary text used for descriptions, metadata, and less important information.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Colors Section */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-2">
            <Label>Colors</Label>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="mono-caption-muted mb-3">Backgrounds</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="h-16 bg-zinc-50 border border-zinc-200 dark:border-zinc-800 rounded-xl"></div>
                  <p className="mono-caption text-zinc-900 dark:text-white">Zinc 50</p>
                  <p className="text-xs text-zinc-500">#fafafa</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-white border border-zinc-200 dark:border-zinc-700 rounded-xl"></div>
                  <p className="mono-caption text-zinc-900 dark:text-white">White</p>
                  <p className="text-xs text-zinc-500">#ffffff</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Accent & Status</p>
              <div className="grid grid-cols-1 gap-3">
                <div className="space-y-2">
                  <div className="h-16 bg-zinc-900 dark:bg-white rounded-xl flex items-center justify-center">
                    <span className="text-white dark:text-zinc-900 text-sm font-medium">Primary Action</span>
                  </div>
                  <p className="mono-caption text-zinc-900 dark:text-white">Zinc 900 / White</p>
                  <p className="text-xs text-zinc-500">Buttons & CTAs</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Text Colors</p>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-900 dark:bg-zinc-50 rounded-xl"></div>
                  <div>
                    <p className="mono-caption text-zinc-900 dark:text-white">Primary</p>
                    <p className="text-xs text-zinc-500">#18181b / #fafafa</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-500 rounded-xl"></div>
                  <div>
                    <p className="mono-caption text-zinc-600">Secondary</p>
                    <p className="text-xs text-zinc-500">#71717a</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-400 rounded-xl"></div>
                  <div>
                    <p className="mono-caption text-zinc-400">Muted</p>
                    <p className="text-xs text-zinc-500">#a1a1aa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Components Section */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-2">
            <Label>Components</Label>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="mono-caption-muted mb-3">Card</p>
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 space-y-3 rounded-2xl">
                <h3 className="heading-md text-zinc-900 dark:text-white">Card Title</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  This is a basic card component with subtle border and padding.
                </p>
              </div>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Badges</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-sm bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-lg font-medium shadow-xs">Normal</span>
                <span className="px-3 py-1.5 text-sm bg-emerald-500 text-white rounded-full font-medium animate-pulse">Active</span>
              </div>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Buttons</p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="btn-primary">Primary Action</a>
                <a href="#" className="btn-secondary">Secondary →</a>
              </div>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Dividers</p>
              <Divider />
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-4">Content after divider with spacing</p>
            </div>
          </div>
        </section>

        <Divider />

        {/* Spacing Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-2">
            <Label>Spacing</Label>
          </div>
          
          <div className="space-y-4">
            <p className="text-zinc-600 dark:text-zinc-400">
              The design system uses an 8-point grid for consistent spacing.
            </p>
            
            <div className="space-y-2">
              {[
                { name: 'space-4', value: '1rem', class: 'h-4 bg-zinc-200 dark:bg-zinc-800' },
                { name: 'space-8', value: '2rem', class: 'h-8 bg-zinc-200 dark:bg-zinc-800' },
                { name: 'space-12', value: '3rem', class: 'h-12 bg-zinc-200 dark:bg-zinc-800' },
                { name: 'space-16', value: '4rem', class: 'h-16 bg-zinc-200 dark:bg-zinc-800' },
              ].map(({ name, value, class: className }) => (
                <div key={name} className="flex items-center gap-4">
                  <div className={`w-16 ${className} rounded`}></div>
                  <div>
                    <p className="mono-caption text-zinc-900 dark:text-white">{name}</p>
                    <p className="text-xs text-zinc-500">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="mono-caption-muted text-center">
            © 2026 Design System by designbycarlo
          </p>
        </footer>
      </div>
    </main>
  );
}
