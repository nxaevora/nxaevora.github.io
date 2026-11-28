const postTransitionName = (id: string): string => {
  const slug = id
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `post-${/^[0-9]/.test(slug) ? `n${slug}` : slug || 'entry'}`;
};

const postTransitionCss = (ids: readonly string[]): string => {
  const names = [...new Set(ids)].map(postTransitionName);
  const duplicate = names.find((name, index) => names.indexOf(name) !== index);
  if (duplicate) {
    // 2 posts with the same transition name break the page transition: stop the build.
    throw new Error(`Two blog posts give the same view transition name: ${duplicate}`);
  }
  return names
    .map(
      (name) =>
        `::view-transition-group(${name}){animation-duration:var(--md-sys-motion-duration-long1);animation-timing-function:var(--md-sys-motion-easing-emphasized)}` +
        `::view-transition-old(${name}){display:none}` +
        `::view-transition-new(${name}){animation:none}`,
    )
    .join('');
};

export { postTransitionName, postTransitionCss };
