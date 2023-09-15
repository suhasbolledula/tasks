/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((value: number): number => value * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const parse = numbers.map((value: string): number => {
        const num = parseInt(value);
        return isNaN(num) ? 0 : num;
    });
    return parse;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const nod = amounts.map((value: string): string => {
        return value.includes("$") ? value.replace("$", "") : value;
    });
    const parse = nod.map((value: string): number => {
        const num = parseInt(value);
        return isNaN(num) ? 0 : num;
    });
    return parse;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const filterdS = messages.filter((value) => !value.endsWith("?"));
    const nod = filterdS.map((value: string): string => {
        if (value.endsWith("!")) {
            return value.toUpperCase();
        }
        return value;
    });
    return nod;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    words.map((value: string): void => {
        if (value.length < 4) {
            count += 1;
        }
    });
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    }
    const a = colors.map((value: string): boolean => {
        if (value.toLowerCase() === "red") {
            return true;
        } else if (value.toLowerCase() === "blue") {
            return true;
        } else if (value.toLowerCase() === "green") {
            return true;
        } else {
            return false;
        }
    });
    const num = a.filter((value) => value === false).length;
    if (num >= 1) {
        return false;
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        return "0=0";
    }
    let count = 0;
    addends.map((value) => (count += value));
    let ring1 = `${count}=`;
    addends.map((value: number): string => (ring1 += value + "+"));
    return ring1.slice(0, -1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let count = 0;
    let foundNegative = false;
    const a1 = [];
    values.map((value) => {
        if (value < 0 && !foundNegative) {
            foundNegative = true;
            a1.push(value, count);
        } else {
            count += value;
            a1.push(value);
        }
    });
    if (!foundNegative) {
        a1.push(count);
    }
    return a1;
}
