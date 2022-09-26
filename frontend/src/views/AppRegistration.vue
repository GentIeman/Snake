<template>
  <div class="sign-content">
    <figure class="sign-graphic"></figure>
    <div class="sign-container">
      <header class="sign-container__header">
        <h1 class="sign-container__headline">
          Create account
        </h1>
      </header>
      <form
        action=""
        class="sign-container__form"
        @submit.prevent>
        <Input
          v-model:field-data.trim="user.nickname"
          type="text"
          placeholder="Nickname"
          name="nickname"
          class="sign-container__input-wrap"
          validation-type="text" />
        <Input
          v-model:field-data.trim="user.email"
          type="email"
          placeholder="Email"
          name="email"
          class="sign-container__input-wrap"
          validation-type="email" />
        <Input
          v-model:field-data.trim="user.password"
          type="password"
          placeholder="Password"
          name="password"
          class="sign-container__input-wrap"
        />
        <PasswordChecker
          class="sign-container__password-check"
          :class="{'sign-container__password-check_show': user.password}"
          :not-checked-password="user.password"
        />
        <div class="automatically-visit">
          <Checkbox class="sign-container__checkbox-wrap" />
          <span class="automatically-visit__text">Sign in automatically on each visit</span>
        </div>
        <PrimaryButton class="sign-container__btn">Continue
          <i
            class="fa fa-arrow-right sign-container__fa-arrow-right"
            aria-hidden="true">
          </i>
        </PrimaryButton>
      </form>
      <footer class="sign-container__footer">
        <span class="sign-container__separator">or</span>
        <GoogleButton class="sign-container__login-google-btn" />
        <p class="sign-container__sign-up">Already been with us?
          <router-link to="/auth" class="sign-container__link sign-container__link_focus sign-container__link_hover">
            Sign in
          </router-link>
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import Input from "@/components/UI/AppInput.vue"
import Checkbox from "@/components/UI/AppCheckbox.vue"
import PrimaryButton from "@/components/UI/AppPrimaryButton.vue"
import GoogleButton from "@/components/UI/AppGoogleButton.vue"
</script>

<style scoped lang="sass">
.sign-content
  display: flex
  width: 100%
  height: clamp(100vh, 100%, 100%)
  background-color: $sign-background

.sign-graphic
  position: sticky
  top: 0
  left: 0
  width: 50%
  height: 100vh
  border-radius: 0 40px 40px 0
  background: no-repeat center/80% url("@/static/images/spiral.svg") $illustration-background

.sign-container
  width: 50%
  height: inherit
  padding: 60px 40px 40px 40px

  &__header
    position: relative

  &__headline
    @include font-style(bold, $font-size-large, $font-radio-canada, $white)

  &__form
    position: relative
    margin-top: 20px

  &__input-wrap
    display: flex
    width: 100%
    height: 50px
    margin-bottom: 30px
    border: solid 1.5px $secondary
    border-radius: $border-radius-medium
    transition: box-shadow .2s ease-in-out

    &:is(&_hover:hover, &_focus:focus-within)
      box-shadow: 0 0 0 2px $secondary

    &:last-of-type
      margin-bottom: 10px

  &__checkbox-wrap
    display: grid
    place-items: center
    position: relative
    width: 22px
    height: 22px
    border: solid $input-border-width $secondary
    background-color: $checkbox-background
    border-radius: $checkbox-border-radius
    transition: box-shadow .2s ease-in-out

    &:is(&_hover:hover, &_focus:focus-within)
      box-shadow: 0 0 0 1px $secondary

  &__fa-arrow-right
    font-size: 1.5rem

  &__btn
    width: 100%
    height: 60px

  &__separator
    display: grid
    place-items: center
    position: relative
    width: 100%
    margin: 20px 0
    @include font-style(normal, $font-size-medium, $font-roboto, $secondary)

    &:before,
    &:after
      content: ""
      position: absolute
      top: 50%
      width: 100px
      height: 1.5px
      background-color: $secondary

    &:before
      left: calc(50% - 24px)
      transform: translate(-100%, -50%)

    &:after
      left: calc(50% + 24px)
      transform: translate(0, -50%)

  &__login-google-btn
    width: 100%
    height: 60px
    margin-bottom: 30px

  &__sign-up
    @include font-style(normal, $font-size-medium, $font-radio-canada, $white)

  &__link
    position: relative
    @include font-style(bold, $font-size-medium, $font-radio-canada, $secondary)

    &:before
      content: ""
      position: absolute
      bottom: 0
      left: 0
      width: 0
      height: 1.5px
      background-color: $secondary
      transition: width .5s ease-in-out

    &:is(&_hover:hover, &_focus:focus):before
      width: 100%

.automatically-visit
  display: flex
  align-items: center
  gap: 0 10px
  margin: 30px 0

  &__text
    @include font-style(normal, $font-size-small, $font-roboto, $white)
</style>