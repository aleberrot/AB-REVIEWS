export interface PilotPeriod {
  days: number
  transactions: number
  invitations: number
  observedOpenings: number
  verifiedPublications: number
  newPublicReviews: number
}

// Conteos de observación, no telemetría automática ni atribución de ventas.
export function summarizePilot(period: PilotPeriod) {
  for (const key of ['days', 'transactions', 'invitations', 'observedOpenings', 'verifiedPublications', 'newPublicReviews'] as const) {
    const value = period[key]
    if (!Number.isSafeInteger(value) || value < 0) throw new Error(`Conteo inválido: ${key}`)
  }
  if (!period.days) throw new Error('Se necesita al menos un día observado')
  if (period.observedOpenings > period.invitations || period.verifiedPublications > period.observedOpenings) {
    throw new Error('Revisar denominadores de la cohorte observada')
  }
  const rate = (n: number, d: number) => d ? 100 * n / d : null
  return {
    openingRatePercent: rate(period.observedOpenings, period.invitations),
    // Solo publicaciones comprobadas en la misma cohorte; nunca usar el delta total.
    verifiedConversionPercent: rate(period.verifiedPublications, period.observedOpenings),
    publicReviewsPer100Transactions: rate(period.newPublicReviews, period.transactions),
    publicReviewsPerDay: period.newPublicReviews / period.days,
  }
}
