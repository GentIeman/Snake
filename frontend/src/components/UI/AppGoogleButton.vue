<template>
  <button class="login-google login-google_hover login-google_focus">
    <span class="google-logo"></span>Continue with Google
  </button>
</template>

<script setup></script>

<style scoped lang="sass">
.login-google
  display: flex
  align-items: center
  justify-content: center
  gap: 0 15px
  border: solid 1.5px $secondary
  background: none
  outline: none
  @include font-style(normal, $font-size-medium, $font-radio-canada, $white)
  border-radius: $border-radius-medium
  cursor: pointer
  transition: background-color .2s ease-in-out

  &:is(&_hover:hover, &_focus:focus-within)
    background-color: $secondary

  .google-logo
    display: block
    position: relative
    width: 30px
    height: 30px
    background: no-repeat center/100% url("@/static/images/google_logo.svg")

</style>