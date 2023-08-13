<template>
    <label
        v-if="label"
        :for="id ?? name"
        :class="labelCssClasses ?? 'block text-sm font-medium text-gray-700'"
        >{{ label }}{{ required ? "*" : "" }}</label
    >
    <Datepicker
        :modelValue="modelValue"
        auto-apply
        :enable-time-picker="!!enableDateTime"
        :is-24="!!enableDateTime ? false : undefined"
        :disabled="!!readOnly"
        @update:modelValue="(value: any) => updated(value)"
    >
        <template #dp-input="{ value, onInput, onEnter, onTab, onClear }">
            <input
                :id="id ?? name"
                :disabled="!!readOnly"
                :class="[
                    readOnly
                        ? 'border-transparent p-0'
                        : 'border-gray-300 px-3 py-2',
                    inputCssClasses ??
                        'block w-full appearance-none cursor-pointer rounded-md border placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm',
                ]"
                type="text"
                :value="value"
            />
        </template>
    </Datepicker>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import Datepicker from "@vuepic/vue-datepicker";

    export interface SelectItem {
        value: any;
        label: string;
    }

    export default defineComponent({
        props: {
            modelValue: {
                type: Date,
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
            enableDateTime: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        components: {
            Datepicker,
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
    });
</script>
