<template>
	<div class="d-flex align-items-center justify-content-center overflow-auto w-100 h-100 position-fixed">
		<div class="m-auto card custom-card">
			<div class="card-body">
				<div class="custom-card_body-header">
					<div><img src="/images/card-letter.png" class="rounded mx-auto d-block custom-card_body-header__img" alt="image"></div>
					<div class="custom-card_body-header__title">Verification</div>
					<div class="custom-card_body-header__subtitle">Check your email</div>
				</div>
				<div class="col-md-12 text-center">
					<ul class="list-group" v-if="message">
						<li class="list-group-item list-group-item-danger">{{ message }}</li>
					</ul>
				</div>
				<div class="form-group">
					<label for="customerId" class="custom-card_label text-uppercase">Code</label>
					<input type="text" v-model="code" class="form-control custom-card_input" id="customerId" placeholder="Ex. 12345">
				</div>
				<button type="submit" class="btn btn-primary w-100" @click="confirm">Confirm</button>

				<div class="custom-card_body-footer">
					<div class="custom-card_body-footer__text">Don't get?</div>
					<router-link to="registration" href="#" class="custom-card_body-footer__link">Resend code</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CodeVerification",
	data() {
		return {
			code: null,
			message: null
		}
	},
	methods: {
		confirm() {
			this.message = null;
			this.$http.post('api/verification-code', {
				code: this.code
			}).then(() => {
				this.$store.dispatch('user/setVerify', true)
				this.$router.push('success')
			}).catch(error => {
				this.message = error.response.data.message ?? 'Something went wrong'
			})
		}
	}
}
</script>

<style scoped>

</style>