/** Builds a Gmail compose link (open in a new tab) prefilled to Deven. */
export const gmailCompose = (subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=deven@diverselabs.org` +
  `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
