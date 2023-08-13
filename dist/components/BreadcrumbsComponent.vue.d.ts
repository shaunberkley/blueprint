import type { PropType } from "vue";
import type { Folder } from "./breadcrumbs.model";
declare const _sfc_main: import("vue").DefineComponent<{
    rootItem: {
        type: PropType<Folder | undefined> | undefined;
        required: true;
    };
    currentItem: {
        type: PropType<Folder | undefined> | undefined;
        required: true;
    };
    items: {
        type: PropType<Folder[] | undefined> | undefined;
        required: true;
    };
}, {
    selectBreadcrumb: (item: Folder | undefined) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "selectBreadcrumb"[], "selectBreadcrumb", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    rootItem: {
        type: PropType<Folder | undefined> | undefined;
        required: true;
    };
    currentItem: {
        type: PropType<Folder | undefined> | undefined;
        required: true;
    };
    items: {
        type: PropType<Folder[] | undefined> | undefined;
        required: true;
    };
}>> & {
    onSelectBreadcrumb?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
