// Run: node scripts/check-contact-api.ts  (Node >= 22.18 strips types natively)
import assert from 'node:assert/strict';
import { validate } from '../api/contact.ts';

const ok = { name: 'Mario Rossi', email: 'mario@acme.it', company: 'Acme', phone: '', message: 'Vorrei automatizzare le fatture fornitori' };
assert.ok('data' in validate(ok));
assert.deepEqual(validate({ ...ok, 'bot-field': 'x' }), { spam: true });
assert.deepEqual(validate({ ...ok, email: 'nope' }), { error: 'email' });
assert.deepEqual(validate({ ...ok, message: 'short' }), { error: 'message' });
assert.deepEqual(validate(null), { error: 'name' });
assert.ok('error' in validate({ ...ok, message: 'x'.repeat(5001) }));
const r = validate({ ...ok, evil: '<script>' });
assert.ok('data' in r && !('evil' in r.data));
console.log('contact api checks passed');
