import {
  Hct,
  SchemeTonalSpot,
  TonalPalette,
  argbFromHex,
  hexFromArgb,
} from '@material/material-color-utilities';

const SEED = '#01B8F8';
const RED = '#FC3222';
const GREEN = '#B1F634';

function declarations(entries: Iterable<readonly [string, string]>): string {
  let css = '';
  for (const [property, value] of entries) {
    css += `  ${property}: ${value};\n`;
  }
  return css;
}

export function themeCss(): string {
  const scheme = new SchemeTonalSpot(Hct.fromInt(argbFromHex(SEED)), true, 0);
  const green = TonalPalette.fromInt(argbFromHex(GREEN));
  const red = TonalPalette.fromInt(argbFromHex(RED));

  const colors: Record<string, number> = {
    '--md-sys-color-primary': scheme.primary,
    '--md-sys-color-on-primary': scheme.onPrimary,
    '--md-sys-color-primary-container': scheme.primaryContainer,
    '--md-sys-color-on-primary-container': scheme.onPrimaryContainer,
    '--md-sys-color-secondary': scheme.secondary,
    '--md-sys-color-on-secondary': scheme.onSecondary,
    '--md-sys-color-secondary-container': scheme.secondaryContainer,
    '--md-sys-color-on-secondary-container': scheme.onSecondaryContainer,
    '--md-sys-color-tertiary': scheme.tertiary,
    '--md-sys-color-on-tertiary': scheme.onTertiary,
    '--md-sys-color-tertiary-container': scheme.tertiaryContainer,
    '--md-sys-color-on-tertiary-container': scheme.onTertiaryContainer,
    '--md-sys-color-error': scheme.error,
    '--md-sys-color-on-error': scheme.onError,
    '--md-sys-color-error-container': scheme.errorContainer,
    '--md-sys-color-on-error-container': scheme.onErrorContainer,
    '--md-sys-color-background': scheme.background,
    '--md-sys-color-on-background': scheme.onBackground,
    '--md-sys-color-surface': scheme.surface,
    '--md-sys-color-on-surface': scheme.onSurface,
    '--md-sys-color-surface-variant': scheme.surfaceVariant,
    '--md-sys-color-on-surface-variant': scheme.onSurfaceVariant,
    '--md-sys-color-surface-dim': scheme.surfaceDim,
    '--md-sys-color-surface-bright': scheme.surfaceBright,
    '--md-sys-color-surface-container-lowest': scheme.surfaceContainerLowest,
    '--md-sys-color-surface-container-low': scheme.surfaceContainerLow,
    '--md-sys-color-surface-container': scheme.surfaceContainer,
    '--md-sys-color-surface-container-high': scheme.surfaceContainerHigh,
    '--md-sys-color-surface-container-highest': scheme.surfaceContainerHighest,
    '--md-sys-color-outline': scheme.outline,
    '--md-sys-color-outline-variant': scheme.outlineVariant,
    '--md-sys-color-inverse-surface': scheme.inverseSurface,
    '--md-sys-color-inverse-on-surface': scheme.inverseOnSurface,
    '--md-sys-color-inverse-primary': scheme.inversePrimary,
    '--md-sys-color-shadow': scheme.shadow,
    '--md-sys-color-scrim': scheme.scrim,
  };

  const colorLines = declarations(
    Object.entries(colors).map(
      ([property, value]): [string, string] => [property, hexFromArgb(value)],
    ),
  );

  const customColors: Record<string, number> = {
    '--nx-color-blue': argbFromHex(SEED),
    '--nx-color-red': argbFromHex(RED),
    '--nx-color-green': argbFromHex(GREEN),
    '--nx-color-implemented-container': green.tone(30),
    '--nx-color-on-implemented-container': green.tone(90),
    '--nx-color-experimental-container': red.tone(30),
    '--nx-color-on-experimental-container': red.tone(90),
    '--nx-color-alert-container': red.tone(30),
    '--nx-color-on-alert-container': red.tone(90),
  };

  const customLines = declarations(
    Object.entries(customColors).map(
      ([property, value]): [string, string] => [property, hexFromArgb(value)],
    ),
  );

  return `:root {
  color-scheme: dark;

${colorLines}
${customLines}
  --nx-elevation-3: 0 1px 3px 0 rgba(0, 0, 0, 0.35), 0 4px 8px 3px rgba(0, 0, 0, 0.15);
  --nx-state-hover: color-mix(in srgb, var(--md-sys-color-on-surface) 8%, transparent);
  --nx-state-focus: color-mix(in srgb, var(--md-sys-color-on-surface) 10%, transparent);
  --nx-state-pressed: color-mix(in srgb, var(--md-sys-color-on-surface) 10%, transparent);

  --md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --md-sys-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-duration-short1: 50ms;
  --md-sys-motion-duration-short2: 100ms;
  --md-sys-motion-duration-short3: 150ms;
  --md-sys-motion-duration-short4: 200ms;
  --md-sys-motion-duration-medium1: 250ms;
  --md-sys-motion-duration-medium2: 300ms;
  --md-sys-motion-duration-medium3: 350ms;
  --md-sys-motion-duration-medium4: 400ms;
  --md-sys-motion-duration-long1: 450ms;
  --md-sys-motion-duration-long2: 500ms;
  --md-sys-motion-duration-long3: 550ms;
  --md-sys-motion-duration-long4: 600ms;

  --md-ref-typeface-plain: "Roboto", "Helvetica Neue", Arial, sans-serif;

  --md-sys-typescale-display-large-size: 3.5625rem;
  --md-sys-typescale-display-large-line-height: 4rem;
  --md-sys-typescale-display-medium-size: 2.8125rem;
  --md-sys-typescale-display-medium-line-height: 3.25rem;
  --md-sys-typescale-display-small-size: 2.25rem;
  --md-sys-typescale-display-small-line-height: 2.75rem;
  --md-sys-typescale-headline-large-size: 2rem;
  --md-sys-typescale-headline-large-line-height: 2.5rem;
  --md-sys-typescale-headline-medium-size: 1.75rem;
  --md-sys-typescale-headline-medium-line-height: 2.25rem;
  --md-sys-typescale-headline-small-size: 1.5rem;
  --md-sys-typescale-headline-small-line-height: 2rem;
  --md-sys-typescale-title-large-size: 1.375rem;
  --md-sys-typescale-title-large-line-height: 1.75rem;
  --md-sys-typescale-title-medium-size: 1rem;
  --md-sys-typescale-title-medium-line-height: 1.5rem;
  --md-sys-typescale-title-small-size: 0.875rem;
  --md-sys-typescale-title-small-line-height: 1.25rem;
  --md-sys-typescale-body-large-size: 1rem;
  --md-sys-typescale-body-large-line-height: 1.5rem;
  --md-sys-typescale-body-medium-size: 0.875rem;
  --md-sys-typescale-body-medium-line-height: 1.25rem;
  --md-sys-typescale-body-small-size: 0.75rem;
  --md-sys-typescale-body-small-line-height: 1rem;
  --md-sys-typescale-label-large-size: 0.875rem;
  --md-sys-typescale-label-large-line-height: 1.25rem;
  --md-sys-typescale-label-medium-size: 0.75rem;
  --md-sys-typescale-label-medium-line-height: 1rem;
  --md-sys-typescale-label-small-size: 0.6875rem;
  --md-sys-typescale-label-small-line-height: 1rem;

  --md-sys-shape-corner-extra-small: 4px;
  --md-sys-shape-corner-small: 8px;
  --md-sys-shape-corner-medium: 12px;
  --md-sys-shape-corner-large: 16px;
  --md-sys-shape-corner-extra-large: 28px;
  --md-sys-shape-corner-full: 999px;
}`;
}
