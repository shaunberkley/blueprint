import { PropType, toRaw } from "vue";
export interface Folder {
    id: string;
    created_at: Date | string;
    parent: string | null;
    name: string;
    children: Folder[] | undefined;
}
declare const _sfc_main: import("vue").DefineComponent<{
    showPopup: {
        type: PropType<boolean>;
        required: true;
    };
    folders: {
        type: PropType<Folder[]>;
        required: true;
    };
    rootId: {
        type: StringConstructor;
        required: true;
    };
}, {
    currentFolder: import("vue").ComputedRef<string>;
    visibleFolders: import("vue").ComputedRef<Folder[]>;
    selectedFolderId: import("vue").Ref<string | null>;
    selectFolder: (folder: Folder) => void;
    moveFileHere: () => void;
    goBack: () => void;
    closePopup: () => void;
    toRaw: typeof toRaw;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "move-file")[], "close" | "move-file", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    showPopup: {
        type: PropType<boolean>;
        required: true;
    };
    folders: {
        type: PropType<Folder[]>;
        required: true;
    };
    rootId: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onMove-file"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
