import test from 'node:test'
import assert from 'node:assert/strict'
import { summarizePilot } from '../src/lib/pilot.ts'

const period = { days: 30, transactions: 200, invitations: 50, observedOpenings: 20, verifiedPublications: 3, newPublicReviews: 9 }
test('la conversión usa publicaciones verificadas y no todas las reseñas nuevas', () => {
  assert.deepEqual(summarizePilot(period), { openingRatePercent: 40, verifiedConversionPercent: 15, publicReviewsPer100Transactions: 4.5, publicReviewsPerDay: 0.3 })
})
test('sin denominador no se inventa una tasa cero', () => {
  const result = summarizePilot({ ...period, transactions: 0, invitations: 0, observedOpenings: 0, verifiedPublications: 0 })
  assert.equal(result.verifiedConversionPercent, null)
  assert.equal(result.openingRatePercent, null)
  assert.equal(result.publicReviewsPer100Transactions, null)
})
test('rechaza conteos imposibles y períodos vacíos', () => {
  for (const override of [{ days: 0 }, { invitations: -1 }, { observedOpenings: 51 }, { verifiedPublications: 21 }, { transactions: 2.5 }]) {
    assert.throws(() => summarizePilot({ ...period, ...override }))
  }
  assert.throws(() => summarizePilot({ days: 30 }))
})
