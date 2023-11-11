function binary(number) {
    if (number == 0) {
        return '0';
    }
    let string = "";
    while (number > 0) {
        let remainder = number % 2;
        number = (number - remainder) / 2
        string = remainder.toString() + string;
    }
    return string
}