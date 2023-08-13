<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <div class="w-full fixed z-50 inset-x-0 bottom-0 pb-2 sm:pb-5">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="rounded-lg bg-blue-600 p-2 shadow-lg sm:p-3">
                    <div class="flex flex-wrap items-center justify-between">
                        <div class="flex w-0 flex-1 items-center">
                            <span class="flex px-2">
                                <slot name="icon"></slot>
                            </span>
                            <p
                                class="w-full block ml-3 py-2 whitespace-nowrap font-medium text-white text-sm overflow-auto"
                            >
                                <span class="md:hidden">{{
                                    mobileMessage ?? message
                                }}</span>
                                <span class="hidden md:inline">{{
                                    message
                                }}</span>
                            </p>
                        </div>
                        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                            <button
                                @click="close"
                                type="button"
                                class="-mr-1 flex rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-base-300"
                            >
                                <span class="sr-only">Dismiss</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6 text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </TransitionRoot>
</template>

<script lang="ts">
    import { TransitionRoot } from "@headlessui/vue";
    import { onMounted, watch, defineComponent } from "vue";

    export default defineComponent({
        components: {
            TransitionRoot,
        },
        props: {
            isOpen: {
                type: Boolean,
                required: false,
                default: false,
            },
            message: {
                type: String,
                required: false,
            },
            mobileMessage: {
                type: String,
                required: false,
            },
            timer: {
                type: Number,
                required: false,
            },
        },
        setup(props, { emit }) {
            watch(
                () => props.isOpen,
                (first, second) => {
                    if (props.timer && props.isOpen) {
                        window.setTimeout(() => {
                            close();
                        }, props.timer);
                    }
                }
            );

            function close() {
                emit("close");
            }

            return {
                close,
            };
        },
    });
</script>
