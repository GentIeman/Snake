<template>
  <Input
    v-model="password"
    :type="type"
    name="password"
    autocomplete
    :placeholder="placeholderValidator"
    />
  <button
    class="password-toggle"
    :class="{'show_password': type === 'text'}"
    tabindex="-1"
    @click="switchVisibility"
  ></button>
</template>

<script setup>
import { defineProps, computed, ref } from "vue"
import Input from "./AppInput.vue"

const password = ref(null)
const type = ref("password")
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
    required: false
  }
})

const placeholderValidator = computed(() => props.placeholder)
const switchVisibility = () => type.value = type.value === "password" ? "text" : "password"
</script>

<style scoped lang="sass">
.password-toggle
  width: 55px
  height: 100%
  background: no-repeat center/40% url("@/static/icons/eye-crossed.svg") $secondary
  border-radius: $border-radius-small
  border: none
  outline: none
  cursor: pointer
  transition: background-image .2s ease-in-out

.show_password
  background-image: url("@/static/icons/eye.svg")
</style>