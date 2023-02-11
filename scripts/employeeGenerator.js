class EmployeesGenerator {
    static getRandomEmployee = function() {
        return {
            id: Random.getRandomNumber(1000, 5000),
            emailAddress: Random.getRandomEmail(),
            gender: Random.getGender(),
            name: Random.getRandomString(8),
            salary: Random.getRandomNumber(5000, 30000),
            title: Random.getTitle()
        }
    }
}