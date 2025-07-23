import { useEffect, useState } from "react";

interface Props {
  filePath: string; // relative to project root shown in README
}

const CodePeek: React.FC<Props> = ({ filePath }) => {
  const [code, setCode] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://unpkg.com/${filePath}?module`);
        setCode(await res.text());
      } catch {
        setCode("// Unable to load source (offline?)");
      }
    })();
  }, [filePath]);

  return (
    <aside
      className={`relative flex h-fit max-h-[80vh] flex-col rounded-lg border p-4 shadow-sm dark:border-zinc-700 ${
        collapsed ? "w-12 overflow-hidden" : ""
      }`}
    >
      <button
        onClick={() => setCollapsed((c) => !c)}
        aria-label="Toggle code panel"
        className="absolute right-2 top-2 rounded bg-zinc-200 px-2 py-1 text-xs dark:bg-zinc-700"
      >
        {collapsed ? "›" : "‹"}
      </button>

      <h2 className="mb-2 text-sm font-medium opacity-70">/src/{filePath}</h2>

      <pre className="scrollbar-thin flex-1 overflow-auto rounded bg-zinc-900 p-3 text-xs text-green-200">
        {code ?? "Loading…"}
      </pre>
    </aside>
  );
};

export default CodePeek;
