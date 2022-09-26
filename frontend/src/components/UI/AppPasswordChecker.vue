<template>
  <div class="stretch-container">
    <div class="stretch" :class="'stretch_level-' + stretchLevel"></div>
    <div v-if="stretchLevel !== 4" class="bulb"></div>
  </div>
</template>


<script setup>
import { computed } from "vue"

const props = defineProps({
  notCheckedPassword: {
    required: true,
    type: String
  }
})

const scorePassword = computed(() => {
  let score = 0
  if (!props.notCheckedPassword) return score

  // award every unique letter until 5 repetitions
  const letters = {}
  for (let i = 0; i < props.notCheckedPassword.length; i++) {
    letters[props.notCheckedPassword[i]] = (letters[props.notCheckedPassword[i]] || 0) + 1
    score += 5.0 / letters[props.notCheckedPassword[i]]
  }

  // bonus points for mixing it up
  const variations = {
    digits: /[0-9]/.test(props.notCheckedPassword),
    lower: /[a-z]/.test(props.notCheckedPassword),
    upper: /[A-Z]/.test(props.notCheckedPassword),
    symbols: /\W/.test(props.notCheckedPassword),
    length: /.{8,}/.test(props.notCheckedPassword)
  }

  let variationCount = 0
  for (const check in variations) {
    variationCount += (variations[check] === true) ? 1 : 0
  }
  score += (variationCount - 1) * 10

  return parseInt(score)
})

const stretchLevel = computed(() => {
  switch (true) {
    case (scorePassword.value === 0): return 0
    case (scorePassword.value < 25): return 1
    case (scorePassword.value < 50): return 2
    case (scorePassword.value < 75): return 3
    case (scorePassword.value >= 75): return 4
  }
})

</script>

<style scoped lang="sass">
.stretch-container
  &__dialog
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    min-width: $dialog-min-width
    min-height: $dialog-min-height

.stretch
  width: 0
  height: 10px
  transition: width 0.5s ease-in-out

@mixin stretch-level($width, $color)
  width: $width
  background-color: $color

.stretch_level-0
  @include stretch-level(0, #BB4440)

.stretch_level-1
  @include stretch-level(25%, #BB4440)

.stretch_level-2
  @include stretch-level(50%, #E17D30)

.stretch_level-3
  @include stretch-level(75%, #F0B03F)

.stretch_level-4
  @include stretch-level(100%, #A5DF41)

.bulb
  width: 25px
  height: 25px
  background: no-repeat center/100% url("@/static/icons/bulb.svg")
  cursor: pointer
</style>