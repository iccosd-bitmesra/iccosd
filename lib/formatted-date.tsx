const EXTENDED_DATE_PATTERN = /^~~(.+?)~~\s*(.+)$/;

export function parseExtendedDate(text: string): {
  previous?: string;
  current: string;
} {
  const match = text.match(EXTENDED_DATE_PATTERN);
  if (!match) return { current: text };

  return {
    previous: match[1],
    current: match[2],
  };
}

export function FormattedDate({
  text,
  className,
  strikeClassName = "line-through opacity-50",
}: {
  text: string;
  className?: string;
  strikeClassName?: string;
}) {
  const { previous, current } = parseExtendedDate(text);

  return (
    <span className={className}>
      {previous ? (
        <>
          <span className={strikeClassName}>{previous}</span>{" "}
        </>
      ) : null}
      {current}
    </span>
  );
}

export function renderTextWithStrikethroughSegments(text: string) {
  const parts = text.split(/(~~.+?~~)/g);

  return parts.map((part, idx) => {
    const match = part.match(/^~~(.+?)~~$/);
    if (match) {
      return (
        <span key={idx} className="line-through opacity-50">
          {match[1]}
        </span>
      );
    }

    return <span key={idx}>{part}</span>;
  });
}
