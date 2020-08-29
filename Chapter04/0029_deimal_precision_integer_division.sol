contract DecimalPrecision {
    constructor () {
        uint a = 10;
        uint b = 3;

        // multiply by 10**n to add n zeros
        // if you add n zeroes, the last n digits will
        // be the decimal digits

        uint c = (a * 10**6) / b;
    }
}