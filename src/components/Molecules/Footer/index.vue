<template>
  <footer class="footer">
    <div class="footer__inner">
      <nav class="footer-nav">
        <ul class="footer-nav__list">
          <li
            class="footer-nav__item"
            v-for="nav in navs"
            :key="nav.index"
          >
            <nuxt-link
              :to="nav.href"
            >
              {{ nav.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        <small>©START</small>
      </div>
    </div>
  </footer>
</template>

<script>
import { navs } from "~/utils/navs.js"

export default {
  data() {
    return {
      navs
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background: var(--color-primary);
  padding: 64px 0 54px;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    padding: 43px 0 29px;
  }

  &__inner {
    width: 100%;
    max-width: 1100px;
    margin: auto;
    padding: 0 40px;
    box-sizing: border-box;

    @media screen and (max-width: 767px) {
      padding: 0 20px;
    }
  }
}

.footer-nav {
  &__list {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;

    & > * + * {
      margin-left: 40px;

      @media screen and (max-width: 767px) {
        margin-left: 25px;
      }
    }
  }

  &__item {
    font-size: 14px;

    @media screen and (max-width: 767px) {
      font-size: 12px;
    }

    a {
      color: var(--color-white);
      text-decoration: none;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}

.copyright {
  margin-top: 20px;
  color: var(--color-white);
  font-size: 12px;

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
}
</style>
