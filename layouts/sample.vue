<template>
  <div>
    <ex-header />
    <nuxt />
    <ex-footer />
  </div>
</template>

<script>
// ヘッダ＆フッタをインポート
import ExHeader from '~/components/form.vue'

export default {
  name: 'sample',	// テンプレート名
  components: {
    ExHeader,		// <ex-header>に対応
   
  }
}
</script>