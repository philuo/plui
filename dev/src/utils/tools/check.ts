/**
 * @author Perfuemre
 * @time 2020-06-09
 * @description 一系列检测方法
 */

// 类型判断
const checkType = Object.prototype.toString.call.bind(Object.prototype.toString);

// 客户端判断
const checkPC = () =>
    ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'].every(
        item => !navigator.userAgent.includes(item)
    );

export { checkType, checkPC };
