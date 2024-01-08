<script setup lang="ts">
import LayoutHeader from '~/components/layout/LayoutHeader.vue'
</script>

<template>
	<el-container>
		<el-header>
			<layout-header />
		</el-header>
		<el-main>
			<nuxt-page />
		</el-main>
	</el-container>
</template>
