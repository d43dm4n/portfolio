/**
 * Reusable card style configurations
 */
export const cardPadding = {
  xs: 2.5, // 20px on mobile
  sm: 3,   // 24px on tablet
  md: 3.5, // 28px on medium screens
  lg: 4    // 32px on large screens
};

export const cardContentStyles = {
  p: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md },
  '&:last-child': { pb: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md } }
};

export const cardStyles = {
  borderRadius: 2,
  backgroundColor: 'rgba(15, 23, 42, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  overflow: 'hidden',
};