<template>
    <div>
        <p>Vue typewriter effect</p>
        <BannerComponent
            :isOpen="bannerOpen"
            :message="errorMessage"
            :timer="5000"
            @close="bannerOpen = false"
            ><template v-slot:icon>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                </svg> </template
        ></BannerComponent>
        <LoaderComponent></LoaderComponent>
        <MultiLevelDropdown @item-selected="onItemSelected">
            <DropdownItem
                v-for="(item, index) in menuItems"
                :key="index"
                :item="item"
                @item-selected="onItemSelected"
            >
                {{ item.label }}
            </DropdownItem>
        </MultiLevelDropdown>
        <h2>My File Explorer</h2>
        <button @click="showPopup = true">Move File</button>
        <FolderNavigation
            :show-popup="showPopup"
            rootId="root"
            :folders="folders"
            @move-file="moveFile"
            @close="showPopup = false"
        />
    </div>
</template>
<script lang="ts">
    import { defineComponent } from "vue";

    import MultiLevelDropdown from "./components/MultiLevelDropdownComponent.vue";
    import DropdownItem from "./components/DropdownItemComponent.vue";
    import { ref } from "vue";
    import LoaderComponent from "./components/LoaderComponent.vue";
    import BannerComponent from "./components/BannerComponent.vue";
    import FolderNavigation, {
        Folder,
    } from "./components/FolderNavigationComponent.vue";
    const bannerOpen = ref<boolean>(true);
    const errorMessage = ref<any>("Test of my banner");
    const showPopup = ref<boolean>(false);

    const folders = ref<Folder[]>([
        {
            id: "fa897b5a-b67b-485f-9f03-f560913d4e57",
            created_at: "2023-04-03T09:38:25.390737+00:00",
            name: "2022",
            parent: null,
            children: [
                {
                    id: "8e238148-2fc3-4405-b122-5565893693b6",
                    created_at: "2023-04-03T09:40:05.673423+00:00",
                    name: "Jan",
                    parent: "fa897b5a-b67b-485f-9f03-f560913d4e57",
                    children: [],
                },
                {
                    id: "b395d99c-be87-4b3b-8f5c-a65db73d5f98",
                    created_at: "2023-04-05T23:16:16.416454+00:00",
                    name: "kgvh",
                    parent: "fa897b5a-b67b-485f-9f03-f560913d4e57",
                    children: [],
                },
                {
                    id: "c5c62b2e-9f0f-4eaa-a511-4abf82972294",
                    created_at: "2023-04-07T01:00:34.116901+00:00",
                    name: "New folder",
                    parent: "fa897b5a-b67b-485f-9f03-f560913d4e57",
                    children: [
                        {
                            id: "ac9a9f36-4400-44a7-83de-736e7564ae6c",
                            created_at: "2023-04-07T05:42:05.778615+00:00",
                            name: "Nested",
                            parent: "c5c62b2e-9f0f-4eaa-a511-4abf82972294",
                            children: [],
                        },
                    ],
                },
            ],
        },
    ]);

    interface MenuItem {
        label: string;
        children?: MenuItem[];
    }

    export default defineComponent({
        components: {
            MultiLevelDropdown,
            DropdownItem,
            BannerComponent,
            LoaderComponent,
            FolderNavigation,
        },
        setup() {
            function onItemSelected(item: MenuItem) {
                console.log("Selected item:", item);
            }

            function moveFile(folderId: number) {
                console.log("File moved to folder", folderId);
                // TODO: Implement file move logic
            }

            return {
                menuItems: [
                    {
                        label: "Level 1",
                        children: [
                            {
                                label: "Level 1.1",
                                children: [
                                    { label: "Level 1.1.1" },
                                    { label: "Level 1.1.2" },
                                    {
                                        label: "Level 1.1.3",
                                        children: [
                                            { label: "Level 1.1.3.1" },
                                            { label: "Level 1.1.3.2" },
                                        ],
                                    },
                                ],
                            },
                            { label: "Level 1.2" },
                        ],
                    },
                    { label: "Level 2" },
                ],

                bannerOpen,
                errorMessage,
                showPopup,
                folders,
                onItemSelected,
                moveFile,
            };
        },
    });
</script>
<style scoped>
    .bg-red {
        background-color: red;
        font-size: 30px;
    }
</style>
