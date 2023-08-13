<template>
    <fieldset class="space-y-5">
        <legend class="sr-only">{{ title }}</legend>
        <div
            class="relative flex items-start"
            v-for="(item, index) in items"
            :key="item.label"
        >
            <div class="flex h-5 items-center">
                <input
                    :id="itemName + '-' + index"
                    @change="
                        update(
                            item,
                            ($event.target as HTMLInputElement).checked
                        )
                    "
                    :name="itemName"
                    :checked="modelValue.map((e: CheckboxItem) => e.value).includes(item.value)"
                    :value="modelValue"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
            </div>
            <label
                :for="itemName + '-' + index"
                class="ml-3 text-sm font-medium text-gray-700"
            >
                {{ item.label }}
            </label>
        </div>
    </fieldset>
</template>

<script lang="ts">
    import { defineComponent, PropType } from "vue";

    export interface CheckboxItem {
        label: string;
        value: any;
    }

    export default defineComponent({
        props: {
            itemName: {
                type: String,
                default: "checkbox",
            },
            title: {
                type: String,
                default: "Checkbox items",
            },
            items: {
                type: Array as PropType<CheckboxItem[] | []>,
                default: [],
            },
            modelValue: {
                type: Array as PropType<CheckboxItem[] | []>,
                default: [],
            },
        },
        setup(props, { emit }) {
            function isItemChecked(item: CheckboxItem): boolean {
                return (
                    props.modelValue.filter((checkItem: CheckboxItem) => {
                        return checkItem.value === item.value;
                    }).length > 0
                );
            }

            function update(item: CheckboxItem, checked: boolean) {
                const activeItems: CheckboxItem[] = checked
                    ? [...props.modelValue, item]
                    : props.modelValue.filter(
                          (i: CheckboxItem) => i.value !== item.value
                      );
                emit("update:modelValue", activeItems);
            }

            return {
                isItemChecked,
                update,
            };
        },
    });
</script>
