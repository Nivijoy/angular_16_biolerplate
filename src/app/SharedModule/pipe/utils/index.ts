export const findDiffPercentage = (
    min?: number,
    max?: number,
    fixed: number = 2
): number => {
    if (min && max) return Number((((max - min) / min) * 100).toFixed(fixed));
    return 0;
};

export const tax = (
    tax_percentage: number = 18,
    amount: number = 0,
    tax_mode: number = 0
): number => {
    let tax_amt: number = 0;
    if (tax_mode === 0) {
        tax_amt = (amount * tax_percentage) / (100 + tax_percentage);
    } else {
        tax_amt = (amount / 100) * tax_percentage;
    }
    return tax_amt;
};

export const getTaxBasedPrice = (
    taxmode: number = 0,
    amount: number = 0,
    tax: number = 0
): number => {
    let total: number = 0;
    if (taxmode == 0) {
        total = amount - tax;
    } else total = amount;
    return total;
};

export const sharePrize = (
    amt: number | undefined,
    percentage: number | undefined
): number => {
    if (amt && percentage) return amt * (percentage / 100);
    return 0;
};

export const getValueFromList = (
    lists: Object[],
    value: unknown | unknown[],
    findKey: string = 'id',
    displayKey: string | string[] = 'label',
    defaultValue: unknown = '--'
): unknown => {
    let findItem;
    if (Array.isArray(value) && !Array.isArray(displayKey)) {
        findItem = lists
            ?.filter((item) => value.includes(item[findKey]))
            .map((item) => item[displayKey])
            .join(', ');
    } else {
        if (!Array.isArray(displayKey)) {
            findItem = lists?.find((item) => item[findKey] == value);
            if (findItem) findItem = findItem[displayKey];
        } else {
            findItem = lists?.find((item) => item[findKey] == value);
            if (findItem)
                findItem = displayKey
                    .map((key, index) => {
                        return index == 0
                            ? findItem[key]
                            : '(' + findItem[key] + ')';
                    })
                    .join(' ');
        }
    }
    return findItem || defaultValue;
};

export const convertNumToWords = (value: any): unknown => {
    let a = [
        '',
        'One ',
        'Two ',
        'Three ',
        'Four ',
        'Five ',
        'Six ',
        'Seven ',
        'Eight ',
        'Nine ',
        'Ten ',
        'Eleven ',
        'Twelve ',
        'Thirteen ',
        'Fourteen ',
        'Fifteen ',
        'Sixteen ',
        'Seventeen ',
        'Eighteen ',
        'Nineteen '],
    b = [
        '',
        '',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety'];
    
    if (value) {
        let number = parseFloat(value).toFixed(2).split('.');
        let num = parseInt(number[0]);
        let digit = parseInt(number[1]);
        if (num) {
            if (num.toString().length > 9) {
                return '';
            }
            const n = ('000000000' + num)
                .substr(-9)
                .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            const d = ('00' + digit).substr(-2).match(/^(\d{2})$/);
            if (!n) {
                return '';
            }
            let str = '';
            str +=
                Number(n[1]) !== 0
                    ? (a[Number(n[1])] ||
                          b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore '
                    : '';
            str +=
                Number(n[2]) !== 0
                    ? (a[Number(n[2])] ||
                          b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh '
                    : '';
            str +=
                Number(n[3]) !== 0
                    ? (a[Number(n[3])] ||
                          b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand '
                    : '';
            str +=
                Number(n[4]) !== 0
                    ? (a[Number(n[4])] ||
                          b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred '
                    : '';
            str +=
                Number(n[5]) !== 0
                    ? (a[Number(n[5])] ||
                          b[n[5][0]] + ' ' + a[n[5][1]]) + 'Rupee '
                    : '';
            str +=
                Number(d ? d[1]: 0) !== 0
                    ? (str !== '' ? 'and ' : '') +
                      (a[Number(d ? d[1]: 0)] ||
                          b[d ? d[1][0]: 0] + ' ' + a[d ? d[1][1]: 0]) +
                      'Paise Only'
                    : 'Rupee Only';
            return str;
        } else {
            return '';
        }
    } else {
        return '';
    }
};
