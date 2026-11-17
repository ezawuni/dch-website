/** Blank portrait placeholder. Swap for a real <Image> later by passing a photo to the team page. */
export default function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`Photo placeholder for ${label}`}
      className="relative aspect-[4/5] w-full max-w-[12rem] overflow-hidden rounded-2xl bg-brand-soft ring-1 ring-line"
    />
  );
}
