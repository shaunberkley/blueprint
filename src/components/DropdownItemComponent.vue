<template>
    <div
        v-if="!hasChildren"
        @click="handleClick"
        class="group flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-indigo-500 hover:text-white cursor-pointer"
    >
        <slot></slot>
    </div>
    <div v-else class="relative group">
        <div
            @click="handleClick"
            class="flex items-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-indigo-500 hover:text-white cursor-pointer"
        >
            <slot></slot>
            <span class="ml-auto">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 mr-2 text-gray-500 inline"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </span>
        </div>
        <div
            class="absolute top-0 left-full mt-1 min-w-full origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 sm:left-0 sm:-top-full sm:mt-0"
            v-show="showChildren"
        >
            <div class="px-1 py-1">
                <DropdownItemComponent
                    v-for="(child, childIndex) in children"
                    :key="childIndex"
                    :item="child"
                    @item-selected="onItemSelected"
                >
                    {{ child.label }}
                </DropdownItemComponent>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType, ref } from "vue";
    import { MenuItem } from "@headlessui/vue";

    interface MenuItem {
        label: string;
        children?: MenuItem[];
    }

    export default defineComponent({
        components: {
            MenuItem,
        },
        props: {
            item: {
                type: Object as PropType<MenuItem>,
                default: () => ({}),
            },
        },
        computed: {
            hasChildren(): boolean {
                return !!(this.item.children && this.item.children.length > 0);
            },
            children(): MenuItem[] {
                return this.item.children || [];
            },
        },
        setup() {
            const showChildren = ref(false);

            function handleClick() {
                showChildren.value = !showChildren.value;
            }

            function onItemSelected(selectedItem: MenuItem) {
                showChildren.value = false;
                //   $emit("item-selected", selectedItem);
            }

            return {
                showChildren,
                handleClick,
                onItemSelected,
            };
        },
    });
</script>
