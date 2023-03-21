<template>
  <div
    :class="cssClasses ?? defaultCssClasses"
    class="animate-pulse rounded-full"
  ></div>
</template>

<script lang="ts">
export default {
  props: {
    cssClasses: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const defaultCssClasses = "h-2.5 bg-gray-200 dark:bg-gray-700 w-48";

    return {
      defaultCssClasses,
    };
  },
};
</script>
