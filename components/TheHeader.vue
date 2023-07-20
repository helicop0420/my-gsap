<template>
  <nav :class="headerClassList" class="fixed w-full top-0 header-nav" style="z-index: 1000000000;">
    <div
      class="mx-auto flex flex-wrap items-center justify-between mt-0 custom-header"
      style="width: 80%; height: 73px;"
    >
        <div class="nav-btn" @click="onClickToggle()" v-if="isOpen == false">
          ≡
        </div>
        <div class="nav-btn-clicked" @click="onClickCancel()" v-if="isOpen == true" style="width: 35px;">
          <cancelSVG></cancelSVG>
        </div>
      <div class="flex desktop-item scrollpanels" id="navbar">       
        <div :class="'header-item'">
          <a style="display: flex;" class="br-item" @click="closeContactModal('oscar-wrapper')">OSCAR<p style="margin-top: 1px;font-size: 10px;;">®</p></a>
        </div>
        <div :class="'header-item'">
          <a class="br-item" @click="closeContactModal('solution-wrapper')">ONE SOLUTION</a>
        </div>
        <div :class="'header-item'">
          <a class="br-item" @click="closeContactModal('cross-wrapper')">CROSS</a>
        </div>
        <div :class="'header-item'">
          <a class="br-item" @click="closeContactModal('adjust-wrapper')">ADJUST</a>
        </div>
        <div :class="'header-item'">
          <a class="br-item" @click="closeContactModal('restore-wrapper')">RESTORE</a>
        </div>
        <div :class="'header-item'">
          <a class="br-item" @click="closeContactModal('test-wrapper')">TESTIMONIALS</a>
        </div>
        <div :class="'header-item'">
          <a style="display: flex; align-items: center; gap: 4px" class="no-border br-item" @click="closeContactModal()">FIND OUT MORE <outSVG></outSVG></a>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="desktop-item">
          <button class="contact-us">
            <a href="#contact-wrapper">Contact us</a>
          </button>
        </div>
        <!-- <img src="../assets/img/header/logo.svg" /> -->
        <logoSVG></logoSVG>
      </div>
    </div>
      <div id="mobile-navbar" class="mobile-menu">
        <div class="w-full">
          <div class="mobile-menu-item"><a style="display: flex;" class="br-item" @click="closeTabletContactModal('oscar-wrapper')">OSCAR</a></div>
          <div class="mobile-menu-item"><a class="br-item" @click="closeTabletContactModal('solution-wrapper')">ONE SOLUTION</a></div>
          <div class="mobile-menu-item"><a class="br-item" @click="closeTabletContactModal('cross-wrapper')">CROSS</a></div>
          <div class="mobile-menu-item"><a class="br-item" @click="closeTabletContactModal('adjust-wrapper')">ADJUST</a></div>
          <div class="mobile-menu-item"><a class="br-item" @click="closeTabletContactModal('restore-wrapper')">RESTORE</a></div>
          <div class="mobile-menu-item"><a class="br-item" @click="closeTabletContactModal('test-wrapper')">TESTIMONIALS</a></div>
          <div class="mobile-menu-item"><a style="display: flex; align-items: center; gap: 4px" class="no-border br-item" @click="closeTabletContactModal('find-wrapper')">FIND OUT MORE <outSVG></outSVG></a></div>
          <div class="mobile-menu-item"><a class="br-item" @click="closeTabletContactModal('contactus-wrapper')">CONTACT</a></div>
        </div>
        <div class="w-full p-3 mb-2" v-if="mode == 'tablet'">
          <div class="py-2 mb-10" style="border-bottom: 1px solid #F0F0F0; font-size: 24px;"><p>excellence for life</p></div>
          <div class="flex">
            <div style="margin-right: 100px">
              <p class="ft-title py-1">FOLLOW US</p>
              <P class="ft-content py-1">TWITTER</P>
              <P class="ft-content py-1">YOUTUBE</P>
              <P class="ft-content py-1">LINKEDIN</P>
            </div>
            <div>
              <p class="ft-title py-1">LEARN MORE</p>
              <P class="ft-content py-1">OSCAR</P>
              <P class="ft-content py-1">360 CRT</P>
              <P class="ft-content py-1">HEART MONITORING</P>
            </div>
          </div>
        </div>
        <div class="flex" style="font-size: 12px; width: 100%; padding-left: 10px;" v-if="mode == 'tablet'">
          <p class="mr-3">GENERAL TEMRS AND CONDITIONS</p>
          <p class="mr-3">COOKIE SETTINGS</p>
          <p class="mr-3">IMPRINT</p>
          <p>LEGAL DISCLAIMER</p>
        </div>
      </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
import gsap from 'gsap'
import logoSVG from '../assets/img/header/logo.svg'
import outSVG from '../assets/img/header/a.svg'
import cancelSVG from '../assets/img/header/cancel.svg'
if (process.client) {
  var {ScrollTrigger} = require('gsap/ScrollTrigger');
  var {ScrollToPlugin} = require('gsap/ScrollToPlugin')
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}
export default {
  name: 'TheHeader',
  components: {
    logoSVG,
    outSVG,
    cancelSVG
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
      mode: '',
      clickedItem: 'oscar',
      navbarlinks: null,
    }
  },
  computed: {

    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return this.isSticky ? 'bg-greyWhite' : 'bg-greyWhite'
    },
    navSignUpClassList() {
      return this.isSticky ? 'bg-purple text-black' : 'bg-purple text-white'
    },
    navSignInClassList() {
      return this.isSticky ? 'text-white' : ''
    },
    navContentClassList() {
      let classList = this.isSticky ? 'bg-white' : 'bg-gray-100'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    }
  },
  methods: {
    closeContactModal(id) {
      this.$store.dispatch('toggleContactModal', false)
      // window.scrollBy(0, document.getElementById('restore-wrapper').offsetTop)
      this.$store.dispatch('setNavClicked', true)
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#" + id, offsetY: 0 }
      }).then(()=> {
        this.$store.dispatch('setNavClicked', false)
      })
    },
    closeTabletContactModal(id) {
      this.isOpen=false
      document.getElementById('mobile-navbar').style.display='none'
      window.scrollBy(0, document.getElementById('restore-wrapper').offsetTop)
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#" + id, offsetY: 0 }
      });
    },
    onClickToggle() {
      this.isOpen=true; 
      document.getElementById('mobile-navbar').style.display='flex'
    },
    onClickCancel() {
      this.isOpen=false; 
      document.getElementById('mobile-navbar').style.display='none'
    }
  },
  mounted() {
    document.getElementById('mobile-navbar').style.display='none'
    // ScrollTrigger.addEventListener("refresh", () => document.body.style.removeProperty("overflow-y"));
    // ScrollTrigger.create({
    //   trigger: ".scrollpanels",
    //   start: "top top-=0",
    //   endTrigger: ".scrollpanels-content",
    //   end: "9999999",
    //   pin: true,
    //   pinSpacing: false,
    //   scrub: 1
    // });

    

    this.scrollY = window.scrollY
    if (window.innerWidth >= 1300) this.mode = 'desktop';
    else if(window.innerWidth >= 500) this.mode = 'tablet'
    else this.mode = 'mobile';
    const self = this;

    setTimeout(() => {
      if(self.mode == 'desktop') {
        self.navbarlinks = gsap.utils.toArray("#navbar .br-item");
      } else {
        self.navbarlinks = gsap.utils.toArray("#mobile-navbar .br-item");
      }
      
      const navLinks = self.navbarlinks;
      const panels = gsap.utils.toArray(".my-panel");
  
      console.log('navlinks', navLinks)
      console.log('panels', panels)
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top 50%",
  
          onEnter: () => {
            navLinks.forEach((e) => {
              e.classList.remove("clicked");
            });
            navLinks[i].classList.add("clicked");
          },
          onEnterBack: () => {
            navLinks.forEach((e) => {
              e.classList.remove("clicked");
            });
            navLinks[i].classList.add("clicked");
          }
        });
      });
    }, 2000);
  },

  beforeDestroy() {
  }
}
</script>

<style scoped>
.no-border {
  border: none !important;
}
.br-item {
  border-right: 1px solid black;
  padding: 0px 10px 0px 10px;
  cursor: pointer;
}
.br-item.clicked {
  color: orange;
}

.header-item.clicked {
  padding: 25px 0px 25px 0px;
  font-size: 14px;
  border-bottom: 1px solid orange;
  color: orange;
}
.header-item {
  padding: 25px 0px 25px 0px;
  font-size: 14px;
}
.bg-greyWhite {
  background-color: #F8F8F8 !important;
}
.bg-purple {
  background-color: #D2B8ED;
}
.bg-black {
  background-color: #2A2A2A;
}
.contact-us {
  color: white;
  background-color: #F25625;
  border-radius: 5px;
  font-weight: bold;
  padding: 3px 15px;
  margin-right: 50px;
  transition: all .1s;
}

.contact-us:hover {
  /* margin-top: -3px; */
  background-color: #F23325;
  box-shadow: 1px 2px 4px 1px rgb(0 0 0 / 49%);
}
.nav-btn {
  font-size: 57px;
  line-height: 40px;
  padding-bottom: 3px;
  cursor: pointer;
  display: none;
}
.mobile-menu {
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  left: 0;
  right: 0;
  background-color: white;
  font-size: 18px;
  color: #6E6E6E;
  height: calc(100vh - 73px);
  display: none;
  justify-content: space-between;
}
.mobile-menu-item {
  border-top: 2px solid #B7B4B1;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.ft-title {
  font-size: 16px;
}
.ft-content {
  font-size: 14px;
  color: #D4DAE0;
}
.mobile-menu .mobile-menu-item:last-child{
  border-bottom: 2px solid #B7B4B1;
}
.nav-btn-clicked {
  display: none;
  cursor: pointer;
}
.header-nav {
  opacity: 0.9;
}
@media screen and (max-width: 1299px) {
  .desktop-item {
    display: none;
  }
  .nav-btn, .nav-btn-clicked{
    display: block;
  }
  
  .br-item {
    border: none;
  }

  .header-nav {
    opacity: 1;
  }

  .custom-header {
    margin-left: 20px;
    margin-right: 20px;
    width: auto !important;
  }
}
</style>