<template>
    <div>
        <label
            v-if="label"
            :for="name"
            :class="
                labelCssClasses ??
                'block text-sm font-medium text-gray-700 mb-1'
            "
            >{{ label }}{{ required ? "*" : "" }}</label
        >
        <textarea
            :value="modelValue"
            @input="
                $emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).value
                )
            "
            :rows="rows"
            :id="id ?? name"
            :name="name"
            :autocomplete="autocomplete"
            :disabled="readOnly || disabled"
            :class="[
                readOnly
                    ? 'border-transparent !p-0'
                    : 'border-gray-300 px-3 py-2',
                disabled
                    ? 'border-gray-300 px-3 py-2 bg-gray-50'
                    : 'border-gray-300 px-3 py-2',
                inputCssClasses ??
                    'block w-full appearance-none rounded-md border placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm',
            ]"
        />
    </div>
</template>

<script lang="ts">
import { onMounted, ref, type PropType } from "vue";

export default {
    props: {
        modelValue: {
            type: String,
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
        disabled: {
            type: Boolean,
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
            required: true,
        },
        autocomplete: {
            type: String,
            required: false,
        },
        rows: {
            type: Number,
            required: false,
            default: 3,
        },
        label: {
            type: String,
            required: false,
        },
    },
    setup(props) {
        return {};
    },
};
</script>
