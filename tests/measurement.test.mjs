import test from 'node:test'
import assert from 'node:assert/strict'
import { analyticsExcluded, commercialPath, inquiryEvent } from '../src/lib/measurement.ts'

test('measurement accepts only public commercial paths, never business slugs', () => {
  assert.equal(commercialPath('/'), '/')
  assert.equal(commercialPath('/demo'), '/demo')
  for (const path of ['/r/demo', '/r/cliente-real', '/desconocido']) assert.equal(commercialPath(path), null)
})

test('internal visits are excluded across the tab session and inquiry names are bounded', () => {
  assert.equal(analyticsExcluded('?internal=1&source=qr', null), true)
  assert.equal(analyticsExcluded('', '1'), true)
  assert.equal(analyticsExcluded('?source=nfc', null), false)
  for (const format of ['card', 'stand', 'kit']) assert.equal(inquiryEvent(format), `${format}_inquiry`)
  assert.equal(inquiryEvent('Piloto de 30 días'), null)
  assert.equal(inquiryEvent(undefined), null)
})
