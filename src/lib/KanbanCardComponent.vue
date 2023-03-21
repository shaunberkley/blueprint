<template>
    <li
        class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
    >
        <Menu as="div" class="text-left">
            <div class="absolute top-0 right-0">
                <MenuButton
                    class="inline-flex w-full justify-center hover:bg-base-300 rounded-md px-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    <EllipsisVerticalIcon
                        class="h-5 w-5 text-gray-500"
                        aria-hidden="true"
                    />
                </MenuButton>
            </div>

            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                    class="absolute right-0 z-50 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div class="px-1 py-1">
                        <MenuItem
                            @click="update('pending')"
                            v-slot="{ active }"
                            v-if="reservation.status !== 'pending'"
                        >
                            <button
                                :class="[
                                    active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]"
                            >
                                Move to pending
                            </button>
                        </MenuItem>
                        <MenuItem
                            @click="update('accepted')"
                            v-slot="{ active }"
                            v-if="reservation.status !== 'accepted'"
                        >
                            <button
                                :class="[
                                    active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]"
                            >
                                Accept
                            </button>
                        </MenuItem>
                        <MenuItem
                            @click="update('confirmed')"
                            v-slot="{ active }"
                            v-if="reservation.status !== 'confirmed'"
                        >
                            <button
                                :class="[
                                    active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]"
                            >
                                Confirm
                            </button>
                        </MenuItem>
                        <MenuItem
                            @click="update('declined')"
                            v-slot="{ active }"
                            v-if="reservation.status !== 'declined'"
                        >
                            <button
                                :class="[
                                    active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]"
                            >
                                Decline
                            </button>
                        </MenuItem>
                        <MenuItem
                            @click="sendWaitlistEmail()"
                            v-slot="{ active }"
                            v-if="
                                reservation.status === 'declined' ||
                                reservation.status === 'pending'
                            "
                        >
                            <button
                                :class="[
                                    active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-900',
                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                ]"
                            >
                                Send waitlist email
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>

        <div class="flex items-center text-xs font-semibold rounded-full">
            <div class="flex items-center gap-2">
                <div class="w-4 h-4 shrink-0">
                    <img
                        class="w-full h-full"
                        :src="reservation.game.away_team.logo_url"
                    />
                </div>
                <div class="text-gray-900">
                    {{ reservation.game.away_team.location }}
                    {{ reservation.game.away_team.name }}
                </div>
            </div>
        </div>
        <div class="flex items-center gap-1 text-xs text-gray-400 my-2">
            <AvatarComponent
                :imageUrl="reservation.profile.avatar_url"
                :name="`${reservation.profile.first_name} ${reservation.profile.last_name}`"
                cssClasses="w-5 h-5 rounded-full"
            ></AvatarComponent>
            <div>
                {{ reservation.profile.first_name }}
                {{ reservation.profile.last_name }}
            </div>
        </div>
        <div class="flex items-center w-full text-xs text-gray-400 gap-2">
            <div class="flex items-center">
                🗓️
                <span class="ml-1 leading-none">{{
                    formatDate(reservation.game?.date.toString(), "EE MM/dd/yy")
                }}</span>
            </div>
            <div class="relative flex items-center ml-3">
                ⏰
                <span class="ml-1 leading-none">{{
                    formatDate(reservation.game.date.toString(), "h:mm aaa")
                }}</span>
            </div>
            <div class="flex items-center ml-3">
                👀
                <span class="ml-1 leading-none">{{
                    reservation.game.reservations.length
                }}</span>
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { Reservation } from "../core/types/games.model";
import { formatDate } from "../core/functions/date-format";
import { CalendarIcon, ClockIcon } from "@heroicons/vue/24/solid";
import AvatarComponent from "./AvatarComponent.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/20/solid";

export default {
    components: {
        CalendarIcon,
        ClockIcon,
        EllipsisVerticalIcon,
        AvatarComponent,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
    },
    props: {
        reservation: {
            type: Object as PropType<Reservation>,
            required: true,
        },
    },
    emits: ["updated", "sendWaitlistEmail"],
    setup(props, { emit }) {
        function update(
            status: "confirmed" | "pending" | "declined" | "accepted"
        ) {
            emit("updated", {
                reservation: props.reservation,
                status: status,
            });
            console.log("update");
        }

        function sendWaitlistEmail() {
            console.log("sending wait");
            emit("sendWaitlistEmail", props.reservation);
        }

        return {
            formatDate,
            update,
            sendWaitlistEmail,
        };
    },
};
</script>
