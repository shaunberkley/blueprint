<template>
    <div class="flex h-full">
        <div class="w-full h-full">
            <div class="w-full h-full overflow-auto">
                <slot></slot>
            </div>
        </div>
        <aside
            v-if="canEdit()"
            :class="!activeItemId ? 'flex' : 'hidden'"
            class="w-full sm:max-w-[28rem] flex-shrink-0 border-r border-gray-200 xl:order-first xl:flex flex-col"
        >
            <div class="px-6 pt-6 pb-4">
                <div class="flex items-center justify-between">
                    <h2 class="text-lg font-medium text-gray-900">Directory</h2>
                    <div class="flex items-center gap-3">
                        <button
                            class="btn btn-outline !hover:bg-transparent !bg-transparent !py-0 !px-3 !rounded-lg !min-h-8 !h-8 flex items-center"
                            @click="pendingInvitesModalOpen = true"
                        >
                            <ClockIcon
                                class="h-5 w-5 text-neutral"
                                aria-hidden="true"
                            />
                        </button>
                        <button
                            class="btn btn-primary !py-0 !px-3 !rounded-lg !min-h-8 !h-8 flex items-center"
                            @click="openInviteUser"
                        >
                            <PlusIcon class="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <p class="mt-1 text-sm text-gray-600">
                    Search directory of {{ items?.length ?? "" }}
                    {{ itemsLabel.toLowerCase() }}
                </p>
                <form class="mt-6 flex space-x-4" action="#">
                    <div class="min-w-0 flex-1">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative rounded-md shadow-sm">
                            <div
                                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                            >
                                <MagnifyingGlassIcon
                                    class="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                class="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Search"
                                v-model="searchText"
                                @keyup="search()"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <!-- Directory list -->
            <nav class="min-h-0 flex-1 overflow-y-auto" aria-label="Directory">
                <div
                    v-for="grouping in groupingItems"
                    :key="grouping.letter"
                    class="relative"
                >
                    <div
                        class="sticky top-0 z-10 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                    >
                        <h3>{{ grouping.letter }}</h3>
                    </div>
                    <ul
                        role="list"
                        class="relative z-0 divide-y divide-gray-200"
                    >
                        <li v-for="item in grouping.subItems" :key="item.id">
                            <router-link
                                active-class="bg-gray-50 text-gray-900"
                                exact-active-class="bg-gray-50 text-gray-900"
                                :to="`/${itemsLabel.toLowerCase()}/${item.id}`"
                                class="relative flex items-center space-x-3 px-6 py-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:bg-gray-50"
                            >
                                <div class="flex-shrink-0">
                                    <AvatarComponent
                                        :image-url="item?.imageUrl"
                                        :name="item?.name"
                                        :cssClasses="'h-16 w-16 text-gray-500 border p-2 text-2xl'"
                                    ></AvatarComponent>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <div>
                                        <!-- Extend touch target to entire panel -->
                                        <span
                                            class="absolute inset-0"
                                            aria-hidden="true"
                                        />
                                        <p
                                            class="text-sm font-medium text-gray-900"
                                        >
                                            {{ item.name }}
                                        </p>
                                        <p
                                            class="truncate text-sm text-gray-500"
                                        >
                                            {{ item.subheading }}
                                        </p>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    </div>

    <DialogComponent
        :isOpen="inviteUserDialogOpen"
        :title="'Invite User'"
        :disableClose="true"
        maxWidth="w-[500px]"
    >
        <InviteUserComponent
            v-if="profileRoles"
            :profileRoles="profileRoles"
            @save="initiateInviteUser"
            @close="inviteUserDialogOpen = false"
        >
        </InviteUserComponent>
    </DialogComponent>

    <DialogComponent
        title=""
        :isOpen="pendingInvitesModalOpen"
        @closeModal="pendingInvitesModalOpen = false"
        max-width="max-w-[1080px]"
    >
        <div class="mt-8">
            <PendingInvitesComponent></PendingInvitesComponent>
        </div>
    </DialogComponent>
</template>

<script lang="ts">
import { supabase } from "../core/functions/supabase";
import {
    FunnelIcon,
    MagnifyingGlassIcon,
    ChevronLeftIcon,
    PlusIcon,
} from "@heroicons/vue/20/solid";
import { ClockIcon } from "@heroicons/vue/24/outline";
import { onMounted, ref, watch, type PropType } from "vue";
import { simpleSearch } from "../core/functions/search";
import AvatarComponent from "../components/AvatarComponent.vue";
import InviteUserComponent from "../components/InviteUserComponent.vue";

import { userProfileStore } from "../store";
import { canEdit, inviteUser } from "../core/functions/user";
import DialogComponent from "./DialogComponent.vue";
import PendingInvitesComponent from "./PendingInvitesComponent.vue";
import type { InvitedUser } from "../core/types/user.model";
import type { SelectItem } from "./SelectComponent.vue";
import type { Role } from "../views/Users.vue";

export interface DirectoryItem {
    id: string;
    name: string;
    subheading: string;
    imageUrl: string;
}

export interface Item {
    name: string;
    subheading?: string | Date;
    id: string;
    imageUrl?: string;
    category?: string;
}

export interface LetterGrouping {
    letter: string;
    subItems: Item[];
}

export interface FilterItem {
    label: string;
    value: string;
    property: string;
    includesMatch?: boolean;
}

export default {
    components: {
        FunnelIcon,
        MagnifyingGlassIcon,
        ChevronLeftIcon,
        ClockIcon,
        PlusIcon,
        AvatarComponent,
        DialogComponent,
        PendingInvitesComponent,
        InviteUserComponent,
    },
    props: {
        items: {
            type: Array as PropType<DirectoryItem[] | []>,
            default: [],
        },
        activeItemId: {
            type: String,
            default: "",
        },
        itemLabel: {
            type: String,
            default: "",
        },
        itemsLabel: {
            type: String,
            default: "items",
        },
        sortMode: {
            type: String as PropType<"default" | "lastName">,
            default: "default",
        },
        filterItems: {
            type: Array as PropType<FilterItem[] | []>,
            default: [],
        },
    },
    setup(props) {
        let groupingItems = ref<LetterGrouping[] | []>([]);
        let searchText = ref<string>("");

        const profileRoles = ref<SelectItem[]>();
        const pendingInvitesModalOpen = ref<boolean>(false);
        const inviteUserDialogOpen = ref<boolean>(false);

        onMounted(() => {
            console.log(props.items);
            getProfileRoles();
            if (props.items?.length)
                groupingItems.value = groupNames(props.items);
        });

        watch(props, () => {
            console.log(props.items);
            if (props.items?.length)
                groupingItems.value = groupNames(props.items);
        });

        const userProfile = userProfileStore();

        async function getProfileRoles() {
            const { data, error } = await supabase.from("roles").select(`*`);
            profileRoles.value = data?.map((role: Role) => {
                return { label: role.name, value: role.id };
            }) as SelectItem[];
        }

        function groupNames(arr: Item[]): LetterGrouping[] {
            const map = arr.reduce((acc: any, val: any) => {
                let char;
                if (props.sortMode === "default")
                    char = val.name.split(" ").shift().charAt(0).toUpperCase();
                if (props.sortMode === "lastName")
                    char = val.name.split(" ").pop().charAt(0).toUpperCase();
                acc[char] = [].concat(acc[char] || [], val);
                return acc;
            }, {});
            const res: LetterGrouping[] = Object.keys(map).map((el) => ({
                letter: el,
                subItems: map[el],
            }));
            console.log(res);
            return res.sort((a: LetterGrouping, b: LetterGrouping) =>
                a.letter.localeCompare(b.letter)
            );
        }

        function search() {
            const newItems: Item[] = simpleSearch(
                searchText.value,
                props.items,
                "name"
            );
            groupingItems.value = groupNames(newItems);
        }

        async function initiateInviteUser(invitedUser: InvitedUser) {
            await inviteUser(invitedUser);
            inviteUserDialogOpen.value = false;
        }

        async function openInviteUser() {
            inviteUserDialogOpen.value = true;
        }

        return {
            groupingItems,
            searchText,
            userProfile,
            pendingInvitesModalOpen,
            inviteUserDialogOpen,
            profileRoles,
            search,
            canEdit,
            initiateInviteUser,
            openInviteUser,
        };
    },
};
</script>
