<template>
  <input
    :type="typeValidator"
    class="input input_focus input_hover"
    :placeholder="placeholderValidator"
    :name="nameValidator"
  >
</template>

<script setup>
import { defineProps, computed } from "vue"

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: "",
    required: false
  },
  name: {
    type: String,
    required: true
  }
})

const typeValidator = computed(() => props.type.toLowerCase())

const placeholderValidator = computed(() => props.placeholder)

const nameValidator = computed(() => props.name.toLowerCase())

</script>

<style scoped lang="sass">
.input
  width: inherit
  height: inherit
  padding: $input-placeholder-padding
  background-color: transparent
  outline: none
  border: none
  @include font-style(normal, $font-size-medium, $font-roboto, $white)

  &::placeholder
    color: $secondary

.password-toggle
  width: 55px
  height: 100%
  background: no-repeat center/40% url("@/static/icons/eye-crossed.svg") $secondary
  border-radius: $border-radius-small
  border: none
  outline: none
  cursor: pointer

</style>