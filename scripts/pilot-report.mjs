import { readFileSync } from 'node:fs'
import { summarizePilot } from '../src/lib/pilot.ts'

const file = process.argv[2]
if (!file) throw new Error('Uso: npm run pilot:report -- registro-privado.json')
const records = JSON.parse(readFileSync(file, 'utf8'))
if (!Array.isArray(records) || records.length !== 5) throw new Error('Se requieren los cinco negocios')
const ids = new Set()
const report = records.map(({ businessId, baseline, pilot }) => {
  if (!/^P0[1-5]$/.test(businessId) || ids.has(businessId)) throw new Error('IDs únicos P01 a P05')
  ids.add(businessId)
  if (baseline?.days !== 30 || pilot?.days !== 30) throw new Error('Registrar 30 días por período')
  const before = summarizePilot(baseline)
  const after = summarizePilot(pilot)
  return { businessId, baseline: before, pilot: after,
    publicReviewsPer100TransactionsDifference: before.publicReviewsPer100Transactions === null || after.publicReviewsPer100Transactions === null
      ? null : after.publicReviewsPer100Transactions - before.publicReviewsPer100Transactions,
  }
})
console.log(JSON.stringify({ notice: 'Datos aportados por el operador. No verifica evidencia ni establece causalidad. null significa denominador cero.', report }, null, 2))
