let Set = {
    list: [],
    has: function (value) {
        for (let item of this.list) {
            if (value === item) {
                return true;
            }
        }
        return false;
    },
    push: function (value) {
        if (!this.has(value)) {
            this.list.push(value);
        }
    },
    init: function (array) {
        if (typeof array !== 'object') {
            return null;
        }
        for (item of array) {
            this.push(item);
        }
    }
};

module.exports = Set;