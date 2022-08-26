<template>
  <input
    :type="localType"
    class="input input_focus input_hover"
    :placeholder="placeholder"
    :name="name"
  >
  <button
    v-if="type === 'password'"
    class="password-toggle"
    :class="{'show_password': localType === 'text'}"
    tabindex="-1"
    @click="switchVisibility"
  ></button>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  type: {
    type: String,
    default: "text",
    required: true
  },
  placeholder: {
    type: String,
    default: "Your text",
    required: false
  },
  name: {
    type: String,
    required: true
  }
})
let localType = ref(props.type)
const switchVisibility = () => localType.value = localType.value === "password" ? "text" : "password"
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

.show_password
  background-image: url("@/static/icons/eye.svg")
</style>