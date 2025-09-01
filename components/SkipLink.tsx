export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:z-50 top-2 left-2 bg-white text-black dark:bg-neutral-900 dark:text-white px-3 py-2 rounded-md shadow"
    >
      Skip to content
    </a>
  );
}
