/**
 * A cortina de entrada só roda na primeira visita da sessão.
 * O hero atrasa sua animação para revelar junto com a subida da cortina.
 */
export function useIntroDelay(withIntro = 1.55, withoutIntro = 0.1) {
  if (typeof window === 'undefined') return withoutIntro;
  return sessionStorage.getItem('wak:intro-seen') === '1' ? withoutIntro : withIntro;
}
