import { useLayoutEffect, useRef, useState } from "react";

export function balanceRows(widths, available, gap = 8) {
  if (!widths.length || available <= 0) return [];
  const n = widths.length;
  const prefix = [0];
  widths.forEach((width) => prefix.push(prefix.at(-1) + Math.min(width, available)));
  const rowWidth = (start, end) => prefix[end] - prefix[start] + gap * (end - start - 1);
  // First minimize row count, then minimize squared deviation from equal row widths.
  let rowCount = 1, used = 0;
  widths.forEach((width) => {
    const size = Math.min(width, available);
    if (used && used + gap + size > available) { rowCount++; used = size; }
    else used = used ? used + gap + size : size;
  });
  const target = (prefix[n] + gap * (n - rowCount)) / rowCount;
  const costs = Array.from({ length: rowCount + 1 }, () => Array(n + 1).fill(Infinity));
  const splits = Array.from({ length: rowCount + 1 }, () => Array(n + 1).fill(-1));
  costs[0][0] = 0;
  for (let rows = 1; rows <= rowCount; rows++) {
    for (let end = rows; end <= n; end++) {
      for (let start = end - 1; start >= rows - 1; start--) {
        const width = rowWidth(start, end);
        if (width > available + 0.01) break;
        const cost = costs[rows - 1][start] + (width - target) ** 2;
        if (cost < costs[rows][end]) { costs[rows][end] = cost; splits[rows][end] = start; }
      }
    }
  }
  const result = [];
  let end = n;
  for (let rows = rowCount; rows > 0; rows--) {
    const start = splits[rows][end];
    result.unshift([start, end]);
    end = start;
  }
  return result;
}

export default function BalancedBadges({ items, label, className }) {
  const container = useRef(null);
  const measurement = useRef(null);
  const [rows, setRows] = useState(null);
  useLayoutEffect(() => {
    let disposed = false;
    const measure = () => {
      if (disposed) return;
      const widths = [...measurement.current.children].map((node) => node.getBoundingClientRect().width);
      const next = balanceRows(widths, container.current.clientWidth);
      setRows((previous) => JSON.stringify(previous) === JSON.stringify(next) ? previous : next);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(container.current);
    observer.observe(measurement.current);
    measure();
    document.fonts.ready.then(measure);
    return () => { disposed = true; observer.disconnect(); };
  }, [items]);
  return (
    <div ref={container} className="relative min-w-0 overflow-hidden" role="group" aria-label={label}>
      <div ref={measurement} aria-hidden="true" className="absolute invisible pointer-events-none flex w-max gap-2" style={{ left: 0, top: 0, visibility: "hidden" }}>
        {items.map((item) => <span key={item} className={`whitespace-nowrap ${className}`}>{item}</span>)}
      </div>
      <div className="space-y-2 overflow-hidden">
        {(rows?.length ? rows : [[0, items.length]]).map(([start, end]) => (
          <ul key={start} className="flex flex-wrap justify-center gap-2">
            {items.slice(start, end).map((item) => <li key={item} className={`max-w-full break-words ${className}`}>{item}</li>)}
          </ul>
        ))}
      </div>
    </div>
  );
}
