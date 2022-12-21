<template>
  <div class="auth">
    <aside class="auth__aside">
      <figure class="auth__illustration"></figure>
    </aside>
    <form action="" class="auth__form form">
      <fieldset class="form__fieldset">
        <legend class="form__legend">
          Create an account
        </legend>
        <label for="" class="form__label form__label_hover form__label_focus">
          <Input
            type="text"
            placeholder="Nickname"
            name="user[nickname]"
            :field-data="user.nickname"
          />
        </label>
        <label for="" class="form__label form__label_hover form__label_focus">
          <Input
            type="email"
            placeholder="Email"
            name="user[email]"
            :field-data="user.email"
          />
        </label>
        <label for="" class="form__label form__label_hover form__label_focus">
          <Input
            v-model:field-data="user.password"
            type="password"
            placeholder="Password"
            name="user[password]"
          />
        </label>
          <PasswordChecker
            class="form__password-checker"
            :class="{'form__password-checker_visible': isPasswordCheckerVisible === true}"
            :not-checked-password="user.password"
          />
        <label for="" class="form__label form__label_checkbox">
          <Checkbox class="form__checkbox form__checkbox_hover form__checkbox_focus" />
          <span class="form__explanation">Sign in automatically on each visit</span>
        </label>
        <PrimaryButton class="form__btn">Continue
          <i
            class="fa fa-arrow-right form__fa-arrow-right"
            aria-hidden="true">
          </i>
        </PrimaryButton>
      </fieldset>
      <footer class="form__footer">
        <span class="form__separator">or</span>
        <GoogleButton class="form__login-google-btn" />
        <p class="form__explanation">Already been with us?
          <router-link to="/auth" class="form__link form__link_focus form__link_hover">
            Sign in
          </router-link>
        </p>
      </footer>
    </form>
  </div>
</template>

<script setup>
import Input from "@/components/UI/AppInput.vue"
import Checkbox from "@/components/UI/AppCheckbox.vue"
import PrimaryButton from "@/components/UI/AppPrimaryButton.vue"
import GoogleButton from "@/components/UI/AppGoogleButton.vue"
import PasswordChecker from "@/components/UI/AppPasswordChecker.vue"

import { reactive, computed } from "vue"

const isPasswordCheckerVisible = computed(() => user.password.length > 0)

const user = reactive({
  nickname: "",
  email: "",
  password: "",
  passwordCheck: "",
  automaticallyVisit: false
})
</script>

<style scoped lang="sass">
@import "@/assets/components/sign.sass"
@import "@/assets/components/forms.sass"
</style>