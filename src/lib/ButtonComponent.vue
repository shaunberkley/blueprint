<template>
    <button
        type="button"
        :disabled="disabled || loading"
        class="cursor-pointer inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        :class="[
            cssClasses ?? defaultCssClasses,
            style === 'secondary' ? secondaryStyling : '',
            style === 'primary' ? primaryStyling : '',
            disabled || loading ? '!opacity-50 !pointer-events-none' : '',
        ]"
    >
        <slot v-if="!loading"></slot>
        <div
            v-if="loading"
            class="inline-flex items-center justify-center text-sm font-medium text-white h-5"
        >
            <span class="inline-flex items-center gap-px">
                <span
                    class="animate-blink mx-px h-1.5 w-1.5 rounded-full bg-white"
                ></span>
                <span
                    class="animate-blink animation-delay-150 mx-px h-1.5 w-1.5 rounded-full bg-white"
                ></span>
                <span
                    class="animate-blink animation-delay-300 mx-px h-1.5 w-1.5 rounded-full bg-white"
                ></span>
            </span>
        </div>
    </button>
</template>

<script lang="ts">
import type { PropType } from "vue";

export default {
    props: {
        cssClasses: {
            type: String,
            required: false,
        },
        style: {
            type: String as PropType<undefined | "primary" | "secondary">,
            default: undefined,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const primaryStyling =
            "border-transparent text-white bg-blue-600 hover:bg-blue-700";
        const secondaryStyling =
            "border-gray-300 bg-white hover:bg-gray-50 text-gray-700";
        const defaultCssClasses =
            "border rounded-md px-4 py-2 text-sm font-medium shadow-sm";

        return {
            defaultCssClasses,
            secondaryStyling,
            primaryStyling,
        };
    },
};
</script>
