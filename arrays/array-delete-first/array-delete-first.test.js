import tape from 'tape'
import arrayDeleteFirst from './array-delete-first.js'

tape('Tests for deleting the first item in an array', function(assert) {
	const input1 = [3, 7, 12, 31]
	const input2 = []
	const input3 = [5]
	const input4 = 'test'
	const input5 = null
	const input6 = undefined

	const output1 = arrayDeleteFirst(input1)
	const output2 = arrayDeleteFirst(input2)
	const output3 = arrayDeleteFirst(input3)

	const expectedOutput1 = [7, 12, 31]
	const expectedOutput2 = []
	const expectedOutput3 = []

	assert.deepEqual(output1, expectedOutput1, 'Should return an array minus the first item')
	assert.deepEqual(output2, expectedOutput2, 'Should return an empty array')
	assert.deepEqual(output3, expectedOutput3, 'Should return an empty array')
	assert.throws(() => arrayDeleteFirst(input4), 'Should throw TypeError for string input')
	assert.throws(() => arrayDeleteFirst(input5), 'Should throw TypeError for null input')
	assert.throws(() => arrayDeleteFirst(input6), 'Should throw TypeError for undefined input')
	assert.end()
})