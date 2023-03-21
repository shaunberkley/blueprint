<template>
    <div class="relative w-full z-10">
        <label
            v-if="label"
            :for="name"
            :class="
                labelCssClasses ??
                'block text-sm font-medium text-gray-700 mb-1'
            "
            >{{ label }}{{ required ? "*" : "" }}</label
        >
        <Combobox
            :modelValue="modelValue"
            @update:modelValue="(value) => updated(value)"
        >
            <div class="relative mt-1">
                <!-- mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm -->
                <div
                    class="relative w-full cursor-default overflow-hidden rounded-md bg-white text-left border border-gray-300 focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                >
                    <ComboboxInput
                        class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                        :displayValue="(item: any) => item?.name"
                        @change="select($event.target.value)"
                    />
                    <ComboboxButton
                        class="absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                        <ChevronUpDownIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </ComboboxButton>
                </div>
                <TransitionRoot
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    @after-leave="query = ''"
                >
                    <ComboboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                        <ComboboxOption
                            v-for="item in filteredItems"
                            as="template"
                            :key="item.value"
                            :value="item"
                            v-slot="{ selected, active }"
                        >
                            <li
                                class="relative cursor-default select-none py-2 pl-4 pr-4"
                                :class="{
                                    'bg-blue-600 text-white': active,
                                    'text-gray-900': !active,
                                }"
                            >
                                <span
                                    class="block truncate"
                                    :class="{
                                        'font-medium': selected,
                                        'font-normal': !selected,
                                    }"
                                >
                                    {{ item.name }}
                                </span>
                                <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                                    :class="{
                                        'text-white': active,
                                        'text-blue-600': !active,
                                    }"
                                >
                                    <CheckIcon
                                        class="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </span>
                            </li>
                        </ComboboxOption>
                    </ComboboxOptions>
                </TransitionRoot>
            </div>
        </Combobox>
    </div>
</template>

<script lang="ts">
    import { ref, computed, defineComponent } from "vue";
    import {
        Combobox,
        ComboboxInput,
        ComboboxButton,
        ComboboxOptions,
        ComboboxOption,
        TransitionRoot,
    } from "@headlessui/vue";
    import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
    import type { PropType } from "vue";
    import type { AutocompleteItem } from "./autocomplete.model";

    export default defineComponent({
        name: "AutocompleteComponent",
        props: {
            items: {
                type: Array as PropType<AutocompleteItem[]>,
                required: false,
            },
            modelValue: {
                type: Object as PropType<AutocompleteItem>,
            },
            label: {
                type: String,
                required: false,
            },
            labelCssClasses: {
                type: String,
                required: false,
            },
            name: {
                type: String,
                required: true,
            },
            required: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        components: {
            Combobox,
            ComboboxInput,
            ComboboxButton,
            ComboboxOptions,
            ComboboxOption,
            TransitionRoot,
            CheckIcon,
            ChevronUpDownIcon,
        },
        setup(props, { emit }) {
            let selected = ref();
            let query = ref("");

            let filteredItems: any = computed(() => {
                let items: AutocompleteItem[] | undefined = props.items;
                items =
                    query.value === ""
                        ? items
                        : items?.filter((item: AutocompleteItem) =>
                              item.name
                                  .toLowerCase()
                                  .replace(/\s+/g, "")
                                  .includes(
                                      query.value
                                          .toLowerCase()
                                          .replace(/\s+/g, "")
                                  )
                          );
                const queryItem: AutocompleteItem = {
                    name: query.value,
                    value: query.value,
                };

                if (query.value) items?.unshift(queryItem);

                // Return deduped items
                return [
                    ...new Set(items?.map((item) => JSON.stringify(item))),
                ].map((item) => JSON.parse(item));
            });

            function select(value: string) {
                query.value = value;
                emit("select", value);
            }

            function updated(value: any) {
                emit("update:modelValue", value);
                emit("updated", value);
            }
            return {
                selected,
                query,
                filteredItems,
                select,
                updated,
            };
        },
    });
</script>
