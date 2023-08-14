<template>
    <div class="has-tooltip flex items-center" tabindex="0">
        <svg
            v-if="!$slots.tooltipItem"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline-block h-5 w-5"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
        </svg>
        <slot name="tooltipItem" v-if="$slots.tooltipItem"></slot>
        <div
            class="tooltip"
            :class="`${minWidth} ${tooltipPadding} align-${alignment} mobile-${mobileAlignment}`"
        >
            <slot name="tooltipContent"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, type PropType } from "vue";

    export default defineComponent({
        props: {
            cssClasses: {
                type: String,
                required: false,
            },
            alignment: {
                type: String as PropType<"left" | "center" | "right">,
                default: "center",
            },
            mobileAlignment: {
                type: String as PropType<"left" | "center" | "right">,
                default: "center",
            },
            minWidth: {
                type: String,
                default: "min-w-[12rem]",
            },
            tooltipPadding: {
                type: String,
                default: "p-6",
            },
        },
        setup(props) {
            return {};
        },
    });
</script>
<style scoped>
    .tooltip {
        @apply invisible absolute top-full z-50 whitespace-normal bg-gray-800 text-sm text-white;
    }

    /* Left Alignment */
    .align-left.tooltip {
        @apply left-0 transform-none;
    }

    /* Center Alignment */
    .align-center.tooltip {
        @apply left-1/2 -translate-x-1/2 transform;
    }

    /* Right Alignment */
    .align-right.tooltip {
        @apply right-0 transform-none;
    }

    .has-tooltip {
        @apply relative rounded-full outline-none ring-offset-1 focus:ring-2 focus:ring-black;
    }

    .has-tooltip:hover .tooltip {
        @apply visible z-50;
    }

    .has-tooltip:focus .tooltip {
        @apply visible z-50;
    }

    @media (max-width: 640px) {
        .has-tooltip:hover .tooltip.mobile-left,
        .has-tooltip:focus .tooltip.mobile-left {
            @apply left-0 transform-none;
        }

        .has-tooltip:hover .tooltip.mobile-right,
        .has-tooltip:focus .tooltip.mobile-right {
            @apply right-0 left-auto transform-none;
        }

        .has-tooltip:hover .tooltip.mobile-center,
        .has-tooltip:focus .tooltip.mobile-center {
            @apply left-1/2 -translate-x-1/2 transform;
        }
    }
</style>
