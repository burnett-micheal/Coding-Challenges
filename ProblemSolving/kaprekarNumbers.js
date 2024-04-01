function kaprekarNumbers(p, q) {
    const nums = [];
    for (let i = p; i <= q; i++) {
        const str = `${(i * i)}`;
        const digits = `${i}`.length;

        if (str.length === 1) {
            if (i === 1) nums.push(1);
        } else {
            const r = str.substring(str.length - digits);
            const l = str.substring(0, str.length - digits);
            if (parseInt(r) + parseInt(l) === i) nums.push(i);
        }
    }

    console.log(nums.length > 0 ? nums.join(" ") : "INVALID RANGE");
}