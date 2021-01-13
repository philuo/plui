import { computed, ComponentInternalInstance } from 'vue';

/**
 * @memberof Component<pl-row>
 * @author Perfumer<1061393710@qq.com>
 * @function 获取样式列表
 */
const getRowClassList = (props: RowProps) =>
    computed(() =>
        [
            'pl-row',
            `${props.type && props.type === 'flex' ? 'pl-row--flex' : ''}`,
            `${
                props.justify &&
                ['start', 'end', 'center', 'space-between', 'space-around'].includes(props.justify)
                    ? `is-justify-${props.justify}`
                    : ''
            }`,
            `${
                props.align && ['start', 'end', 'center'].includes(props.align)
                    ? `is-align-${props.align}`
                    : ''
            }`
        ].filter(item => item)
    );

/**
 * @memberof Component<pl-row>
 * @author Perfumer<1061393710@qq.com>
 * @function 获取元素间隙
 */
const getGutter = (props: RowProps) =>
    computed(() => {
        const value = -props.gutter / 2;

        if (value === 0) {
            return '';
        }

        return {
            marginLeft: `${value}px`,
            marginRight: `${value}px`
        };
    });

/**
 * @memberof Component<pl-col>
 * @author Perfumer<1061393710@qq.com>
 * @function 获取元素间隙
 */
const getGapper = (props: ComponentInternalInstance['props']) =>
    computed(() => {
        const value = Number(props.gutter as number) / 2;

        if (value === 0) {
            return '';
        }

        return {
            paddingLeft: `${value}px`,
            paddingRight: `${value}px`
        };
    });

/**
 * @memberof Component<pl-col>
 * @author Perfumer<1061393710@qq.com>
 * @function 处理响应式列表
 */
const _mediaScreen = (props: ColProps, screen: string) => {
    const type = typeof props[screen];
    const classList = [];

    if (type === 'number' || (type === 'string' && (props[screen] as string).trim().length !== 0)) {
        classList.push(`pl-col-${screen}`);
        if (!isNaN(Number(props[screen]))) {
            classList.push(`pl-col-${screen}-${props[screen]}`);
        }
    } else if (type === 'object' && (props[screen] as Reponsive).span !== undefined) {
        classList.push(`pl-col-${screen}`);
        if (!isNaN(Number((props[screen] as Reponsive).span))) {
            classList.push(`pl-col-${screen}-${(props[screen] as Reponsive).span}`);
        }
        if ((props[screen] as Reponsive).offset) {
            classList.push(`pl-col-${screen}-offset-${(props[screen] as Reponsive).offset}`);
        }
        if ((props[screen] as Reponsive).move) {
            classList.push(`pl-col-${screen}-move-${(props[screen] as Reponsive).move}`);
        }
    }

    return classList;
};

/**
 * @memberof Component<pl-col>
 * @author Perfumer<1061393710@qq.com>
 * @function 获取样式列表
 */
const getColClassList = (props: ColProps) =>
    computed(() =>
        [
            `pl-col-${props.span}`,
            Number(props.offset) ? `pl-col-offset-${props.offset}` : '',
            Number(props.move) ? `pl-col-move-${props.move}` : '',
            // 响应式布局样式列表
            ..._mediaScreen(props, 'xs'),
            ..._mediaScreen(props, 'sm'),
            ..._mediaScreen(props, 'md'),
            ..._mediaScreen(props, 'lg'),
            ..._mediaScreen(props, 'xl')
        ].filter(item => item)
    );

export { getGutter, getRowClassList, getGapper, getColClassList };
