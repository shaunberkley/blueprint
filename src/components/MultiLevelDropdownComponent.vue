<template>
    <div class="relative inline-block text-left">
        <Menu>
            <MenuButton
                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
                Open dropdown
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 ml-2 -mr-1 text-white"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </MenuButton>
            <MenuItems
                class="absolute w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
                <div class="px-1 py-1">
                    <slot></slot>
                </div>
            </MenuItems>
        </Menu>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

    export default defineComponent({
        components: {
            Menu,
            MenuButton,
            MenuItems,
            MenuItem,
        },
    });
</script>
