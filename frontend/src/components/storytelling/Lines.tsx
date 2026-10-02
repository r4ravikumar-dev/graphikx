import {Fragment} from 'react';

/** Splits "**emphasis**" into plain and <strong> runs. */
function Emphasis({text}: {text: string}) {
  const parts = text.split('**');
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : <Fragment key={index}>{part}</Fragment>,
  );
}

/**
 * Renders copy from content files: "\n" becomes a line break and
 * "**text**" becomes emphasis.
 */
export function Lines({text}: {text: string}) {
  const lines = text.split('\n');
  return lines.map((line, index) => (
    <Fragment key={index}>
      <Emphasis text={line} />
      {index < lines.length - 1 && <br />}
    </Fragment>
  ));
}
