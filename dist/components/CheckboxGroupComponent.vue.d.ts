import { PropType } from "vue";
export interface CheckboxItem {
    label: string;
    value: any;
}
declare const _sfc_main: import("vue").DefineComponent<{
    itemName: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    items: {
        type: PropType<[] | CheckboxItem[]>;
        default: never[];
    };
    modelValue: {
        type: PropType<[] | CheckboxItem[]>;
        default: never[];
    };
}, {
    isItemChecked: (item: CheckboxItem) => boolean;
    update: (item: CheckboxItem, checked: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    itemName: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    items: {
        type: PropType<[] | CheckboxItem[]>;
        default: never[];
    };
    modelValue: {
        type: PropType<[] | CheckboxItem[]>;
        default: never[];
    };
}>>, {
    items: [] | CheckboxItem[];
    itemName: string;
    title: string;
    modelValue: [] | CheckboxItem[];
}>;
export default _sfc_main;
