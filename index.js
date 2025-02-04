function validateCard(cardNumber) {
    const cardStr = cardNumber.toString();
    let sum = 0;

    for (let i = cardStr.length - 1; i >= 0; i --) {
        let digit = parseInt(cardStr[i], 10);

        if ((cardStr.length - 1 - i) % 2 === 1) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }

    if (sum % 10 !== 0) {
        console.log('INVALID');
        return;
    }

    if (cardStr.length === 15 && (cardStr.startsWith('34') || cardStr.startsWith('37'))) {
        console.log('AMEX');
    } else if (cardStr.length === 16 && (cardStr.startsWith('51') || cardStr.startsWith('52') || cardStr.startsWith('53') || cardStr.startsWith('54') || cardStr.startsWith('55'))) {
        console.log('MASTERCARD');
    } else if ((cardStr.length === 13 || cardStr.length === 16) && cardStr.startsWith('4')) {
        console.log('VISA'); 
    } else {
        console.log('INVALID');
    }
}
