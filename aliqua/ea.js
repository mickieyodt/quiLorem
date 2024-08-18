/**
 * Returns a random number uniformly distributed between min (inclusive) and max (exclusive).
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (exclusive).
 * @returns {number} A random number between min and max.
 */
function sampleUniform(min, max) {
    return Math.random() * (max - min) + min;
}

// Example usage:
const min = 0;
const max = 10;
const randomValue = sampleUniform(min, max);
console.log(`Random value between ${min} and ${max}: ${randomValue}`);
