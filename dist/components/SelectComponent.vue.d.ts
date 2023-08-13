import type { PropType } from "vue";
export interface SelectItem {
    value: any;
    label: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    items: {
        type: PropType<[] | SelectItem[]>;
        default: never[];
    };
    modelValue: {
        type: PropType<SelectItem>;
    };
    required: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    labelCssClasses: {
        type: StringConstructor;
        required: false;
    };
    inputCssClasses: {
        type: StringConstructor;
        required: false;
    };
    readOnly: {
        type: BooleanConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    name: {
        type: StringConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
}, {
    updated: (value: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<[] | SelectItem[]>;
        default: never[];
    };
    modelValue: {
        type: PropType<SelectItem>;
    };
    required: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    labelCssClasses: {
        type: StringConstructor;
        required: false;
    };
    inputCssClasses: {
        type: StringConstructor;
        required: false;
    };
    readOnly: {
        type: BooleanConstructor;
        required: false;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    name: {
        type: StringConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    required: boolean;
    items: [] | SelectItem[];
    disabled: boolean;
    readOnly: boolean;
}>;
export default _sfc_main;
