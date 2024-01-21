export type Position = {
    // 当前pos索引
    index: number
    // 元素顶部所处位置
    top: number
    // 元素底部所处位置
    bottom: number
    // 元素高度
    height: number
    // 高度差，判断更新
    dHeight: number
}