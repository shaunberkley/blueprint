declare const _sfc_main: import("vue").DefineComponent<{
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    titleButtonEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxWidth: {
        type: StringConstructor;
        required: false;
    };
    maxHeight: {
        type: StringConstructor;
        required: false;
    };
}, {
    closeModal: () => void;
    titleButtonClicked: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    titleButtonEnabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxWidth: {
        type: StringConstructor;
        required: false;
    };
    maxHeight: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    isOpen: boolean;
    titleButtonEnabled: boolean;
    disableClose: boolean;
}>;
export default _sfc_main;
