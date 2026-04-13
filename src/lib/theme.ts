export const themeVars = (dark: boolean) => ({
  A: '#f59e0b',
  BG: dark ? '#02040f' : '#f8f7f4',
  BG2: dark ? '#060b1a' : '#ffffff',
  BG3: dark ? 'rgba(245,158,11,0.03)' : 'rgba(245,158,11,0.04)',
  TXT: dark ? '#fafafa' : '#111111',
  TXT2: dark ? 'rgba(220,220,220,0.7)' : '#555555',
  BORDER: dark ? 'rgba(245,158,11,0.13)' : 'rgba(180,140,30,0.2)',
  NAVBG: dark ? 'rgba(2,4,16,0.9)' : 'rgba(248,247,244,0.92)',
  INPUTBG: dark ? 'rgba(2,4,16,0.7)' : '#ffffff',
  INPUTBORDER: dark ? 'rgba(245,158,11,0.25)' : 'rgba(180,140,30,0.35)',
  CARDGLOW: dark ? 'rgba(245,158,11,0.04)' : 'rgba(245,158,11,0.06)',
  FOOTERBG: dark ? 'rgba(2,4,16,0.97)' : '#f0ede6',
  MONOCOLOR: dark ? 'rgba(245,158,11,0.55)' : 'rgba(160,110,0,0.75)',
  MONOMUTED: dark ? 'rgba(200,200,200,0.38)' : 'rgba(100,90,70,0.5)',
  CANVASALPHA: dark ? 0.85 : 0.35,
  mono: { fontFamily: 'monospace' } as React.CSSProperties,
})

export type Theme = ReturnType<typeof themeVars>
