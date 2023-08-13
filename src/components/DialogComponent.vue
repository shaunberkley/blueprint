<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-40">
            <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-80" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            :class="[
                                maxWidth ?? 'w-full max-w-md',
                                maxHeight,
                                padding ?? 'p-6',
                            ]"
                            class="bg-white relative transform overflow-hidden rounded-2xl bg-base-100 text-left align-middle shadow-xl transition-all"
                        >
                            <TransitionChild as="template">
                                <div
                                    v-show="!disableClose"
                                    class="absolute top-2.5 right-4 pt-2"
                                >
                                    <button
                                        type="button"
                                        class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                                        @click="closeModal"
                                    >
                                        <span class="sr-only"
                                            >Close sidebar</span
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6 text-gray-400"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </TransitionChild>
                            <div class="flex items-center justify-between">
                                <DialogTitle
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-gray-900"
                                >
                                    {{ title }}
                                </DialogTitle>
                                <ButtonComponent
                                    :style="'secondary'"
                                    @click="titleButtonClicked"
                                    v-if="titleButtonEnabled"
                                    ><slot name="titleButton"></slot
                                ></ButtonComponent>
                            </div>
                            <div :class="[maxHeight]" class="overflow-auto p-1">
                                <slot></slot>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    import {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
    } from "@headlessui/vue";
    import ButtonComponent from "./ButtonComponent.vue";

    export default defineComponent({
        props: {
            isOpen: {
                type: Boolean,
                default: false,
            },
            title: {
                type: String,
                required: true,
            },
            titleButtonEnabled: {
                type: Boolean,
                default: false,
            },
            disableClose: {
                type: Boolean,
                default: false,
            },
            maxWidth: {
                type: String,
                required: false,
            },
            maxHeight: {
                type: String,
                required: false,
            },
            padding: {
                type: String,
                required: false,
            },
        },
        components: {
            TransitionRoot,
            TransitionChild,
            Dialog,
            DialogPanel,
            DialogTitle,
            ButtonComponent,
        },
        setup(props, { emit }) {
            function closeModal() {
                emit("closeModal");
            }

            function titleButtonClicked() {
                emit("titleButtonClicked");
            }

            return {
                closeModal,
                titleButtonClicked,
            };
        },
    });
</script>
