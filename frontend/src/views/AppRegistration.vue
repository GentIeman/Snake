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
@import "@/assets/components/sign.sass"
</style>