<template>
    <nav v-if="rootItem && items" class="flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4 flex-wrap ml-5">
            <li class="flex items-center -ml-5">
                <button
                    @click="selectBreadcrumb(rootItem)"
                    class="text-gray-400 hover:text-gray-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-5 w-5 flex-shrink-0"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>

                    <span class="sr-only">Home</span>
                </button>
            </li>
            <li v-for="item in items" :key="item.name">
                <div class="flex items-center">
                    <span class="text-gray-400">|</span>
                    <button
                        @click="selectBreadcrumb(item)"
                        class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                        {{ item.name }}
                    </button>
                </div>
            </li>
            <li class="flex items-center -ml-5">
                <span class="text-gray-400">|</span>
                <button class="ml-4 text-gray-700 text-sm font-semibold">
                    {{ currentItem?.name }}
                </button>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts">
    import type { PropType } from "vue";
    import { defineComponent } from "vue";
    import type { File, Folder } from "./breadcrumbs.model";

    export default defineComponent({
        props: {
            rootItem: {
                type: Object as PropType<Folder | undefined> | undefined,
                required: true,
            },
            currentItem: {
                type: Object as PropType<Folder | undefined> | undefined,
                required: true,
            },
            items: {
                type: Object as PropType<Folder[] | undefined> | undefined,
                required: true,
            },
        },
        emits: ["selectBreadcrumb"],
        setup(props, { emit }) {
            function selectBreadcrumb(item: Folder | undefined) {
                emit("selectBreadcrumb", item);
            }

            return {
                selectBreadcrumb,
            };
        },
    });
</script>
