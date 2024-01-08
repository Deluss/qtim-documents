<template>
	index page
</template>

<script lang="ts" setup>
import { onMounted } from '#imports'

onMounted(() => {
	YaAuthSuggest.init(
		{
			client_id: '24aa622ba5d945b7bfefac27e8898eb8',
			response_type: 'token',
			redirect_uri: 'https://oauth.yandex.ru/verification_code'
		},
		'https://deluss.github.io/qtim-documents'
	)
		.then(({
						 handler
					 }) => handler())
		.then(data => console.log('Сообщение с токеном', data))
		.catch(error => console.log('Обработка ошибки', error));
})
</script>
