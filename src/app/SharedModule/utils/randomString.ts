export const randomStringGenerator = (
    len = 6,
    randomString = 'qwertyuiop1234asdfghjklz5678xcvbnm90'
) => {
    let randomText = '';
    for (let i = 0; i < len; i++) {
        randomText +=
            randomString[Math.floor(Math.random() * randomString.length)];
    }
    return randomText;
};
