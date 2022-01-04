<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
      </v-btn>
       
      </v-btn>
      
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      
      </v-btn>
    </v-app-bar>s
    
      <v-container>
        <nuxt />
      </v-container>
    
    <div id="app">
    
</div>
    
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
       title:'',
           content:'',
           saved:'',
      items: [
        {
          icon: 'mdi-apps',
          title: 'トップページへ',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ログアウト',
          to:'/login'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '編集',
          to: '/post'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ならたびnet'
    }
  }
}
</script>
<style scoped>
.v-application {
  background-color:#fff;
 
}
.v-footer{
  position:relative;
  bottom:0;
  margin:0%;
  padding:0%;
}

.main{
  padding:0;
  margin:0;
}
.container{
  padding:0;
  margin:0;
}
</style>
