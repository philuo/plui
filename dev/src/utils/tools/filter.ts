/**
 * @author Perfuemre
 * @time 2020-06-09
 * @description 过滤器
 */

const filterByField = (arr: any[], field: string | any[] = '', flat = true) => {
    if (field === '') {
        return arr;
    }
    if (field && typeof field === 'string') {
        if (flat) {
            return arr.map(item => item[field]);
        }

        return arr.map(item => ({ [field]: item[field] }));
    }
    if (field && typeof field === 'object' && field.length) {
        const res: any[] = [];

        arr.forEach(item => {
            const o: any = Object.create(null);

            (field as string[]).forEach(key => {
                o[key] = item[key];
            });
            res.push(o);
        });

        return res;
    }
};

export { filterByField };
