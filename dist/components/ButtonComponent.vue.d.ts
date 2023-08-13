import { PropType } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    cssClasses: {
        type: StringConstructor;
        required: false;
    };
    buttonStyle: {
        type: PropType<"primary" | "secondary" | undefined>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    defaultCssClasses: string;
    secondaryStyling: string;
    primaryStyling: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    cssClasses: {
        type: StringConstructor;
        required: false;
    };
    buttonStyle: {
        type: PropType<"primary" | "secondary" | undefined>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    buttonStyle: "primary" | "secondary" | undefined;
    disabled: boolean;
    loading: boolean;
}>;
export default _sfc_main;
