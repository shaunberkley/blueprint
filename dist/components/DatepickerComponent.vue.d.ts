export interface SelectItem {
    value: any;
    label: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: DateConstructor;
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
    enableDateTime: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    updated: (value: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: DateConstructor;
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
    enableDateTime: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    required: boolean;
    readOnly: boolean;
    enableDateTime: boolean;
}>;
export default _sfc_main;
