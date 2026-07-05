/**
 * Subtle, dark-overlaid backdrop for otherwise-empty dark sections.
 * Adds faint ember/light-particle depth without affecting text or card readability.
 * The parent section must be `relative` (and usually `overflow-hidden`).
 *
 * `variant="scenery"` layers the faint California dusk photo; `variant="ember"` (default)
 * uses only the ember particle texture.
 */
export function SectionBackdrop({
  variant = 'ember',
}: {
  variant?: 'ember' | 'scenery'
}) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {variant === 'scenery' && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: 'url(/images/altadena-dusk.png)',
            }}
          />
          {/* Dark overlay so all text and cards stay fully readable */}
          <div className="absolute inset-0 bg-background/80" />
        </>
      )}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
        style={{
          backgroundImage: 'url(/images/ember-texture.png)',
        }}
      />
    </div>
  )
}
