<template>
  <ul class="news-list">
    <li
      class="news-list__item"
      v-for="(list, index) in lists"
      :key="list.index"
    >
      <time
        class="news-list__time"
        :datetime="datatime[index]"
      >
        {{ list.date }}
      </time>
      <p class="news-list__content">{{ list.content }}</p>
    </li>
  </ul>
</template>

<script>
import { lists } from "~/utils/newslist.js"

export default {
  data() {
    return {
      lists
    }
  },
  computed: {
    datatime() {
      // 2020.01.01 -> 2020-01-01に変更する
      const data = this.lists.map(list => list.date.split('.').join('-'));
      return data;
    }
  }
}
</script>

<style lang="scss" scoped>
.news-list {
  list-style-type: none;
  padding: 0;
  font-size: 15px;
  line-height: 1.8;

  &__item {
    display: flex;
    padding: 15px 0 20px;
    border-bottom: 1px solid var(--color-border);

    @media screen and (max-width: 767px) {
      flex-direction: column;
      padding: 20px 0 20px;
    }

    &:first-child {
      padding-top: 0;
    }
  }

  &__content {
    margin: 0 0 0 40px;

    @media screen and (max-width: 767px) {
      margin: 7px 0 0;
    }
  }
}
</style>
