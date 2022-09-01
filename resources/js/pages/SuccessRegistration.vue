<template>
	<div class="d-flex align-items-center justify-content-center overflow-auto w-100 h-100 position-fixed">
		<div class="m-auto card custom-card">
			<div class="card-body">
				<div class="custom-card_body-header">
					<div><img src="/images/check.png" class="rounded mx-auto d-block custom-card_body-header__img" alt="image"></div>
					<div class="custom-card_body-header__title">Complete Registration</div>
					<div class="custom-card_body-header__subtitle">Hey dude ! Welcome to Loan In Click, please check your mailbox and confirm your account.</div>
				</div>
				<div class="custom-card_body-footer">
					<a href="#" class="custom-card_body-footer__link" @click="backToLogin">Back to login</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SuccessRegistration",
	methods: {
		backToLogin() {
			this.$store.dispatch('user/clearLogin')
			this.$router.push('login')
		}
	}
}
</script>

<style scoped>

</style>