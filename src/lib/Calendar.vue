<template>
    <section
        v-if="month && month.calendar"
        class="relative rounded-lg overflow-hidden ring-1 ring-base-300 shadow-xl"
    >
        <header
            class="flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none"
        >
            <h1 class="text-lg font-semibold">
                <time :attr.datetime="`${month.year}-${month.month}`"
                    >{{ month.month }} {{ month.year }}</time
                >
            </h1>
            <div class="flex items-center">
                <div
                    class="flex items-center rounded-md shadow-sm md:items-stretch"
                >
                    <button
                        type="button"
                        @click="previousMonth"
                        class="flex items-center justify-center rounded-l-full border border-neutral border-r-0 bg-white py-2 pl-3 pr-4 focus:relative md:w-9 md:px-2 md:hover:bg-gray-100"
                    >
                        <span class="sr-only">Previous month</span>
                        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                        @click="goToCurrentMonth"
                        type="button"
                        class="hidden border-t border-b border-neutral bg-white px-3.5 text-sm font-medium hover:bg-gray-100 focus:relative md:block"
                    >
                        Today
                    </button>
                    <span
                        class="relative -mx-px h-5 w-px text-secondary-content md:hidden"
                    />
                    <button
                        type="button"
                        @click="nextMonth"
                        class="flex items-center justify-center rounded-r-full border border-l-0 border-neutral bg-white py-2 pl-4 pr-3 focus:relative md:w-9 md:px-2 md:hover:bg-gray-100"
                    >
                        <span class="sr-only">Next month</span>
                        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden md:flex md:items-center">
                    <Menu as="div" class="relative hidden">
                        <MenuButton
                            type="button"
                            class="flex items-center rounded-full border border-neutral-content bg-secondary py-2 pl-3 pr-2 text-sm font-medium shadow-sm hover:bg-secondary-focus"
                        >
                            Month view
                            <ChevronDownIcon
                                class="ml-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </MenuButton>

                        <transition
                            enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95"
                        >
                            <MenuItems
                                class="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-neutral ring-opacity-5 focus:outline-none"
                            >
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                        <a
                                            href="#"
                                            :class="[
                                                active
                                                    ? 'bg-base-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm',
                                            ]"
                                            >Day view</a
                                        >
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <a
                                            href="#"
                                            :class="[
                                                active
                                                    ? 'bg-base-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm',
                                            ]"
                                            >Week view</a
                                        >
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <a
                                            href="#"
                                            :class="[
                                                active
                                                    ? 'bg-base-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm',
                                            ]"
                                            >Month view</a
                                        >
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <a
                                            href="#"
                                            :class="[
                                                active
                                                    ? 'bg-base-100 text-gray-900'
                                                    : 'text-gray-700',
                                                'block px-4 py-2 text-sm',
                                            ]"
                                            >Year view</a
                                        >
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                    <div v-if="userCanEdit" class="ml-6 h-6 w-px bg-gray-300" />
                    <button
                        v-if="userCanEdit"
                        class="btn btn-primary ml-6 !h-auto py-1"
                        @click="addGame"
                    >
                        Add game
                    </button>
                </div>
                <Menu as="div" class="relative ml-6 md:hidden">
                    <MenuButton
                        class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
                    >
                        <span class="sr-only">Open menu</span>
                        <EllipsisHorizontalIcon
                            class="h-5 w-5"
                            aria-hidden="true"
                        />
                    </MenuButton>

                    <transition
                        enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95"
                    >
                        <MenuItems
                            class="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-neutral ring-opacity-5 focus:outline-none"
                        >
                            <div class="py-1" v-if="userCanEdit">
                                <MenuItem v-slot="{ active }" @click="addGame">
                                    <a
                                        href="#"
                                        :class="[
                                            active
                                                ? 'bg-base-100 text-gray-900'
                                                : 'text-gray-700',
                                            'block px-4 py-2 text-sm',
                                        ]"
                                        >Add game</a
                                    >
                                </MenuItem>
                            </div>
                            <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                    <button
                                        @click="goToCurrentMonth"
                                        :class="[
                                            active
                                                ? 'bg-base-100 text-gray-900'
                                                : 'text-gray-700',
                                            'block px-4 py-2 text-sm w-full text-left',
                                        ]"
                                    >
                                        Go to today
                                    </button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </header>
        <div
            class="relative ring-1 ring-neutral ring-opacity-5 lg:flex lg:flex-auto lg:flex-col"
        >
            <div
                class="grid grid-cols-7 gap-px border-b border-base-300 text-xs font-semibold leading-6 lg:flex-none"
            >
                <div
                    class="flex justify-center py-2"
                    v-for="weekday in weekdaysAbbr"
                >
                    {{ weekday }}
                </div>
            </div>
            <div class="isolate grid grid-cols-7 gap-px bg-base-300 text-xs">
                <button
                    type="button"
                    @click="dayClicked(day)"
                    v-for="(day, i) in month.calendar"
                    :key="i"
                    :class="[
                        day.day === 0
                            ? 'bg-base-100 opacity-70'
                            : 'bg-base-100',
                    ]"
                    class="flex flex-col justify-between items-center sm:items-stretch relative py-1.5 px-1.5 sm:py-3 sm:px-3 hover:bg-base-100 focus:z-10 text-center sm:min-h-[130px]"
                >
                    <time
                        :attr.dateTime="day.date"
                        :class="
                            today.getDate() === day.day &&
                            today.getMonth() === currentMonthIndex &&
                            today.getFullYear() === currentYear
                                ? 'bg-primary font-semibold text-white'
                                : ''
                        "
                        class="flex h-7 w-7 items-center justify-center rounded-full font-bold"
                    >
                        {{ day.day > 0 ? day.day : "" }}
                    </time>
                    <ol class="mt-2 sm:mt-8">
                        <li v-for="game in day.games">
                            <div
                                class="text-center sm:text-right mb-1 sm:mb-3 sm:text-sm"
                            >
                                {{ getGameStatus(game) }}
                            </div>
                            <div
                                class="group flex justify-center flex-col sm:flex-row"
                            >
                                <p
                                    class="flex items-center flex-auto truncate font-medium"
                                >
                                    <img
                                        class="h-2.5 sm:h-4 mr-2"
                                        :src="game.away_team.logo_url"
                                    />
                                    <span>{{
                                        game.away_team.abbreviation
                                    }}</span>
                                </p>
                                <time
                                    :attr.datetime="game.date"
                                    class="text-xs sm:text-sm mt-1 sm:mt-0 sm:ml-3 flex-none xl:block"
                                    >{{
                                        formatDate(
                                            game.date.toString(),
                                            "h:mmaaa"
                                        )
                                    }}</time
                                >
                            </div>
                        </li>
                    </ol>
                    <div
                        v-if="
                            eventDates &&
                            day.date &&
                            eventDates.includes(day.date.getTime())
                        "
                        class="w-3 h-3 rounded-full bg-primary"
                    ></div>
                </button>
            </div>
            <div
                v-if="selectYearMode"
                class="absolute top-0 left-0 mt-1 w-full h-full bg-white z-20"
            >
                <SelectComponent
                    @updated="selectYear($event.value)"
                    :items="availableYears"
                    label="Select year"
                ></SelectComponent>
            </div>
        </div>
    </section>

    <section
        class="px-4 sm:px-0 mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm justify-between text-gray-500 font-light"
    >
        <button
            class="btn btn-outline sm:ml-6 !h-10 !min-h-8 !py-1"
            @click="howItWorksDialogOpen = true"
        >
            How does this work?
        </button>
        <div class="flex flex-col gap-2">
            <div>✅ Game available</div>
            <div>👀 People interested in game</div>
            <div>🚫 Game reserved</div>
            <div>⚫️ Game blacked-out</div>
        </div>
    </section>

    <HowItWorksDialogComponent
        :modalOpen="howItWorksDialogOpen"
        @close="howItWorksDialogOpen = false"
    ></HowItWorksDialogComponent>
</template>

<script setup lang="ts">
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockIcon,
    EllipsisHorizontalIcon,
} from "@heroicons/vue/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { onMounted, ref, type PropType } from "vue";
import calendar from "calendar-js";
import type {
    CalendarItem,
    CalendarObject,
} from "../core/types/calendar.model";
import { formatDate } from "../core/functions/date-format";

import type { SelectItem } from "../components/SelectComponent.vue";
import SelectComponent from "../components/SelectComponent.vue";
import type { Game } from "../core/types/games.model";
import { getGameStatus } from "../core/functions/games";
import router from "../router";
import { userProfileStore } from "../store";
import { canEdit } from "../core/functions/user";
import { useAuthStore } from "../store/auth";
import HowItWorksDialogComponent from "../components/HowItWorksDialogComponent.vue";

const emit = defineEmits([
    "openAddGame",
    "selectGame",
    "startMonth",
    "startYear",
]);

const props = defineProps({
    games: Array as PropType<Game[]>,
    startMonth: Number,
    startYear: Number,
});

let today = new Date();
let weekdaysAbbr = calendar().weekdaysAbbr();

const howItWorksDialogOpen = ref<boolean>(false);

let eventDates!: number[];

const selectYearMode = ref<boolean>(false);

const availableYears = ref<SelectItem[]>();

const currentMonthIndex = ref<number>(props.startMonth ?? 2);
const currentYear = ref<number>(props.startYear ?? today.getFullYear());
const month = ref<CalendarObject>(getFormattedMonth());

const userCanEdit = ref<boolean>(false);

onMounted(() => {
    const range = (start: number, stop: number, step: number) =>
        Array.from(
            { length: (stop - start) / step + 1 },
            (_, i) => start + i * step
        );
    availableYears.value = range(
        currentYear.value + 1,
        currentYear.value - 1,
        -1
    ).map((year: number) => {
        return { label: year.toString(), value: year.toString() };
    });

    if (useAuthStore().currentUser?.user?.id) {
        console.log(canEdit());
        if (canEdit()) userCanEdit.value = true;
    }
});

function previousMonth() {
    currentYear.value =
        currentMonthIndex.value === 0
            ? currentYear.value - 1
            : currentYear.value;
    currentMonthIndex.value =
        currentMonthIndex.value === 0 ? 11 : currentMonthIndex.value - 1;
    month.value = getFormattedMonth();
    router.push({
        name: "schedule date",
        params: { date: `${currentYear.value}-${currentMonthIndex.value + 1}` },
    });
}

function nextMonth() {
    currentYear.value =
        currentMonthIndex.value === 11
            ? currentYear.value + 1
            : currentYear.value;
    currentMonthIndex.value = (currentMonthIndex.value + 1) % 12;
    month.value = getFormattedMonth();
    router.push({
        name: "schedule date",
        params: { date: `${currentYear.value}-${currentMonthIndex.value + 1}` },
    });
}

function goToCurrentMonth() {
    const today = new Date();
    currentMonthIndex.value = today.getMonth() - 1;
    currentYear.value = today.getFullYear();
    currentMonthIndex.value = (currentMonthIndex.value + 1) % 12;
    month.value = getFormattedMonth();
    router.push({
        name: "schedule date",
        params: { date: `${currentYear.value}-${currentMonthIndex.value + 1}` },
    });
}

function selectYear(value: number | string) {
    currentYear.value = Number(value);
    month.value = getFormattedMonth();
    selectYearMode.value = false;
}

function getFormattedMonth() {
    const calendarObject: CalendarObject = calendar().of(
        currentYear.value,
        currentMonthIndex.value
    ) as unknown as CalendarObject;
    const calendarArr = calendarObject.calendar.flat().map((e: any) => {
        const date =
            e > 0
                ? new Date(
                      `${currentMonthIndex.value + 1}/${e}/${currentYear.value}`
                  )
                : "";
        return {
            day: e,
            date: date,
            games: props.games?.filter((game: Game) => {
                const gameDate = new Date(game.date);
                if (!date) return;
                return (
                    gameDate.getFullYear() === date.getFullYear() &&
                    gameDate.getMonth() === date.getMonth() &&
                    gameDate.getDate() === date.getDate()
                );
            }),
        };
    });
    calendarObject.calendar = calendarArr as any;
    return calendarObject;
}

function dayClicked(day: any) {
    emit("selectGame", day.games[0]);
}

function addGame() {
    console.log("111");
    emit("openAddGame");
}

userProfileStore().$subscribe((e) => {
    if (canEdit()) userCanEdit.value = true;
});
</script>
