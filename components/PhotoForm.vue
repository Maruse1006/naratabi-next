<template>
  <div class="photo-form">
    <h2 class="title">Submit a photo</h2>
    <form class="form">
      <input class="form__item" type="file" @change="onFileChange">
      <div class="form__button">
        <button type="submit" class="button button--inverse">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      preview: null,
      photo:null
    }
  },
  methods: {
    // フォームでファイルが選択されたら実行される
    onFileChange (event) {
      // 何も選択されていなかったら処理中断
      if (event.target.files.length === 0) {
        this.reset()
        return false
        this.photo = event.target.files[0] 
      }

      // ファイルが画像ではなかったら処理中断
      if (! event.target.files[0].type.match('image.*')) {
          this.reset()
        return false
      }

      // FileReaderクラスのインスタンスを取得
      const reader = new FileReader()

      // ファイルを読み込み終わったタイミングで実行する処理
      reader.onload = e => {
        // previewに読み込み結果（データURL）を代入する
        // previewに値が入ると<output>につけたv-ifがtrueと判定される
        // また<output>内部の<img>のsrc属性はpreviewの値を参照しているので
        // 結果として画像が表示される
        this.preview = e.target.result
      }

      // ファイルを読み込む
      // 読み込まれたファイルはデータURL形式で受け取れる（上記onload参照）
      reader.readAsDataURL(event.target.files[0])
    },
    reset () {
    this.preview = ''
    this.$el.querySelector('input[type="file"]').value = null
  },
  async submit () {
  const formData = new FormData()
  formData.append('photo', this.photo)
  const response = await axios.post('/api/photos', formData)

  if (response.status === UNPROCESSABLE_ENTITY) {
    this.errors = response.data.errors
    return false
  }

  this.reset()
  this.$emit('input', false)

  if (response.status !== CREATED) {
    this.$store.commit('error/setCode', response.status)
    return false
  }

  this.$router.push(`/photos/${response.data.id}`)
}
  }
}
</script>