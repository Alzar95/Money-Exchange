// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var h = 50, q = 25, d = 10, n = 5, p = 1, remainder, result = {};
    var ch, cq, cd, cn ,cp;

    if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if(currency <= 0) {
        return {};
    } else {
        remainder = currency;

        if (remainder >= h) {
            ch = Math.floor(remainder / h);
            result["H"] = ch;
            h *= ch;
            remainder -= h;
        }
        if (remainder >= q) {
            cq = Math.floor(remainder / q);
            result["Q"] = cq;
            q *= cq;
            remainder -= q;
        }
        if (remainder >= d) {
            cd = Math.floor(remainder / d);
            result["D"] = cd;
            d *= cd;
            remainder -= d;
        }
        if (remainder >= n) {
            cn = Math.floor(remainder / n);
            result["N"] = cn;
            n *= cn;
            remainder -= n;
        }
        if (remainder >= p) {
            cp = Math.floor(remainder / p);
            result["P"] = cp;
        }

        return result;
    }
}
