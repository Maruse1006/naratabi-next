import PhotoForm from './PhotoForm.vue'

<button class="button" @click="showForm = ! showForm">
  <i class="icon ion-md-add"></i>
  Submit a photo
</button>

export default {
  components: {
    PhotoForm
  },
  data () {
    return {
      showForm: false
    }
  },
  /* 中略 */
}