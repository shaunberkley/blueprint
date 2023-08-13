<template>
    <DialogComponent
        title="Move file"
        :isOpen="showPopup"
        maxWidth="w-full max-w-2xl"
        @closeModal="closePopup"
    >
        <div class="w-full">
            <div class="mt-4 p-8 pt-4 border rounded-lg">
                <div class="flex items-center py-3">
                    <button
                        :class="
                            selectedFolderId !== rootId ? 'visible' : 'hidden'
                        "
                        class="text-gray-400 hover:text-gray-800 -ml-8 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
                        @click="goBack"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                            />
                        </svg>
                    </button>
                    <h3 class="text-lg font-medium">{{ currentFolder }}</h3>
                </div>
                <div>
                    <button
                        v-for="folder in toRaw(visibleFolders)"
                        :key="folder.id"
                        class="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
                        @click="selectFolder(folder)"
                        :class="{
                            'selected bg-gray-100':
                                folder.id === selectedFolderId,
                        }"
                    >
                        <span>{{ folder.name }}</span>
                        <span v-if="folder.children"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-4 h-4 text-gray-400"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div class="mt-4 flex justify-end gap-4">
                <ButtonComponent
                    @click="moveFileHere"
                    :style="'primary'"
                    :disabled="selectedFolderId === null"
                >
                    Move Here
                </ButtonComponent>
                <ButtonComponent @click="closePopup" :style="'secondary'">
                    Cancel
                </ButtonComponent>
            </div>
        </div>
    </DialogComponent>
</template>

<script lang="ts">
    import {
        defineComponent,
        PropType,
        ref,
        computed,
        watch,
        toRaw,
    } from "vue";
    import { ButtonComponent } from "..";
    import DialogComponent from "./DialogComponent.vue";

    export interface Folder {
        id: string;
        created_at: Date | string;
        parent: string | null;
        name: string;
        children: Folder[] | undefined;
    }

    export default defineComponent({
        name: "FolderNavigation",

        components: { DialogComponent, ButtonComponent },
        props: {
            showPopup: {
                type: Boolean as PropType<boolean>,
                required: true,
            },
            folders: {
                type: Array as PropType<Folder[]>,
                required: true,
            },
            rootId: {
                type: String,
                required: true,
            },
        },
        emits: ["move-file", "close"],
        setup(props, { emit }) {
            const selectedFolderId = ref<string | null>(props.rootId);
            const currentFolder = computed(() => {
                const folder = findFolderById(
                    props.folders,
                    selectedFolderId.value ?? props.rootId
                );
                console.log(props.folders);
                return folder ? folder.name : "Root";
            });

            const visibleFolders = computed(() => {
                const currentFolderId = selectedFolderId.value ?? props.rootId;
                const folder = findFolderById(props.folders, currentFolderId);
                return folder && folder.children ? folder.children : [];
            });

            function selectFolder(folder: Folder) {
                selectedFolderId.value = folder.id;
            }

            function moveFileHere() {
                if (selectedFolderId.value !== null) {
                    emit("move-file", selectedFolderId.value);
                }
                selectedFolderId.value = null;
                emit("close");
            }

            function goBack() {
                if (
                    selectedFolderId.value !== null &&
                    selectedFolderId.value !== props.rootId
                ) {
                    const folder = findFolderById(
                        props.folders,
                        selectedFolderId.value
                    );
                    if (folder && folder.parent !== null) {
                        selectedFolderId.value = folder.parent;
                    }
                }
            }

            function closePopup() {
                emit("close");
                selectedFolderId.value = null;
            }

            function findFolderById(
                folders: Folder[],
                id: string
            ): Folder | null {
                for (const folder of folders) {
                    if (folder.id === id) {
                        return folder;
                    } else if (folder.children) {
                        const found = findFolderById(folder.children || [], id);
                        if (found !== null) {
                            return found;
                        }
                    }
                }
                return null;
            }

            watch(
                () => props.showPopup,
                (showPopup) => {
                    if (!showPopup) {
                        selectedFolderId.value = null;
                    }
                }
            );

            return {
                currentFolder,
                visibleFolders,
                selectedFolderId,
                selectFolder,
                moveFileHere,
                goBack,
                closePopup,
                toRaw,
            };
        },
    });
</script>
