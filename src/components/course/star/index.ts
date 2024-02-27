export type Props = {
    score: number[]
}
type Instance = {
    score: number;
    avg: number;
    map: { [k: string]: number }
}

function sum(ls: number[]): number {
    if (ls.length == 0) return 0
    return ls.reduce(function (prev, curr) {
        return prev + curr;
    });
}

export function useStar(p: Props) {
    const instance: Instance = {
        score: 0, avg: 0, map: {}
    }

    instance.avg = sum(p.score) / p.score.length;

    instance.score = 2.25 * instance.avg - 1.25

    let m = p.score.reduce((temp: { [k: string]: number }, n) => {
        temp[Math.floor(n)] = temp[Math.floor(n)] ? temp[Math.floor(n)] + 1 : 1;
        return temp;
    }, {});
    for (let k in m) {
        instance.map[k] = Number(((m[k] / p.score.length) * 100).toFixed(0));
    }

    return {
        ...instance
    }
}
