<template>
  <div class="stretch-container">
    <div
      class="stretch"
      :class="'stretch_level-' + stretchLevel">
    </div>
    <div
      v-if="stretchLevel !== 4"
      class="bulb"
      @click="isVisibleModal = true"
    >
    </div>
      <Modal
        v-model:close-modal="isVisibleModal"
        class="stretch-container__modal"
        :is-password="true"
        :is-show="isVisibleModal"
        :missing-items="missingItems">
        <template #headline>
          Your password is missing the following items:
        </template>
      </Modal>
  </div>
</template>


<script setup>
import { computed, ref } from "vue"
import Modal from "@/components/UI/AppModal.vue"

let isVisibleModal = ref(false)

const props = defineProps({
  notCheckedPassword: {
    required: true,
    type: String
  }
})

const scorePassword = computed(() => {
  let score = 0
  if (!props.notCheckedPassword) return score

  const letters = {}
  for (let i = 0; i < props.notCheckedPassword.length; i++) {
    letters[props.notCheckedPassword[i]] = (letters[props.notCheckedPassword[i]] || 0) + 1
    score += 5.0 / letters[props.notCheckedPassword[i]]
  }

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
    case (scorePassword.value === 0):
      return 0
    case (scorePassword.value < 25):
      return 1
    case (scorePassword.value < 50):
      return 2
    case (scorePassword.value < 75):
      return 3
    case (scorePassword.value >= 75):
      return 4
  }
})

const missingItems = computed(() => {
  const items = []
  if (props.notCheckedPassword.length < 8) items.push("8 characters")
  if (!/[A-Z]/.test(props.notCheckedPassword)) items.push("1 uppercase letter")
  if (!/[a-z]/.test(props.notCheckedPassword)) items.push("1 lowercase letter")
  if (!/[0-9]/.test(props.notCheckedPassword)) items.push("1 number")
  if (!/\W/.test(props.notCheckedPassword)) items.push("1 special character")
  return items
})

</script>

<style scoped lang="sass">
.stretch-container
  position: relative

  &__modal
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 1

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