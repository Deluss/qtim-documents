<script lang="ts" setup>
import { onMounted, useRoute } from '#imports'
const route = useRoute()

onMounted(() => {
	localStorage.setItem('access_token', String(route.query.access_token))
	localStorage.setItem('expires_in', String(route.query.expires_in))
	YaSendSuggestToken(
		'https://deluss.github.io/qtim-documents',
		{
			flag: true
		}
	)
	// window.close()
})
</script>

<template>
	<div>
		callback
	</div>
</template>
