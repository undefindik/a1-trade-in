export default function calculatePrice(price, coefficient, year) {
    const currentYear = new Date().getFullYear()
    const age = currentYear - year
    const ageMultiplier = Math.pow(0.85, age)
    const formula = price * coefficient * ageMultiplier

    return {
        sale: {
            value: Math.floor(formula),
            description: 'Скидка на покупку нового устройства в магазинах A1',
        },
        refill: {
            value: Math.floor(formula * 0.5),
            description: 'Начисляем на баланс вашего лицевого счета'
        }
    }
}