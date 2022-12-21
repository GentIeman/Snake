<template>
    <input
      :type="localType"
      class="input"
      :placeholder="placeholder"
      :name="name"
      :autocomplete="isAutoComplete"
      required
      @input="$emit('update:fieldData', $event.target.value)"
    >
    <button
      v-if="type === 'password'"
      type="button"
      class="password-toggle"
      :class="{'show_password': localType === 'text'}"
      @click="switchVisibility"
    ></button>
</template>

<script setup>
import { ref, computed } from "vue"

const props = defineProps({
  type: {
    type: String,
    default: "text",
    required: true
  },
  placeholder: {
    type: String,
    default: "Placeholder",
    required: false
  },
  name: {
    type: String,
    required: true
  },
  fieldData: {
    type: String,
    default: "",
    required: false
  }
})

const emits = defineEmits(["update:fieldData"])

let localType = ref(props.type)
const switchVisibility = () => localType.value = localType.value === "password" ? "text" : "password"
const isAutoComplete = computed(() => props.type === "password" ? "on" : "off")
</script>

<style scoped lang="sass">
.input
  padding: $input-padding
  outline: none
  width: 100%
  height: 100%
  background: transparent
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