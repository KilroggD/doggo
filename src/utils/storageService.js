/**
 * Class to operate with storage
 */

class StorageService {
    constructor() {
        this.storage = window.localStorage;
    }

    get(key) {
        const raw = this.storage.getItem(key);
        if (raw) {
            return JSON.parse(raw);
        }
        return null;
    }

    set(key, value) {
        if (key) {
            this.storage.setItem(key, JSON.stringify(value));
        }
    }

    delete(key) {
        this.storage.removeItem(key);
    }
}

export default new StorageService();
