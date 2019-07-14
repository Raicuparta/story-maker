import { darken, lighten } from 'polished';

const primary = '#1c4265';
const primaryVariant = darken(0.15, primary);
const secondary = lighten(0.5, primary);
const secondaryVariant = lighten(0.15, primary);

export default {
  primary,
  primaryVariant,
  secondary,
  secondaryVariant,
}
