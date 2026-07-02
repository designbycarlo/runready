import { Heading } from '@/components/ui/heading';
import { Label } from '@/components/ui/label';
import { Divider } from '@/components/ui/divider';

export default function StyleGuidePage() {
  return (
    <main className="min-h-screen bg-paper">
      <div className="max-w-2xl mx-auto px-8 py-16 sm:py-24">
        <header className="mb-20">
          <Heading level="xl">Design System</Heading>
          <p className="text-muted text-base mt-4">
            A comprehensive guide to the visual design language of RunReady.
          </p>
        </header>

        {/* Typography Section */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-2">
            <Label>Typography</Label>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="mono-caption-muted mb-2">Heading XL (5xl / 6xl)</p>
              <h1 className="heading-xl text-black">Building intuitive experiences</h1>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-2">Heading LG (3xl)</p>
              <h2 className="heading-lg text-black">Selected Experience</h2>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-2">Heading MD (2xl)</p>
              <h3 className="heading-md text-black">Senior UI Designer</h3>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-2">Body Text</p>
              <p className="body-text">
                This is standard body text used for paragraphs and content. 
                It maintains optimal readability with comfortable line height.
              </p>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-2">Muted Text</p>
              <p className="body-text-muted">
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
                  <div className="h-16 bg-paper border border-border rounded"></div>
                  <p className="mono-caption text-black">Paper</p>
                  <p className="text-xs text-muted">#f5f3ed</p>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-black"></div>
                  <p className="mono-caption text-white">Black</p>
                  <p className="text-xs text-muted">#000000</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Accent</p>
              <div className="grid grid-cols-1 gap-3">
                <div className="space-y-2">
                  <div className="h-16 bg-highlight-yellow rounded"></div>
                  <p className="mono-caption text-black">Highlight Yellow</p>
                  <p className="text-xs text-muted">#fff4a3</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Text Colors</p>
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded"></div>
                  <div>
                    <p className="mono-caption text-black">Primary</p>
                    <p className="text-xs text-muted">#0a0a0a</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded"></div>
                  <div>
                    <p className="mono-caption text-muted">Muted</p>
                    <p className="text-xs text-muted">#86807a</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Labels Section */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-2">
            <Label>Labels</Label>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="mono-caption-muted mb-3">Default (Highlight)</p>
              <Label>About</Label>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Muted</p>
              <Label variant="muted">Front End Engineer</Label>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Inline Usage</p>
              <div className="flex items-center gap-2">
                <Label>React</Label>
                <Label>TypeScript</Label>
                <Label>Next.js</Label>
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
              <div className="bg-white border border-border p-6 space-y-3">
                <h3 className="heading-md text-black">Card Title</h3>
                <p className="text-muted text-sm">
                  This is a basic card component with border and padding.
                </p>
              </div>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Status Badge</p>
              <div className="flex gap-3">
                <span className="px-2 py-0.5 mono-caption bg-highlight-yellow text-black">Optimal</span>
                <span className="px-2 py-0.5 mono-caption bg-white text-black border border-border">Caution</span>
                <span className="px-2 py-0.5 mono-caption bg-black text-white">Avoid</span>
              </div>
            </div>
            
            <div>
              <p className="mono-caption-muted mb-3">Dividers</p>
              <Divider />
              <p className="text-muted text-sm mt-4">Content after divider with spacing</p>
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
            <p className="body-text-muted">
              The design system uses an 8-point grid for consistent spacing.
            </p>
            
            <div className="space-y-2">
              {[
                { name: 'space-4', value: '1rem', class: 'h-4 bg-highlight-yellow' },
                { name: 'space-8', value: '2rem', class: 'h-8 bg-highlight-yellow' },
                { name: 'space-12', value: '3rem', class: 'h-12 bg-highlight-yellow' },
                { name: 'space-16', value: '4rem', class: 'h-16 bg-highlight-yellow' },
              ].map(({ name, value, class: className }) => (
                <div key={name} className="flex items-center gap-4">
                  <div className={`w-16 ${className}`}></div>
                  <div>
                    <p className="mono-caption text-black">{name}</p>
                    <p className="text-xs text-muted">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-8 border-t border-border">
          <p className="mono-caption-muted text-center">
            © 2026 RunReady Design System
          </p>
        </footer>
      </div>
    </main>
  );
}