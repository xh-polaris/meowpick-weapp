function sum(ls: number[]): number {
    if (ls.length == 0) return 0
    return ls.reduce(function (prev, curr) {
        return prev + curr;
    });
}

export function useStar(data: number[]) {
    return reactive(new class {
        score: number;
        avg: number;
        map: { [k: string]: number };

        constructor(data: number[]) {
            this.avg = sum(data) / data.length;
            this.score = 2.25 * this.avg - 1.25;

            this.map = {};
            let m = data.reduce((temp: { [k: string]: number }, n) => {
                temp[Math.floor(n)] = temp[Math.floor(n)] ? temp[Math.floor(n)] + 1 : 1;
                return temp;
            }, {});

            for (let k in m) {
                this.map[k] = Number(((m[k] / data.length) * 100).toFixed(0));
            }
        }
    }(data));
}
