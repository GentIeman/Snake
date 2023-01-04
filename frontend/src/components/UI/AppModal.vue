<template>
  <div v-if="isShow" class="modal">
    <transition name="bounce">
      <div
        v-if="isBounce"
        ref="modal"
        class="modal__inner">
        <button
          type="button"
          class="modal__close-btn"
          @click="emits('update:close-modal', false)">
        </button>
        <header class="modal__header">
          <h3 class="modal__headline">
            <slot name="headline"></slot>
          </h3>
        </header>
        <ul
          v-if="missingItems"
          class="modal__missing-items">
          <li
            v-for="item in missingItems"
            :key="item"
            class="modal__missing-item">
            {{ item }}
          </li>
        </ul>
        <div
          v-if="isPassword"
          class="modal__password">
          <p class="modal__generated-password">{{ generatedPassword ??= generatePassword(10) }}</p>
          <PrimaryButton
            type="button"
            class="modal__copy-btn"
            @click="copy(generatedPassword)">
          </PrimaryButton>
          <PrimaryButton
            type="button"
            class="modal__refresh-btn"
            @click="generatedPassword = generatePassword(10)">
          </PrimaryButton>
        </div>
        <p
          v-if="copied"
          class="modal__hint modal__hint_success">Successfully copied
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useClipboard, onClickOutside } from "@vueuse/core"
import { generatePassword } from "@/modules/password-generator"
import PrimaryButton from "@/components/UI/AppPrimaryButton.vue"
import { ref, watch, nextTick } from "vue"

const modal = ref(null)
onClickOutside(modal, () => {
  emits("update:close-modal", false)
})

const isBounce = ref(false)
watch(() => props.isShow, value => {
  if (value === true) {
    setTimeout(() => {
      isBounce.value = true
    }, 100)
  } else {
    isBounce.value = false
  }
})

const emits = defineEmits(["update:close-modal"])

const generatedPassword = ref(null)
const { copy, copied } = useClipboard()

const props = defineProps({
  missingItems: {
    required: false,
    type: Array
  },
  isPassword: {
    required: false,
    default: false,
    type: Boolean
  },
  isShow: {
    required: true,
    default: false,
    type: Boolean
  }
})
</script>

<style scoped lang="sass">
.modal
  display: grid
  place-items: center
  width: 100%
  height: 100%
  background-color: $modal-backdrop

  &__inner
    position: relative
    border: solid 2px $secondary
    background-color: $background
    border-radius: $border-radius-large
    padding: 40px 50px
    min-width: 430px
    min-height: 200px

  &__headline
    @include font-style(normal, $font-size-medium, $font-radio-canada, $white)

  &__missing-items
    display: flex
    flex-direction: column
    gap: 5px
    list-style: none
    padding: 10px 0

  &__missing-item
    @include font-style(normal, $font-size-small, $font-roboto, $white)

  &__password
    display: grid
    grid-template-columns: auto 30px 30px
    place-items: center start
    gap: 0 10px
    padding: 10px
    border-radius: 10px
    background-color: #302C36

  &__generated-password
    @include font-style(normal, $font-size-medium, $font-roboto, $white)

  &__copy-btn,
  &__refresh-btn
    width: 30px
    height: 30px
    background-repeat: no-repeat
    background-position: center
    background-size: 60%

  &__copy-btn
    background-image: url('@/static/icons/copy.svg')

  &__refresh-btn
    background-image: url('@/static/icons/refresh.svg')

  &__hint
    @include font-style(normal, $font-size-small, $font-roboto, $white)

    &_success
      color: $success

  &__close-btn
    position: absolute
    top: -15px
    right: -15px
    width: 30px
    height: 30px
    border-radius: $border-radius-medium
    background: url('@/static/icons/cross-white.svg') no-repeat center/50% $danger
    border: none
    cursor: pointer

.bounce-enter-active
  animation: bounce-in-out 0.5s

.bounce-leave-active
  animation: bounce-in-out 0.5s reverse

  @keyframes bounce-in-out
    0%
      transform: scale(0)
    50%
      transform: scale(1.25)
    100%
      transform: scale(1)

</style>