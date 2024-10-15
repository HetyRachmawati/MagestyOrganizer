<template>
	<div class="layout">
	  <Sidebar />
	  <div class="main-content">
		<!-- Pass name as prop to Navbar -->
		<Navbar :username="name" />
		<slot name="header"></slot>
		<slot></slot>
		<Footer />
	  </div>
	</div>
  </template>
  
  <script>
  import Navbar from "@/components/admin/Navbar.vue";
  import Sidebar from "@/components/admin/Sidebar.vue";
  import Footer from "@/components/admin/Footer.vue";
  
  export default {
	components: {
	  Navbar,
	  Sidebar,
	  Footer,
	},
  };
  </script>
  
  <style scoped>
  .layout {
	display: flex;
  }
  
  .main-content {
	margin-left: 0;
	width: 100%;
	box-sizing: border-box;
  }
  </style>
  