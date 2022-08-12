<template>
  <label for="" class="checkbox-wrap checkbox-wrap_hover checkbox-wrap_focus">
    <input type="checkbox" class="checkbox">
    <span class="check-icon"></span>
  </label>
</template>

<script setup></script>

<style scoped lang="sass">
.checkbox-wrap
  border: solid 1.5px $secondary
  background-color: $checkbox-background
  border-radius: $checkbox-border-radius
  transition: box-shadow .2s ease-in-out

  &:is(&_hover:hover, &_focus:focus-within)
    box-shadow: 0 0 0 1px $secondary

.checkbox
  position: absolute
  opacity: 0
  width: inherit
  height: inherit
  cursor: pointer
  z-index: 2

  &:checked ~ .check-icon
    opacity: 1

  &:is(&_hover:hover, &_focus-within:focus)
    box-shadow: 0 0 0 2px $secondary

.check-icon
  opacity: 0
  position: relative
  width: inherit
  height: inherit
  border-radius: inherit
  background-color: $secondary
  transition: opacity .3s ease-in
  cursor: pointer

  &:after
    content: ""
    position: absolute
    transform: translate(10%, -10%)
    width: inherit
    height: inherit
    background: no-repeat center/100% url("@/static/icons/check.svg")
</style>