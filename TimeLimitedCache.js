var TimeLimitedCache = function () {
    this.currentTimer = 0;
    this.cache = new Map();
    // this.id = setInterval(() => this.currentTimer++, 1);
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const time = new Date().getTime();
    if (this.cache.has(key)) {
        this.cache.set(key, { value, duration: time + duration });
        return true;
    }
    this.cache.set(key, { value, duration: time + duration });
    return false;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const item = this.cache.has(key);
    if (!item) {
        return false;
    }

    const val = this.cache.get(key);
    const time = new Date().getTime();
    if (val.duration > time) {
        return val.value;
    }
    this.cache.delete(key);
    return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let cKey = 0;
    for (let [key, val] of this.cache) {
        const time = new Date().getTime();
        if (val.duration > time) {
            cKey++;
        }
    }

    return cKey;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
