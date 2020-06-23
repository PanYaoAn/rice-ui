<template>
  <div class="re-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "re-checkbox-group",
  data() {
    return {};
  },
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    };
  },

};
</script>

<style>
</style>