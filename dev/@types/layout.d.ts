/**
 * 响应式下 xs sm md lg xl的字段
 */
declare type Reponsive = {
    gutter: string | number;
    span: string | number;
    offset: string | number;
    move: string | number;
};

/**
 * pl-row组件的props
 */
declare type RowProps = Readonly<{
    gutter: string | number;
    type: string;
    justify: string;
    align: string;
}>;

/**
 * pl-col组件的属性
 */
declare type ColProps = Readonly<
    {
        xs: string | number | Reponsive;
        sm: string | number | Reponsive;
        md: string | number | Reponsive;
        lg: string | number | Reponsive;
        [xl: string]: string | number | Reponsive;
    } & Reponsive
>;
