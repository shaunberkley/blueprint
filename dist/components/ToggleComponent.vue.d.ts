declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    cssClasses: {
        type: StringConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    labelCssClasses: {
        type: StringConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
}, {
    enabled: import("vue").Ref<boolean>;
    emit: (event: "updated" | "update:modelValue", ...args: any[]) => void;
    updated: (value: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("updated" | "update:modelValue")[], "updated" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    cssClasses: {
        type: StringConstructor;
        required: false;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    labelCssClasses: {
        type: StringConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        required: false;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onUpdated?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
}>;
export default _sfc_main;
