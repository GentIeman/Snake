<template>
  <button class="primary-btn primary-btn_hover primary-btn_focus">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped lang="sass">
.primary-btn
  background-color: $primary
  border: none
  outline: none
  @include font-style(bold, 30px, $font-radio-canada, $white)
  border-radius: 5px
  cursor: pointer
  transition: box-shadow .2s ease-in-out

  &:is(&_hover:hover, &_focus:focus-within)
    box-shadow: rgba(0, 0, 0, .24) 0 3px 8px
</style>