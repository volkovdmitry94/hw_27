class Random {
    static getRandomNumber = function(min, max) {
        if (min >= max || min < 0 || max < 0)
            throw new Error('Max should be more than min, max and min >= 0')
        return min + Math.round(Math.random() * (max - min))
    }

    static getRandomElement = function(array) {
        return array[this.getRandomNumber(0, array.length - 1)]
    }

    static getRandomString = function(length) {
        const symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let res = '';
        if (length <= 0) {
            throw new Error('Length should be more than 0');
        } else {
            for (let i = 0; i < length; i++) {
                res += symbols[this.getRandomNumber(0, symbols.length - 1)];
            }
            return res;
        }
    }

    static getRandomEmail = function() {
        const mails = ['@tea.com', '@coffee.com', '@juice.com', '@wine.com'];
        let nick = this.getRandomString(7);
        return nick + mails[this.getRandomNumber(0, mails.length - 1)];
    }

    static getGender = function() {
        const genders = ['female', 'male'];
        return genders[this.getRandomNumber(0, 1)];
    }

    static getTitle = function() {
        const titles = ['Wage Employee', 'Manager', 'Sales Person', 'Sales Manager'];
        return titles[this.getRandomNumber(0, titles.length - 1)];
    }
}
