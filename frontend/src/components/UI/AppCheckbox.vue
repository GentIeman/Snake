<template>
  <div class="checkbox-container">
    <input
      type="checkbox"
      class="checkbox"
      required
    >
    <span class="check-icon"></span>
  </div>
</template>

<script setup></script>

<style scoped lang="sass">
.checkbox
  position: absolute
  opacity: 0
  width: inherit
  height: inherit
  cursor: pointer
  z-index: 1

  &:checked ~ .check-icon
    opacity: 1

.check-icon
  position: absolute
  width: inherit
  height: inherit
  border-radius: inherit
  background-color: $secondary
  transition: opacity .3s ease-in
  opacity: 0

  &:after
    content: ""
    position: absolute
    transform: translate(10%, -10%)
    width: inherit
    height: inherit
    background: no-repeat center/100% url("@/static/icons/check.svg")
</style>