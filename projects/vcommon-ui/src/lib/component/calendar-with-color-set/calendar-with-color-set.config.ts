/*
 * @Author: your name
 * @Date: 2019-12-16 19:07:02
 * @LastEditTime: 2019-12-17 14:47:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ViaeouCommonUI/projects/vcommon-ui/src/lib/component/calendar-with-color-set/calendar-with-color-set.config.ts
 */
export class CalendarWithColorSetConfig {
    // 图标颜色
    public iconColor?: string;
    // 输入框宽度
    public inputWidth?: number;
    // 输入框高度
    public inputHeight?: number;
    // 显示日期值
    public date?: Date;
    // 起始日期值
    public startDate?: Date;
    // 终止日期值
    public endDate?: Date;
    // 日期选择框宽度是否自适应输入框宽度 true 自适应 false 自定义
    public rescalePanel?: boolean;
    // 自定义panel宽度 只有在rescalePanel为false时生效
    public panelWidth?: number;
    // 自定义panel高度 只有在rescalePanel为false时生效
    public panelHeight?: number;
    // placeholder
    public placeholder?: string;
    // 是否需要清空按钮
    public needClear?: boolean;
}