<template>
    <Listbox
        as="div"
        :disabled="readOnly || disabled"
        :modelValue="modelValue"
        @update:modelValue="(value) => updated(value)"
    >
        <ListboxLabel
            v-if="label"
            class="block text-sm font-medium text-gray-700"
            >{{ label }}{{ required ? "*" : "" }}</ListboxLabel
        >
        <div class="relative mt-1">
            <ListboxButton
                :class="[
                    readOnly
                        ? 'border-transparent !p-0'
                        : 'border-gray-300 py-2 pl-3 pr-10',
                    disabled
                        ? 'border-gray-300 py-2 pl-3 pr-10 bg-gray-50'
                        : 'border-gray-300 py-2 pl-3 pr-10',
                    inputCssClasses ??
                        'relative w-full cursor-pointer rounded-md border border-gray-300 bg-white text-left focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm',
                ]"
            >
                <span class="block truncate">{{
                    modelValue?.label ?? "Select an option"
                }}</span>
                <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                >
                    <ChevronUpDownIcon
                        v-if="!readOnly"
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                </span>
            </ListboxButton>

            <transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                    <ListboxOption
                        as="template"
                        key="00"
                        :value="undefined"
                        :disabled="true"
                        v-slot="{ active, modelValue }"
                    >
                        <li
                            :class="[
                                active
                                    ? 'text-white bg-blue-600'
                                    : 'text-gray-500',
                                'relative cursor-pointer select-none py-2 pl-3 pr-9',
                            ]"
                        >
                            <span
                                :class="[
                                    modelValue
                                        ? 'font-semibold'
                                        : 'font-normal',
                                    'block truncate',
                                ]"
                                >Select an option</span
                            >

                            <span
                                v-if="modelValue"
                                :class="[
                                    active ? 'text-white' : 'text-blue-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                ]"
                            >
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                    <ListboxOption
                        as="template"
                        v-for="item in items"
                        :key="item.value"
                        :value="item"
                        v-slot="{ active, modelValue }"
                    >
                        <li
                            :class="[
                                active
                                    ? 'text-white bg-blue-600'
                                    : 'text-gray-900',
                                'relative cursor-pointer select-none py-2 pl-3 pr-9',
                            ]"
                        >
                            <span
                                :class="[
                                    modelValue
                                        ? 'font-semibold'
                                        : 'font-normal',
                                    'block truncate',
                                ]"
                                >{{ item.label }}</span
                            >

                            <span
                                v-if="modelValue"
                                :class="[
                                    active ? 'text-white' : 'text-blue-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                ]"
                            >
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script lang="ts">
import { ref } from "vue";
import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import type { PropType } from "vue";

export interface SelectItem {
    value: any;
    label: string;
}

export default {
    props: {
        items: {
            type: Array as PropType<SelectItem[] | []>,
            default: [],
        },
        modelValue: {
            type: Object as PropType<SelectItem>,
        },
        required: {
            type: Boolean,
            required: false,
            default: false,
        },
        labelCssClasses: {
            type: String,
            required: false,
        },
        inputCssClasses: {
            type: String,
            required: false,
        },
        readOnly: {
            type: Boolean,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
        id: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
    },
    components: {
        Listbox,
        ListboxButton,
        ListboxLabel,
        ListboxOption,
        ListboxOptions,
        CheckIcon,
        ChevronUpDownIcon,
    },
    setup(props, { emit }) {
        function updated(value: any) {
            emit("update:modelValue", value);
            emit("updated", value);
        }

        return {
            updated,
        };
    },
};
</script>
