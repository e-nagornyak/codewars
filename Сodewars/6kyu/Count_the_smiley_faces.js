function countSmileys(arr) {
    const smiles = [':)', ';)', ":D", ';D', ':-)', ';-)', ':~)', ';~)', ':-D', ';-D', ':~D', ';~D']
    let res = 0;
    arr.forEach(el => {
        smiles.forEach(s => {
            if (s === el) res++
        })
    })
    return res
}

function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}