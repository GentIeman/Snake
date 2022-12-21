<template>
  <router-view />
</template>

<style lang="sass">
html,body
  height: 100%

:where(*)
  margin: 0
  padding: 0
  box-sizing: border-box
  text-decoration: none
  outline: none

::-webkit-scrollbar
  width: 8px

::-webkit-scrollbar-track
  background-color: $scrollbar-track

::-webkit-scrollbar-thumb
  background-color: $secondary
  cursor: pointer
</style>