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
    <div class="footer-position">
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    </div>
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
          title: 'myページ',
          to:'/dashboard'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'loginページへ',
          to:'/login'
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
.v-toolbar_content{
  z-index: 20;
}
.v-application {
  background-color:#fff;
 
}
.v-footer{
  
position:fixed;
}
.v-list{
height:200vh;
}

.main{
  padding:0;
  margin:0;
}
.container{
  padding:0;
  margin:0;
}
.footer-position{
         
        bottom:0;

}
.v-list{
  z-index:10;
}
.v-height{
  height:200vh;
}
.v-toolbar{
  z-index:30;
}
</style>